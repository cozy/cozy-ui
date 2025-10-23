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
export default function useClientErrors({ handleExceptions }?: {
    handleExceptions?: boolean | undefined;
} | undefined): {
    ClientErrors: Function;
};
