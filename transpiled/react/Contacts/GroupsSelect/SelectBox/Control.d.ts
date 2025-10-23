export default Control;
declare function Control({ innerRef, innerProps, selectProps: { onControlClicked } }: {
    innerRef: any;
    innerProps: any;
    selectProps: {
        onControlClicked: any;
    };
}): JSX.Element;
declare namespace Control {
    namespace propTypes {
        const selectProps: PropTypes.Validator<object>;
    }
}
import PropTypes from "prop-types";
