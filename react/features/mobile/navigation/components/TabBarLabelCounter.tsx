import React from 'react';
import { Appearance, StyleProp, Text, TextStyle, View } from 'react-native';

import { navigationStyles } from './styles';

interface ITabBarLabelCounterProps {
    activeUnreadNr: boolean;
    isFocused: boolean;
    label: string;
    nbUnread?: number;
}

export const TabBarLabelCounter = ({ activeUnreadNr, isFocused, label, nbUnread }: ITabBarLabelCounterProps) => {
    // jitsi edit add bg mode
    const colorScheme = Appearance.getColorScheme();
    const descDark = navigationStyles.unreadCounterDescriptionFocusedDark;
    const descFocused = navigationStyles.unreadCounterDescriptionFocused;

    const descriptionFocusedStyle = colorScheme === 'dark' ? descDark : descFocused;

    const labelStyles = isFocused
        ? descriptionFocusedStyle
        : navigationStyles.unreadCounterDescription;

    return (
        <View
            style = {
                navigationStyles.unreadCounterContainer as StyleProp<TextStyle> }>
            <Text
                style = { labelStyles }>
                { label && label }
            </Text>
            {
                activeUnreadNr && (
                    <View
                        style = { navigationStyles.unreadCounterCircle as StyleProp<TextStyle> }>
                        <Text
                            style = { navigationStyles.unreadCounter as StyleProp<TextStyle> }>
                            { nbUnread }
                        </Text>
                    </View>
                )
            }
        </View>
    );
};
