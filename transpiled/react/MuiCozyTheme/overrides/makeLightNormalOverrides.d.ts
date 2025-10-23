export function makeLightNormalOverrides(theme: any): {
    MuiSelect: {
        iconOutlined: {
            top: string;
            right: number;
        };
        outlined: {
            '&&': {
                paddingRight: number;
            };
        };
    };
    MuiOutlinedInput: {
        root: {
            borderRadius: number;
            '&$disabled': {
                background: any;
            };
            '&$focused $notchedOutline': {
                borderWidth: string;
            };
            '&$error $notchedOutline': {
                borderColor: string;
            };
            '&$focused&$error $notchedOutline': {
                borderColor: any;
            };
            '&:hover $notchedOutline': {
                borderColor: any;
            };
            '&:hover&$error $notchedOutline': {
                borderColor: any;
            };
        };
        notchedOutline: {
            borderColor: any;
            transition: string;
        };
        input: {
            textAlign: string;
            padding: string;
        };
        inputMarginDense: {
            paddingTop: number;
            paddingBottom: number;
        };
    };
    MuiInputLabel: {
        outlined: {
            '&$marginDense': {
                transform: string;
            };
            '&:not($shrink)': {
                '&$error': {
                    color: any;
                };
            };
        };
    };
    MuiToggleButtonGroup: {
        groupedHorizontal: {
            '&.rounded': {
                marginRight: number;
                '&:last-child': {
                    marginRight: number;
                };
                '&:not(:first-child)': {
                    borderTopLeftRadius: string;
                    borderBottomLeftRadius: string;
                    marginLeft: string;
                    borderLeft: string;
                };
                '&:not(:last-child)': {
                    '&.rounded': {
                        borderTopRightRadius: string;
                        borderBottomRightRadius: string;
                    };
                };
            };
        };
    };
    MuiToggleButton: {
        root: {
            borderRadius: number;
            color: any;
            border: string;
            padding: number;
            '&$selected': {
                color: any;
                backgroundColor: string;
                '&:not($disabled)': {
                    '&.customColor': {
                        '&-primary': {
                            color: any;
                        };
                    };
                };
            };
            '&$disabled': {
                color: any;
            };
            '&.rounded': {
                border: number;
                borderRadius: any;
                padding: string;
                '&$selected': {
                    backgroundColor: any;
                    '&:not($disabled)': {
                        '&.customColor': {
                            '&-primary': {
                                color: any;
                                backgroundColor: string;
                                '&:hover': {
                                    textDecoration: string;
                                    backgroundColor: string;
                                    '@media (hover: none)': {
                                        backgroundColor: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        sizeSmall: {
            padding: number;
            '&.rounded': {
                padding: string;
            };
        };
        sizeLarge: {
            padding: number;
            '&.rounded': {
                padding: number;
            };
        };
    };
    MuiButton: {
        root: {
            borderRadius: number;
            lineHeight: string;
            padding: string;
            '&.customSize': {
                '&-default': {
                    height: string;
                };
                '&-auto': {
                    minHeight: string;
                };
            };
            '&.ghost': {
                border: number;
                '&:hover': {
                    border: number;
                };
            };
        };
        sizeSmall: {
            padding: string;
            '&.customSize': {
                '&-default': {
                    height: string;
                };
                '&-auto': {
                    minHeight: string;
                };
            };
            '&$text': {
                padding: string;
            };
        };
        sizeLarge: {
            padding: string;
            '&.customSize': {
                '&-default': {
                    height: string;
                };
                '&-auto': {
                    minHeight: string;
                };
            };
            '&$text': {
                padding: string;
            };
        };
        text: {
            minWidth: string;
            padding: string;
            '&:not($disabled)': {
                '&.customColor': {
                    '&-success': {
                        color: any;
                        '&:hover': {
                            backgroundColor: string;
                            '@media (hover: none)': {
                                backgroundColor: string;
                            };
                        };
                    };
                    '&-warning': {
                        color: any;
                        '&:hover': {
                            backgroundColor: string;
                            '@media (hover: none)': {
                                backgroundColor: string;
                            };
                        };
                    };
                    '&-error': {
                        color: any;
                        '&:hover': {
                            backgroundColor: string;
                            '@media (hover: none)': {
                                backgroundColor: string;
                            };
                        };
                    };
                    '&-info': {
                        color: any;
                        '&:hover': {
                            backgroundColor: string;
                            '@media (hover: none)': {
                                backgroundColor: string;
                            };
                        };
                    };
                };
            };
        };
        outlined: {
            '&:not($disabled)': {
                '&.ghost': {
                    backgroundColor: string;
                    '&:hover': {
                        backgroundColor: string;
                        '@media (hover: none)': {
                            backgroundColor: string;
                        };
                    };
                };
                '&.customColor': {
                    '&-primary': {
                        color: any;
                        borderColor: any;
                        '&:hover': {
                            backgroundColor: string;
                            '@media (hover: none)': {
                                backgroundColor: string;
                            };
                        };
                        '&.ghost': {
                            color: any;
                            borderColor: any;
                        };
                    };
                    '&-success': {
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
                    '&-warning': {
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
                    '&-error': {
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
                    '&-info': {
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
                };
            };
        };
        contained: {
            boxShadow: number;
            '&:not($disabled)': {
                '&.customColor': {
                    '&-success': {
                        color: any;
                        backgroundColor: any;
                        '&:hover': {
                            backgroundColor: any;
                            '@media (hover: none)': {
                                backgroundColor: any;
                            };
                        };
                    };
                    '&-warning': {
                        color: any;
                        backgroundColor: any;
                        '&:hover': {
                            backgroundColor: any;
                            '@media (hover: none)': {
                                backgroundColor: any;
                            };
                        };
                    };
                    '&-error': {
                        color: any;
                        backgroundColor: any;
                        '&:hover': {
                            backgroundColor: any;
                            '@media (hover: none)': {
                                backgroundColor: any;
                            };
                        };
                    };
                    '&-info': {
                        color: any;
                        backgroundColor: any;
                        '&:hover': {
                            backgroundColor: any;
                            '@media (hover: none)': {
                                backgroundColor: any;
                            };
                        };
                    };
                };
            };
        };
        startIcon: {
            marginLeft: string;
        };
    };
    MuiTabs: {
        root: {
            '&.segmented': {
                borderRadius: string;
                backgroundColor: any;
                overflow: string;
                minHeight: string;
                '& $indicator': {
                    top: string;
                    height: string;
                    transform: string;
                    borderRadius: string;
                    zIndex: number;
                    boxShadow: any;
                    backgroundColor: any;
                };
                '& $fixed': {
                    overflow: string;
                };
                '& $scrollButtons': {
                    borderRadius: string;
                };
            };
        };
    };
    MuiTab: {
        root: any;
    };
    MuiAccordion: {
        rounded: {
            borderRadius: any;
        };
        root: {
            boxShadow: string;
            borderWidth: string;
            borderStyle: string;
            borderColor: any;
            overflow: string;
            marginBottom: string;
        };
    };
    MuiAccordionSummary: {
        expanded: {};
        root: {
            backgroundColor: any;
            textTransform: string;
            fontWeight: string;
            fontSize: string;
            minHeight: string;
            padding: number;
            color: any;
            '&$expanded': {
                minHeight: string;
            };
        };
        expandIcon: {
            order: number;
            '&&': {
                marginLeft: string;
            };
            transform: string;
            '&$expanded': {
                marginLeft: string;
                transform: string;
            };
        };
        content: {
            margin: string;
            paddingLeft: string;
            paddingRight: string;
            order: number;
            '& > :last-child': {
                paddingRight: number;
            };
            '&$expanded': {
                margin: string;
            };
        };
    };
    MuiAccordionDetails: {
        root: {
            padding: number;
            borderTop: string;
        };
    };
    MuiStepConnector: {
        line: {
            borderColor: any;
        };
    };
    MuiStepContent: {
        root: {
            borderColor: any;
        };
    };
    MuiStepLabel: {
        label: any;
    };
    MuiListItemIcon: {
        root: {
            minWidth: string;
            width: number;
            height: number;
            alignItems: string;
            justifyContent: string;
            color: any;
        };
    };
    MuiListItem: {
        root: {
            gap: number;
            paddingTop: number;
            paddingBottom: number;
            minHeight: number;
            '&.small': {
                paddingTop: number;
                paddingBottom: number;
                minHeight: number;
            };
            '&.large': {
                paddingTop: number;
                paddingBottom: number;
                minHeight: number;
            };
            '&.cozyActionsItem': {
                wordBreak: string;
            };
        };
        dense: {
            paddingTop: number;
            paddingBottom: number;
            minHeight: number;
            '&.small': {
                paddingTop: number;
                paddingBottom: number;
                minHeight: number;
            };
            '&.large': {
                paddingTop: number;
                paddingBottom: number;
                minHeight: number;
            };
        };
    };
    MuiListSubheader: {
        root: any;
        sticky: {
            backgroundColor: any;
        };
    };
    MuiListItemText: {
        root: {
            marginTop: number;
            marginBottom: number;
        };
        multiline: {
            marginTop: number;
            marginBottom: number;
        };
        secondary: {
            marginTop: number;
        };
    };
    MuiListItemSecondaryAction: {
        root: {
            right: number;
        };
    };
    MuiMenu: {
        paper: {
            maxWidth: number;
        };
    };
    MuiMenuItem: {
        root: {
            [x: number]: {
                minHeight: number;
            };
            whiteSpace: string;
            overflow: string;
            wordBreak: string;
            paddingTop: number;
            paddingBottom: number;
            '&.cozyActionsItem': {
                minWidth: number;
            };
            '& .cozyListItemIcon': {
                width: number;
                height: number;
            };
        };
        gutters: {
            paddingLeft: number;
            paddingRight: number;
        };
    };
    MuiTableHead: {
        root: {
            backgroundColor: any;
            '&.virtualized': {
                '& .virtualizedCheckbox': {
                    opacity: number;
                    '&.checked': {
                        opacity: number;
                    };
                    '&:hover': {
                        opacity: number;
                    };
                };
                '&:hover': {
                    '& .virtualizedCheckbox': {
                        opacity: number;
                    };
                };
            };
        };
    };
    MuiTableRow: {
        root: {
            '&.disabled': {
                cursor: string;
                pointerEvents: string;
                opacity: number;
            };
            '&.virtualized': {
                '& .virtualizedCheckbox': {
                    opacity: number;
                    '&.visible': {
                        opacity: number;
                    };
                    '&.checked': {
                        opacity: number;
                    };
                    '&:hover': {
                        opacity: number;
                    };
                };
                '&:hover': {
                    '& .virtualizedCheckbox': {
                        opacity: number;
                    };
                };
            };
        };
    };
    MuiTableCell: {
        root: {
            padding: string;
        };
        head: any;
        body: {
            color: any;
            height: string;
        };
        sizeSmall: any;
        paddingCheckbox: {
            width: number;
            padding: number;
        };
        stickyHeader: {
            backgroundColor: any;
        };
    };
    MuiTableSortLabel: {
        root: {
            padding: string;
            color: any;
        };
        icon: {
            fontSize: number;
        };
    };
    MuiFormLabel: {
        root: {
            color: any;
            '&$disabled&$error': {
                color: any;
            };
        };
    };
    MuiFormHelperText: {
        root: {
            fontStyle: string;
            fontSize: string;
            marginTop: number;
            '&$disabled&$error': {
                color: any;
            };
        };
    };
    MuiDialog: {
        paper: {
            width: string;
            '&.small': {
                [x: number]: {
                    margin: string;
                    padding: string;
                    height: string;
                    maxHeight: string;
                    borderRadius: string;
                    '& .divider--dialog': {
                        marginLeft: string;
                        marginRight: string;
                    };
                };
                maxWidth: string;
            };
            '&.medium': {
                maxWidth: string;
            };
            '&.large': {
                maxWidth: string;
            };
            '&.full': {
                maxWidth: string;
            };
        };
        scrollPaper: {
            '&.alignTop': {
                alignItems: string;
            };
        };
        paperFullScreen: {
            '&.small': {
                maxWidth: string;
            };
            '&.medium': {
                maxWidth: string;
            };
            '&.large': {
                maxWidth: string;
            };
            '& .cozyDialogActions': {
                paddingBottom: string;
            };
            '& [class*="DialogCloseButton"]': {
                transform: string;
            };
            '& [class*="DialogBackButton"]': {
                transform: string;
            };
            '.flagship-app & .cozyDialogTitle': {
                paddingTop: string;
            };
            '.flagship-app & .cozyDialogContent': {
                marginBottom: string;
            };
        };
    };
    MuiDialogTitle: {
        root: any;
    };
    MuiDialogContent: {
        root: {
            [x: number]: {
                padding: string;
            };
            padding: string;
            '&.disableGutters': {
                padding: number;
                '& .dialogContentInner': {
                    marginBottom: number;
                };
                '& .dialogTitleFluidContainer': {
                    marginLeft: number;
                    marginRight: number;
                    marginTop: number;
                };
            };
            '& .dialogContentInner': {
                marginBottom: string;
                '&.withFluidActions': {
                    [x: number]: {
                        marginBottom: number;
                        display: string;
                        flexDirection: string;
                        height: string;
                        '& .dialogContentWrapper': {
                            flexGrow: number;
                            '&:not(.withActions)': {
                                paddingBottom: string;
                            };
                        };
                        '& .cozyDialogActions': {
                            paddingBottom: string;
                        };
                    };
                };
                '& .dialogTitleFluidContainer': {
                    [x: number]: {
                        marginLeft: string;
                        marginRight: string;
                        marginTop: string;
                    };
                    marginLeft: string;
                    marginRight: string;
                };
            };
        };
    };
    MuiDialogActions: {
        root: {
            [x: number]: {
                margin: string;
                '& button': {
                    flexGrow: number;
                };
            };
            margin: string;
            padding: number;
            '&.dialogActionsFluid': {
                margin: string;
            };
            '&.columnLayout': {
                display: string;
                flexDirection: string;
                '& button': {
                    width: string;
                    margin: number;
                    '&:not(:first-child)': {
                        marginBottom: string;
                    };
                };
            };
            '&:not(.columnLayout) > :not(:first-child):not(:first-child)': {
                marginLeft: number;
            };
        };
    };
    MuiDivider: {
        inset: {
            marginLeft: number;
            '&.divider--dialog': {
                marginLeft: number;
            };
        };
    };
    MuiAvatarGroup: {
        root: {
            '& > div:last-child': {
                boxShadow: string;
            };
        };
        avatar: {
            border: string;
        };
    };
    MuiAvatar: {
        root: {
            fontWeight: number;
            '&.size': {
                '&-xs': {
                    width: number;
                    height: number;
                    fontSize: number;
                    '& svg': {
                        width: number;
                        height: number;
                    };
                };
                '&-s': {
                    width: number;
                    height: number;
                    fontSize: number;
                    '& svg': {
                        width: number;
                        height: number;
                    };
                };
                '&-m': {
                    width: number;
                    height: number;
                    fontSize: number;
                    '& svg': {
                        width: number;
                        height: number;
                    };
                };
                '&-l': {
                    width: number;
                    height: number;
                    fontSize: number;
                    '& svg': {
                        width: number;
                        height: number;
                    };
                };
                '&-xl': {
                    width: number;
                    height: number;
                    fontSize: number;
                    '& svg': {
                        width: number;
                        height: number;
                    };
                };
            };
            '&.disabled': {
                color: any;
                background: string;
                '& img': {
                    filter: string;
                    opacity: number;
                };
            };
            '&.displayInline': {
                display: string;
            };
            '&.border': {
                border: string;
            };
            '&.innerBorder': {
                boxShadow: string;
            };
        };
        colorDefault: {
            backgroundColor: any;
            color: any;
        };
    };
    MuiCheckbox: {
        root: {
            padding: number;
            '&.small': {
                padding: number;
            };
        };
        colorSecondary: {
            '&$checked': {
                color: any;
            };
        };
    };
    MuiSwitch: {
        root: {
            width: number;
            height: number;
            padding: string;
            justifyContent: string;
        };
        checked: {
            '& + $track$track': {
                opacity: number;
            };
        };
        switchBase: {
            padding: number;
            top: number;
            left: number;
            color: any;
            '& .cozySwitchThumb': {
                display: string;
                alignItems: string;
                justifyContent: string;
                width: number;
                height: number;
                borderRadius: string;
                boxShadow: any;
                backgroundColor: any;
            };
            '&$checked': {
                transform: string;
            };
        };
        thumb: {
            width: number;
            height: number;
            backgroundColor: any;
        };
        track: {
            width: number;
            height: string;
            borderRadius: number;
            opacity: number;
            backgroundColor: any;
        };
        colorPrimary: {
            '&$disabled + $track': {
                opacity: number;
                backgroundColor: any;
            };
        };
        colorSecondary: {
            '&$checked': {
                color: any;
                '&$disabled + $track': {
                    opacity: number;
                    backgroundColor: any;
                };
                '& + $track': {
                    backgroundColor: any;
                };
            };
        };
        disabled: {
            '&$checked + $track': {
                backgroundColor: any;
            };
            '& .cozySwitchThumb': {
                backgroundColor: any;
            };
            '& $thumb': {
                backgroundColor: any;
            };
        };
    };
    MuiLinearProgress: {
        root: {
            height: number;
        };
        colorPrimary: {
            backgroundColor: any;
        };
    };
    MuiTooltip: {
        tooltip: {
            backgroundColor: string;
            fontSize: string;
            lineHeight: string;
            borderRadius: string;
            padding: string;
        };
    };
    MuiIconButton: {
        root: {
            color: any;
            '&.small': {
                padding: number;
            };
            '&.medium': {
                padding: number;
            };
            '&.large': {
                padding: number;
            };
            '&.xlarge': {
                padding: number;
            };
            '&.dialogIconButton': {
                backgroundColor: any;
                '&:hover': {
                    backgroundColor: any;
                };
            };
            '&.cozyStyles': {
                '&-error': {
                    color: any;
                    '&:hover': {
                        backgroundColor: string;
                        '@media (hover: none)': {
                            backgroundColor: string;
                        };
                    };
                };
            };
        };
    };
    MuiBadge: {
        badge: {
            boxSizing: string;
            padding: number;
            borderRadius: string;
            '&.badgeBorder': {
                border: string;
            };
            '&.badgeSizeLarge': {
                fontSize: string;
                height: string;
                minWidth: string;
            };
            '&.badgeSizeMedium': {
                height: string;
                minWidth: string;
                fontSize: string;
            };
            '&.badgeSizeSmall': {
                height: string;
                minWidth: string;
                fontSize: string;
            };
        };
        colorPrimary: {
            '&.colorSuccess': {
                backgroundColor: any;
                color: any;
            };
            '&.colorWarning': {
                backgroundColor: any;
                color: any;
            };
            '&.colorInfo': {
                backgroundColor: any;
                color: any;
            };
        };
        anchorOriginTopRightRectangular: {
            transform: string;
        };
        anchorOriginBottomRightRectangular: {
            transform: string;
        };
        anchorOriginBottomLeftRectangular: {
            transform: string;
        };
        anchorOriginTopLeftRectangular: {
            transform: string;
        };
        dot: {
            borderRadius: string;
            padding: number;
            '&.badgeSizeLarge': {
                height: string;
                minWidth: string;
            };
            '&.badgeSizeMedium': {
                height: string;
                minWidth: string;
            };
            '&.badgeSizeSmall': {
                height: string;
                minWidth: string;
            };
        };
    };
    MuiRadio: {
        root: {
            padding: string;
            '&$disabled svg': {
                borderRadius: string;
                backgroundColor: any;
                fill: any;
            };
            '&:not($checked) svg': {
                fill: any;
            };
        };
        colorPrimary: {
            '&$checked svg': {
                fill: any;
            };
            '&$disabled&$checked svg': {
                fill: any;
            };
        };
        colorSecondary: {
            '&$checked svg': {
                fill: any;
            };
            '&$disabled&$checked svg': {
                fill: any;
            };
        };
    };
    MuiChip: {
        root: {
            '&.noLabel': {
                width: string;
                '& $label': {
                    display: string;
                };
                '& $icon': {
                    margin: number;
                };
            };
            '&.customColor': {
                '&-primary': {
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
                '&-success': {
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
                '&-error': {
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
                '&-warning': {
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
                '&-info': {
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
            };
        };
    };
    MuiAlert: {
        root: {
            padding: string;
            '&.cozyStyles': {
                '&-primary': {
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
                '&-secondary': {
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
                '&-success': {
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
                '&-error': {
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
                '&-warning': {
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
                '&-info': {
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
            };
            '& $icon': {
                paddingTop: string;
            };
            '&.block': {
                flexWrap: string;
                '& $action': {
                    width: string;
                    paddingLeft: number;
                    justifyContent: string;
                };
            };
        };
        message: {
            flex: string;
            display: string;
            alignItems: string;
            flexWrap: string;
        };
        action: {
            marginRight: string;
        };
    };
    MuiAlertTitle: {
        root: {
            width: string;
            fontWeight: string;
        };
    };
    MuiSnackbarContent: {
        root: {
            padding: string;
            backgroundColor: any;
        };
    };
    MuiFab: {
        root: {
            borderRadius: number;
            width: number;
            height: number;
            color: any;
            backgroundColor: any;
            '&:hover': {
                backgroundColor: string;
            };
            '@media (hover: none)': {
                backgroundColor: any;
            };
        };
        primary: {
            color: any;
            backgroundColor: any;
            '&:hover': {
                backgroundColor: string;
                '@media (hover: none)': {
                    backgroundColor: any;
                };
            };
        };
        extended: {
            borderRadius: number;
            height: number;
            minWidth: number;
            padding: string;
            '&$sizeSmall': {
                borderRadius: number;
                height: number;
                minWidth: number;
                padding: string;
            };
            '&$sizeMedium': {
                borderRadius: number;
                height: number;
                minWidth: number;
                padding: string;
            };
        };
        sizeSmall: {
            borderRadius: number;
        };
        sizeMedium: {
            borderRadius: number;
            width: number;
            height: number;
        };
    };
    MuiMobileStepper: {
        root: {
            background: string;
            height: number;
            padding: number;
        };
        dot: {
            backgroundColor: string;
            width: string;
            height: string;
            margin: string;
            border: string;
            boxSizing: string;
        };
        dotActive: {
            border: string;
        };
    };
};
