export function makeAlertBackgroundColor({ theme, severity }: {
    theme: any;
    severity: any;
}): {
    standard: string;
    outlined: any;
    filled: any;
};
export function makeAlertColor(theme: any, severity: any): {
    '&-standard': {
        color: any;
        backgroundColor: string;
        '& $icon': {
            color: any;
        };
        '& $action': {
            '& button[title="Close"]': {
                color: any;
            };
        };
    };
    '&-outlined': {
        color: any;
        border: string;
        '& $icon': {
            color: any;
        };
    };
    '&-filled': {
        color: any;
        backgroundColor: any;
        '& $action': {
            '& button[title="Close"]': {
                color: any;
            };
        };
    };
};
export function makeChipStyleByColor(theme: any, color: any): {
    color: any;
    borderColor: any;
    '&$clickable, &$deletable': {
        '&:hover, &:focus': {
            borderColor: any;
            backgroundColor: any;
        };
    };
    '& $icon': {
        color: any;
        fill: any;
    };
    '& $deleteIcon': {
        color: any;
        fill: any;
    };
    '&$colorPrimary': {
        padding: string;
        color: any;
        backgroundColor: any;
        '& $icon, & $deleteIcon': {
            color: any;
            fill: any;
        };
        '&$disabled': {
            opacity: number;
            color: any;
            backgroundColor: any;
            '& $icon, & $deleteIcon': {
                color: any;
                fill: any;
            };
        };
        '&$clickable, &$deletable': {
            '&:hover, &:focus': {
                backgroundColor: any;
            };
        };
    };
    '&.ghost': {
        borderWidth: string;
        borderStyle: string;
        '&:not($disabled)': {
            color: any;
            borderColor: string;
            backgroundColor: string;
            '& $icon, & $deleteIcon': {
                color: any;
                fill: any;
            };
        };
        '&$clickable, &$deletable': {
            '&:hover, &:focus': {
                borderColor: string;
                backgroundColor: string;
            };
        };
    };
};
export function makeSecondaryButtonStyle(theme: any, color: any): {
    color: any;
    borderColor: any;
    '&:hover': {
        backgroundColor: string;
        '@media (hover: none)': {
            backgroundColor: string;
        };
    };
    '&.ghost': {
        backgroundColor: string;
        '&:hover': {
            backgroundColor: string;
            '@media (hover: none)': {
                backgroundColor: string;
            };
        };
    };
};
export function makeTextButtonStyle(theme: any, color: any): {
    color: any;
    '&:hover': {
        backgroundColor: string;
        '@media (hover: none)': {
            backgroundColor: string;
        };
    };
};
export function makeContainedButtonStyle(theme: any, color: any): {
    color: any;
    backgroundColor: any;
    '&:hover': {
        backgroundColor: any;
        '@media (hover: none)': {
            backgroundColor: any;
        };
    };
};
export function getFlagshipCssVar(position: string): string;
export function makeShadows(type: string, variant: string): array;
