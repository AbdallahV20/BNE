import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { ThemeContext } from '../../App';

type Props = {
    name: string;
    date: string;
    money: string;
    img?: ImageSourcePropType;
    id: number;
    length: number;
};

export default function History({ name, date, money, img, id, length }: Props) {
    const { theme } = useContext(ThemeContext);
    const styles = getStyles(theme, id, length);

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                {img && <Image style={styles.image} source={img} />}
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>
            <Text style={styles.money}>{money}</Text>
        </View>
    );
}

const getStyles = (theme: string, id: number, length: number) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#B7B7B773',
        borderBottomWidth: id === length ? 0 : 1,
        paddingVertical: 12,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'cover',
        width: 55,
        height: 55,
        borderRadius: 10,
        marginEnd: 10,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        marginBottom: 3,
        color: theme === 'dark' ? '#b7b7b7' : 'black',
        fontFamily: 'GemunuLibre-Regular',
    },
    date: {
        color: '#b7b7b7',
        fontFamily: 'GemunuLibre-Regular',
    },
    money: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme === 'dark' ? '#b7b7b7' : 'black',
        fontFamily: 'GemunuLibre-Regular',
    },
});
