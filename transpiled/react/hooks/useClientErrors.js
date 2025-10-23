import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import filter from 'lodash/filter';
import React, { useCallback, useState, useEffect } from 'react';
import { useClient } from 'cozy-client';
import { FetchError } from 'cozy-stack-client';
import QuotaAlert from "cozy-ui/transpiled/react/deprecated/QuotaAlert";
/**
 * Rendering functions for client fetch errors by status code
 *
 * @private
 * @type {object}
 */

var byHttpStatus = {
  413: QuotaError // <QuotaError />

};
/**
 * Display for a quota error from the client
 *
 * @see QuotaAlert
 * @private
 * @param {object} props - Props
 * @param {Function} props.dismiss - remove the error from the stack to display
 * @returns {React.ReactElement}
 */

function QuotaError(_ref) {
  var dismiss = _ref.dismiss;
  return /*#__PURE__*/React.createElement(QuotaAlert, {
    onClose: dismiss
  });
}
/**
 * Returns the handler for an error
 *
 * @param {import("../types").ClientError} error - The error
 * @returns {Function|null} React Component
 */


function getErrorComponent(error) {
  if (error instanceof Response || error instanceof FetchError) {
    var status = error.status || '';
    return byHttpStatus[status] || null;
  }

  return null;
}
/**
 * Renders a stack of errors
 *
 * @private
 * @see ClientErrors
 * @param {import("../types").ClientError[]} errorStack - array of errors/exceptions
 * @param {Function} setErrorStack - mutates the array of errors
 * @returns {Array<React.ReactElement>} React rendering
 */


function renderErrors(errorStack, setErrorStack) {
  var errors = errorStack.map(function (error, key) {
    var Component = getErrorComponent(error);

    if (Component) {
      var dismiss = function dismiss() {
        return setErrorStack(function (stack) {
          return filter(stack, function (e) {
            return e !== error;
          });
        });
      };

      return /*#__PURE__*/React.createElement(Component, {
        key: key,
        error: error,
        dismiss: dismiss
      });
    } else {
      return null;
    }
  });
  return errors;
}
/**
 * Manages the client errors and allows to display them
 *
 * Returns a `ClientErrors` React component that takes care
 * of how to display cozy-client errors (probably displaying a modal)
 *
 * Only Quota Errors are managed for now.
 *
 * @example
 * ```
 * const App = () => {
 *   const { ClientErrors } = useClientErrors()
 *
 *   return <Layout>
 *      <h1>My app</h1>
 *      <ClientErrors />
 *   </Layout>
 * }
 * ```
 *
 * @param {object} [props] - Props
 * @param {boolean} [props.handleExceptions] - should cozy-client directly handle errors before forwarding them to the caller?
 * @returns {{ClientErrors: Function}} React component
 */


export default function useClientErrors() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$handleException = _ref2.handleExceptions,
      handleExceptions = _ref2$handleException === void 0 ? true : _ref2$handleException;

  var client = useClient();

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      errorStack = _useState2[0],
      setErrorStack = _useState2[1];
  /**
   * Handle client errors, add them to the error stack
   *
   * @param {import("../types").ClientError} error -
   * @returns {boolean} true if the error was manager, false otherwise
   */


  var handleError = useCallback(function (error) {
    // `isErrorManaged` is there to avoid the same error to be added twice
    // once the error has been added once, the `isErrorManaged`is set to true
    // and any future push is ignored
    if (error.isErrorManaged) return false;
    var isManageable = !!getErrorComponent(error);

    if (isManageable) {
      error.isErrorManaged = true;
      setErrorStack(function (stack) {
        return stack.concat(error);
      });
      return true;
    } else {
      error.isErrorManaged = false;
      return false;
    }
  }, [setErrorStack]);
  useEffect(function () {
    if (handleExceptions) {
      client.on('error', handleError);
      return function () {
        return client.removeListener('error', handleError);
      };
    } else {
      return undefined;
    }
  }, [client, handleError, handleExceptions]); // @ts-ignore

  var ClientErrors = useCallback(function () {
    return renderErrors(errorStack, setErrorStack);
  }, [errorStack, setErrorStack]); // @ts-ignore

  ClientErrors.displayName = 'ClientErrors';
  return {
    ClientErrors: ClientErrors
  };
}