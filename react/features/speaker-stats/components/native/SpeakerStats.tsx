import React, { useEffect } from 'react';
import { Appearance } from 'react-native';
import { useDispatch } from 'react-redux';

import JitsiScreen from '../../../base/modal/components/JitsiScreen';
import { resetSearchCriteria } from '../../actions.native';

import SpeakerStatsList from './SpeakerStatsList';
import SpeakerStatsSearch from './SpeakerStatsSearch';
import style from './styles';

/**
 * Component that renders the list of speaker stats.
 *
 * @returns {React$Element<any>}
 */
const SpeakerStats = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetSearchCriteria());
    }, []);

    const colorScheme = Appearance.getColorScheme();

    return (
        <JitsiScreen

            // jitsi edit add bg dark for participants pane
            style = { colorScheme === 'dark' ? style.speakerStatsContainerDark : style.speakerStatsContainer }>
            <SpeakerStatsSearch />
            <SpeakerStatsList />
        </JitsiScreen>
    );
};

export default SpeakerStats;
