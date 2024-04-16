import React, { useCallback } from 'react';
import { Appearance, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import JitsiScreen from '../../../base/modal/components/JitsiScreen';
import { isLocalParticipantModerator } from '../../../base/participants/functions';

import LobbyParticipantList from './LobbyParticipantList';
import MeetingParticipantList from './MeetingParticipantList';
import ParticipantsPaneFooter from './ParticipantsPaneFooter';
import VisitorsList from './VisitorsList';
import styles from './styles';


/**
 * Participants pane.
 *
 * @returns {React$Element<any>}
 */
const ParticipantsPane = () => {
    const isLocalModerator = useSelector(isLocalParticipantModerator);
    const keyExtractor
        = useCallback((e: undefined, i: number) => i.toString(), []);

    // jitsi edit add darkmmode bg participants pane
    const colorScheme = Appearance.getColorScheme();
    const participantPaneStyle = styles.participantsPaneContainer;
    const participantPaneStyleDark = styles.participantsPaneContainerDark;

    return (
        <JitsiScreen
            footerComponent = { isLocalModerator ? ParticipantsPaneFooter : undefined }

            // jitsi edit add darkmmode bg participants pane
            style = { colorScheme === 'dark' ? participantPaneStyleDark : participantPaneStyle }>

            { /* Fixes warning regarding nested lists */ }
            <FlatList

                // eslint-disable-next-line react/jsx-no-bind
                ListHeaderComponent = { () => (
                    <>
                        <VisitorsList />
                        <LobbyParticipantList />
                        <MeetingParticipantList />
                    </>
                ) }
                data = { [] as ReadonlyArray<undefined> }
                keyExtractor = { keyExtractor }
                renderItem = { null }
                windowSize = { 2 } />
        </JitsiScreen>
    );
};

export default ParticipantsPane;
