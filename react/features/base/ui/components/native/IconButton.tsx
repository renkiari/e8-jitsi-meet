import React from 'react';
import { TouchableHighlight } from 'react-native';

import Icon from '../../../icons/components/Icon';
import styles from '../../../react/components/native/styles';
import { IIconButtonProps } from '../../../react/types';
import { BUTTON_TYPES } from '../../constants.native';
import BaseTheme from '../BaseTheme.native';


const IconButton: React.FC<IIconButtonProps> = ({
    accessibilityLabel,
    color: iconColor,
    disabled,
    onPress,
    size,
    src,
    style,
    tapColor,
    type
}: IIconButtonProps) => {
    const { PRIMARY, SECONDARY, TERTIARY, PRIMARYDARK, CHATCUSTOM } = BUTTON_TYPES;

    let color;
    let underlayColor;
    let iconButtonContainerStyles;

    if (type === PRIMARY) {
        color = BaseTheme.palette.icon01;
        iconButtonContainerStyles = styles.iconButtonContainerPrimary;
        underlayColor = BaseTheme.palette.action01;

    // jitsi edit added primary dark in icon styles
    } else if (type === PRIMARYDARK) {
        color = BaseTheme.palette.icon012;
        iconButtonContainerStyles = styles.iconButtonContainerPrimary;
        underlayColor = BaseTheme.palette.action01;
    } else if (type === SECONDARY) {
        color = BaseTheme.palette.icon04;
        iconButtonContainerStyles = styles.iconButtonContainerSecondary;
        underlayColor = BaseTheme.palette.action02;
    } else if (type === TERTIARY) {
        color = iconColor;
        iconButtonContainerStyles = styles.iconButtonContainer;
        underlayColor = BaseTheme.palette.action03;
    } else if (type === CHATCUSTOM) {
        // jitsi edit add custom chat send input button
        color = BaseTheme.palette.action01;
        iconButtonContainerStyles = {
            ...BaseTheme.iconButtonContainer
        };
        underlayColor = 'transparent';
    } else {
        color = iconColor;
        underlayColor = tapColor;
    }

    // jitsi edit add custom chat send input button for disabled
    if (disabled && type === CHATCUSTOM) {
        color = BaseTheme.palette.icon03;
        iconButtonContainerStyles = {
            ...BaseTheme.iconButtonContainer,
        };
        underlayColor = 'transparent';
    }

    if (disabled && type !== CHATCUSTOM) {
        color = BaseTheme.palette.icon03;
        iconButtonContainerStyles = styles.iconButtonContainerDisabled;
        underlayColor = 'transparent';
    }

    return (
        <TouchableHighlight
            accessibilityLabel = { accessibilityLabel }
            disabled = { disabled }
            onPress = { onPress }
            style = { [
                iconButtonContainerStyles,
                style
            ] }
            underlayColor = { underlayColor }>
            <Icon
                color = { color }

                // jitsi edit change condition for input button size
                // size = { 20 || size }
                size = { size ? size : 20 }
                src = { src } />
        </TouchableHighlight>
    );
};

export default IconButton;
