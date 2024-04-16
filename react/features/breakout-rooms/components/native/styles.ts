import BaseTheme from '../../../base/ui/components/BaseTheme.native';


/**
 * The styles of the native components of the feature {@code breakout rooms}.
 */
export default {

    // jisti edit change add breakout room button and add margin top spacing
    button: {
        marginTop: BaseTheme.spacing[3],
        marginBottom: BaseTheme.spacing[4],
        marginHorizontal: BaseTheme.spacing[2],
        backgroundColor: '#0891B2'
    },

    // jisti edit add darkmode text
    buttonText: {
        color: BaseTheme.palette.text012
    },

    collapsibleList: {
        alignItems: 'center',
        borderRadius: BaseTheme.shape.borderRadius,
        display: 'flex',
        flexDirection: 'row',
        height: BaseTheme.spacing[7],
        marginHorizontal: BaseTheme.spacing[2],
        marginTop: BaseTheme.spacing[3]
    },

    arrowIcon: {
        backgroundColor: BaseTheme.palette.ui03,
        height: BaseTheme.spacing[5],
        width: BaseTheme.spacing[5],
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    roomName: {
        fontSize: 15,
        color: BaseTheme.palette.text01,
        fontWeight: 'bold',
        marginLeft: BaseTheme.spacing[2]
    },

    listTile: {
        fontSize: 15,
        color: BaseTheme.palette.text01,
        fontWeight: 'bold',
        marginLeft: BaseTheme.spacing[2]
    },

    // jitsi edit add dark text
    listTileDark: {
        fontSize: 15,
        color: BaseTheme.palette.text012,
        fontWeight: 'bold',
        marginLeft: BaseTheme.spacing[2]
    },

    autoAssignLabel: {
        color: BaseTheme.palette.link01
    },

    autoAssignButton: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: BaseTheme.spacing[3]
    },

    breakoutRoomsContainer: {
        backgroundColor: BaseTheme.palette.ui01,
        flex: 1,
        flexDirection: 'column',
        height: 'auto',
        paddingHorizontal: BaseTheme.spacing[3]
    },

    // jitsi edit add dark mode breakout rooms
    breakoutRoomsContainerDark: {
        backgroundColor: BaseTheme.palette.ui02Dark,
        flex: 1,
        flexDirection: 'column',
        height: 'auto',
        paddingHorizontal: BaseTheme.spacing[3]
    },

    inputContainer: {
        marginLeft: BaseTheme.spacing[2],
        marginRight: BaseTheme.spacing[2],
        marginTop: BaseTheme.spacing[4]
    },

    centerInput: {
        paddingRight: BaseTheme.spacing[3],
        textAlign: 'center'
    }
};
