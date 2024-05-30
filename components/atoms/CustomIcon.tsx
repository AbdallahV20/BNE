import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
    icon?: IconProp;
    text?: string;
    background?: string;
    iconColor?: string;
};

export default function CustomIcon({ icon, text, background, iconColor }: Props) {
    const styles = getStyles(background);

    return (
        <Pressable style={styles.container}>
            {icon && (
                <FontAwesomeIcon
                    style={styles.icon}
                    icon={icon}
                    color={iconColor || 'black'}
                    size={20}
                />
            )}
            {text && <Text style={styles.text}>{text}</Text>}
        </Pressable>
    );
}

const getStyles = (background?: string) =>
    StyleSheet.create({
        container: {
            padding: 15,
            borderRadius: 16,
            backgroundColor: background || 'white',
        },
        icon: {
            transform: background ? undefined : [{ rotateZ: '20deg' }],
        },
        text: {
            fontWeight: 'bold',
            color: '#007236',
        },
    });
