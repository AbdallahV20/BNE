import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
    title: string;
    data: string;
};

export default function Data({ title, data }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.data}>{data}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        rowGap: 3,
    },
    title: {
        color: '#848484',
        fontSize: 17,
        fontFamily: 'GemunuLibre-Regular',
    },
    data: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'GemunuLibre-Regular',
    },
});
