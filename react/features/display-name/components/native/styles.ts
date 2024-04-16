import BaseTheme from '../../../base/ui/components/BaseTheme.native';

export default {
    displayNameBackdrop: {
        alignSelf: 'center',

        // backgroundColor: BaseTheme.palette.ui01,
        backgroundColor: '#33415599',
        borderRadius: BaseTheme.shape.borderRadius,
        padding: 8
    },

    displayNamePadding: {
        // jitsi edit put padding in dislplay name in tileview
        paddingRight: 6,
        paddingLeft: 6
    },

    displayNameText: {
        // jitsi edit change display name text color on thumbnail
        color: BaseTheme.palette.text012,
        fontSize: 14,
        fontWeight: 'bold'
    }
};
