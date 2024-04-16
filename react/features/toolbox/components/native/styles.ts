import ColorSchemeRegistry from '../../../base/color-scheme/ColorSchemeRegistry';
import { schemeColor } from '../../../base/color-scheme/functions';
import BaseTheme from '../../../base/ui/components/BaseTheme.native';

const BUTTON_SIZE = 48;

// Toolbox, toolbar:

/**
 * The style of toolbar buttons.
 */
const toolbarButton = {
    borderRadius: BaseTheme.shape.borderRadius,
    borderWidth: 0,
    flex: 0,
    flexDirection: 'row',
    height: BUTTON_SIZE,
    justifyContent: 'center',
    marginHorizontal: 6,
    marginVertical: 6,
    width: BUTTON_SIZE
};

/**
 * The icon style of the toolbar buttons.
 */
const toolbarButtonIcon = {
    alignSelf: 'center',
    color: BaseTheme.palette.icon04,
    fontSize: 24
};


/**
 * The icon style of toolbar buttons which display white icons.
 */
// const whiteToolbarButtonIcon = {
//     ...toolbarButtonIcon,
//     color: BaseTheme.palette.icon01
// };

// // jitsi edit add toggled
// const whiteToolbarButtonIconToggled = {
//     ...toolbarButtonIcon,
//     color: BaseTheme.palette.icon05
// };


// jitsi edit change hangup icon color to whiute
const whiteToolbarButtonIconDark = {
    ...toolbarButtonIcon,
    color: BaseTheme.palette.icon012
};

/**
 * The style of reaction buttons.
 */
const reactionButton = {
    ...toolbarButton,
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: 0,
    marginHorizontal: 0
};

const gifButton = {
    ...reactionButton,
    backgroundColor: '#000'
};

/**
 * The style of the emoji on the reaction buttons.
 */
const reactionEmoji = {
    fontSize: 20,
    color: BaseTheme.palette.icon01
};

const reactionMenu = {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BaseTheme.palette.ui01,
    padding: BaseTheme.spacing[3]
};

// jitsi edit add bg dark for reactions menu
const reactionMenuDark = {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BaseTheme.palette.ui01Dark,
    padding: BaseTheme.spacing[3]
};

/**
 * The Toolbox and toolbar related styles.
 */
const styles = {

    sheetGestureRecognizer: {
        alignItems: 'stretch',
        flexDirection: 'column'
    },

    /**
     * The style of the toolbar.
     */
    toolbox: {
        alignItems: 'center',

        // backgroundColor: BaseTheme.palette.ui01,
        // jitsi edit change toolbar bg
        backgroundColor: BaseTheme.palette.ui01,
        borderColor: 'red',
        borderRadius: BaseTheme.shape.borderRadius,
        borderStyle: 'solid',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    // jitsi edit add darkmode bg for toolbox
    toolboxDark: {
        alignItems: 'center',

        // backgroundColor: BaseTheme.palette.ui01,
        // jitsi edit change toolbar bg
        backgroundColor: BaseTheme.palette.ui01Dark,
        borderColor: 'red',
        borderRadius: BaseTheme.shape.borderRadius,
        borderStyle: 'solid',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    /**
     * The style of the root/top-level container of {@link Toolbox}.
     */
    toolboxContainer: {
        borderColor: 'red',
        borderRadius: BaseTheme.shape.borderRadius,
        borderStyle: 'solid',
        flexDirection: 'column',
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%'
    }
};

export default styles;

/**
 * Color schemed styles for the @{Toolbox} component.
 */
ColorSchemeRegistry.register('Toolbox', {
    /**
     * Styles for buttons in the toolbar.
     */
    buttonStyles: {
        iconStyle: toolbarButtonIcon,
        style: toolbarButton
    },

    buttonStylesBorderless: {
        // jitsi edit remove color for icons that are outlibne
        iconStyle: {
            ...toolbarButtonIcon,
            color: BaseTheme.palette.icon01,
            strokeColor: BaseTheme.palette.icon01,
            stroke: BaseTheme.palette.icon01,
            fill: BaseTheme.palette.icon01,
            strokeWidth: 1.5
        },
        style: {
            ...toolbarButton,
            backgroundColor: 'transparent'
        },
        underlayColor: 'transparent'
    },

    buttonStylesBorderlessDark: {
        // jitsi edit add bg dark color for icons
        iconStyle: {
            ...toolbarButtonIcon,
            color: BaseTheme.palette.icon012
        },
        style: {
            ...toolbarButton,
            backgroundColor: 'transparent'
        },
        underlayColor: 'transparent'
    },

    // jitsi edit add style for icons that are solid like horizontal need color
    buttonStylesBorderlessSolid: {
        iconStyle: {
            ...toolbarButtonIcon,
            color: BaseTheme.palette.icon01
        },
        style: {
            ...toolbarButton,
            backgroundColor: 'transparent'
        },
        underlayColor: 'transparent'
    },

    backgroundToggle: {
        // jitsi edit change bg to transparent
        // backgroundColor: BaseTheme.palette.ui04,
        backgroundColor: 'transparent'
    },

    hangupMenuContainer: {
        marginHorizontal: BaseTheme.spacing[2],
        marginVertical: BaseTheme.spacing[2]
    },

    hangupButton: {
        flex: 1,
        marginHorizontal: BaseTheme.spacing[2],
        marginVertical: BaseTheme.spacing[2]
    },

    hangupButtonStyles: {
        iconStyle: whiteToolbarButtonIconDark,
        style: {
            ...toolbarButton,
            backgroundColor: schemeColor('hangup')
        },

        // jitsi edit change bg after toggle of hangup button
        // underlayColor: BaseTheme.palette.ui04
        underlayColor: '#e02b33'
    },

    reactionDialog: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent'
    },

    overflowReactionMenu: reactionMenu,

    // jisti edit add dark mode for reactions menu
    overflowReactionMenuDark: reactionMenuDark,

    reactionMenu: {
        ...reactionMenu,

        // jitsi edit change border radius
        borderRadius: 10,
        width: 360
    },

    // jisti edit add dark mode for reactions menu
    reactionMenuDark: {
        ...reactionMenuDark,

        // jitsi edit change border radius
        borderRadius: 10,
        width: 360
    },

    reactionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },

    reactionButton: {
        gifButton,
        style: reactionButton,
        underlayColor: BaseTheme.palette.ui04,
        emoji: reactionEmoji
    },

    emojiAnimation: {
        color: BaseTheme.palette.icon01,
        position: 'absolute',
        zIndex: 1001,
        elevation: 2,
        fontSize: 20,
        left: '50%',
        top: '100%'
    },

    /**
     * Styles for toggled buttons in the toolbar.
     */
    toggledButtonStyles: {
        iconStyle: {
            ...toolbarButtonIcon,
            color: BaseTheme.palette.icon05
        },
        style: {
            ...toolbarButton
        },
        underlayColor: 'transparent',
    },

    // jitsi edit add muted for toolbox muted icons
    mutedButtonStyles: {
        iconStyle: {
            ...toolbarButtonIcon,
            color: BaseTheme.palette.icon01
        },
        style: {
            ...toolbarButton
        },
        underlayColor: 'transparent'
    },

    // jitsi edit add muted for toolbox muted icons in dark mode
    mutedButtonStylesDark: {
        iconStyle: {
            ...toolbarButtonIcon,
            color: BaseTheme.palette.icon012
        },
        style: {
            ...toolbarButton
        },
        underlayColor: 'transparent'
    }
});
