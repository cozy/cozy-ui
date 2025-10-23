export default ModalButtons;
declare function ModalButtons({ secondaryText, secondaryAction, secondaryType, primaryText, primaryAction, primaryType, children, className }: {
    secondaryText: any;
    secondaryAction: any;
    secondaryType: any;
    primaryText: any;
    primaryAction: any;
    primaryType: any;
    children: any;
    className: any;
}): JSX.Element;
declare namespace ModalButtons {
    namespace defaultProps {
        const primaryType: string;
        const secondaryType: string;
    }
}
