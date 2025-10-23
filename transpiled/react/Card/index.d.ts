export class Card extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
export namespace Card {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const inset: PropTypes.Requireable<boolean>;
        const tag: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
    namespace defaultProps {
        const tag_1: string;
        export { tag_1 as tag };
    }
}
export default Card;
import React from "react";
import PropTypes from "prop-types";
