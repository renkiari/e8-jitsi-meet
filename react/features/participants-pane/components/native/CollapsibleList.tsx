import React, { useCallback, useState } from 'react';
import { Appearance, GestureResponderEvent, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

import Icon from '../../../base/icons/components/Icon';
import { IconArrowDown, IconArrowUp } from '../../../base/icons/svg';
import styles from '../../../breakout-rooms/components/native/styles';

interface IProps {

    /**
     * The children to be displayed within this list.
     */
    children: React.ReactNode;

    /**
     * Callback to invoke when the {@code CollapsibleList} is long pressed.
     */
    onLongPress?: (e?: GestureResponderEvent) => void;

    /**
     * Collapsible list title.
     */
    title: Object;
}

const CollapsibleList = ({ children, onLongPress, title }: IProps) => {
    const [ collapsed, setCollapsed ] = useState(false);
    const _toggleCollapsed = useCallback(() => {
        setCollapsed(!collapsed);
    }, [ collapsed ]);

    // jisti edit add dark mode collapsible
    const colorScheme = Appearance.getColorScheme();
    const listTitleStyle = colorScheme === 'dark' ? styles.listTileDark : styles.listTile;

    return (
        <View>
            <TouchableOpacity
                onLongPress = { onLongPress }
                onPress = { _toggleCollapsed }
                style = { styles.collapsibleList as ViewStyle }>
                <TouchableOpacity
                    onPress = { _toggleCollapsed }
                    style = { styles.arrowIcon as ViewStyle }>
                    <Icon
                        size = { 18 }
                        src = { collapsed ? IconArrowDown : IconArrowUp } />
                </TouchableOpacity>
                {/* // jitsi edit add dark mode collapsible */}
                <Text style = { listTitleStyle as TextStyle }>
                    { title }
                </Text>
            </TouchableOpacity>
            { !collapsed && children }
        </View>
    );
};

export default CollapsibleList;
