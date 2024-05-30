import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';

type Props = {
    title: string;
    pressFunction: () => void;
    color: string;
};

export default function CustomButton({ title, pressFunction, color }: Props) {
    const styles = getStyles(color);

    return (
        <Pressable style={styles.input} onPress={pressFunction}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const getStyles = (color: string) => StyleSheet.create({
    input: {
        borderRadius: 15,
        padding: 16,
        marginBottom: 5,
        backgroundColor: color,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
