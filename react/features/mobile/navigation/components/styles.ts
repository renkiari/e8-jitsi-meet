import { BoxModel } from '../../../base/styles/components/styles/BoxModel';
import BaseTheme from '../../../base/ui/components/BaseTheme.native';


export const TEXT_COLOR = BaseTheme.palette.text01;

const unreadCounterDescription = {
    ...BaseTheme.typography.bodyShortBoldLarge,
    color: BaseTheme.palette.text03
};

const HEADER_ACTION_BUTTON_SIZE = 16;

const headerNavigationButtonLabel = {
    color: BaseTheme.palette.link01,
    fontSize: HEADER_ACTION_BUTTON_SIZE,
    lineHeight: BaseTheme.spacing[3]
};

const headerNavigationButton = {
    borderRadius: BaseTheme.shape.borderRadius,
    height: BaseTheme.spacing[6],
    marginLeft: BaseTheme.spacing[3],
    background: 'red'
};

/**
 * Styles of the navigation feature.
 */
export const navigationStyles = {

    connectingScreenContainer: {
        backgroundColor: '#F1F5F9',
        flex: 1
    },

    connectingScreenContent: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F1F5F9'
    },

    connectingScreenIndicator: {
        margin: BoxModel.margin
    },

    connectingScreenText: {
        color: TEXT_COLOR
    },

    headerNavigationButton: {
        ...headerNavigationButton
    },

    headerNavigationButtonIcon: {
        ...headerNavigationButton,
        padding: BaseTheme.spacing[2]
    },

    headerNavigationButtonDisabled: {
        backgroundColor: 'transparent',
        marginLeft: BaseTheme.spacing[2]
    },

    headerNavigationButtonLabel: {
        ...headerNavigationButtonLabel
    },

    headerNavigationButtonLabelDisabled: {
        ...headerNavigationButtonLabel,
        color: BaseTheme.palette.text03
    },

    headerNavigationButtonLabelBold: {
        ...headerNavigationButtonLabel,
        ...BaseTheme.typography.bodyShortRegularLarge
    },

    headerNavigationButtonLabelBoldDisabled: {
        ...headerNavigationButtonLabel,
        ...BaseTheme.typography.bodyShortRegularLarge,
        color: BaseTheme.palette.text03
    },

    unreadCounterContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',

        // jitsi edit remove ng for chats and polls
        backgroundColor: 'transparent'
    },

    unreadCounterDescription: {
        ...unreadCounterDescription
    },

    unreadCounterDescriptionFocused: {
        ...unreadCounterDescription,
        color: BaseTheme.palette.text01
    },

    // jitsi edit add dark mode for tab chats
    unreadCounterDescriptionFocusedDark: {
        ...unreadCounterDescription,
        color: BaseTheme.palette.text012
    },

    unreadCounterCircle: {
        backgroundColor: BaseTheme.palette.warning01,
        borderRadius: BaseTheme.spacing[4] / 2,
        height: BaseTheme.spacing[4],
        justifyContent: 'center',
        marginLeft: BaseTheme.spacing[2],
        width: BaseTheme.spacing[4]
    },

    unreadCounter: {
        ...BaseTheme.typography.bodyShortBold,
        alignSelf: 'center',
        color: BaseTheme.palette.text04
    }
};
