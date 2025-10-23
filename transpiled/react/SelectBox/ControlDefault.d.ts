export default ControlDefault;
declare function ControlDefault({ selectProps: { onControlClicked }, innerProps, ...props }: {
    [x: string]: any;
    selectProps: {
        onControlClicked: any;
    };
    innerProps: any;
}): JSX.Element;
declare namespace ControlDefault {
    namespace propTypes {
        const selectProps: PropTypes.Validator<object>;
    }
}
import PropTypes from "prop-types";
