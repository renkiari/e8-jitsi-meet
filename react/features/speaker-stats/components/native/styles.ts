import BaseTheme from '../../../base/ui/components/BaseTheme.native';

export default {

    customContainer: {
        marginVertical: BaseTheme.spacing[2]
    },

    speakerStatsContainer: {
        flexDirection: 'column',
        flex: 1,
        height: 'auto',
        paddingHorizontal: BaseTheme.spacing[3],
        backgroundColor: BaseTheme.palette.ui01
    },

    // jitsi edit add bg dark for participants stats
    speakerStatsContainerDark: {
        flexDirection: 'column',
        flex: 1,
        height: 'auto',
        paddingHorizontal: BaseTheme.spacing[3],
        backgroundColor: BaseTheme.palette.ui02Dark
    },

    speakerStatsItemContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        height: BaseTheme.spacing[9],
        alignItems: 'center'
    },

    speakerStatsAvatar: {
        width: BaseTheme.spacing[5],
        height: BaseTheme.spacing[5],
        marginRight: BaseTheme.spacing[3]
    },

    speakerStatsNameTime: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    speakerStatsText: {
        ...BaseTheme.typography.bodyShortRegularLarge,
        color: BaseTheme.palette.text01
    },

    // jitsi edit add bg for text in participants stats pane
    speakerStatsTextDark: {
        ...BaseTheme.typography.bodyShortRegularLarge,
        color: BaseTheme.palette.text012
    },

    speakerStatsTime: {
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 4
    },

    speakerStatsDominant: {
        backgroundColor: BaseTheme.palette.success02
    },

    speakerStatsLeft: {
        color: BaseTheme.palette.text03
    }
};
