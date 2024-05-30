import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { BeneficiariesStackProps } from '../pages/Beneficiaries/Beneficiaries';
import { ThemeContext } from '../../App';

export default function AddButton() {
    const navigation = useNavigation<NativeStackNavigationProp<BeneficiariesStackProps>>();
    const { theme } = useContext(ThemeContext);
    const styles = getStyles(theme);

    return (
        <Pressable
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('BeneficiariesAdd')}
        >
            <FontAwesomeIcon color="#007236" icon={faCirclePlus} />
            <Text style={styles.text}>Add</Text>
        </Pressable>
    );
}

const getStyles = (theme: string) => StyleSheet.create({
    buttonContainer: {
        borderRadius: 20,
        padding: 5,
        flexDirection: 'row',
        columnGap: 5,
        alignItems: 'center',
        height: 35,
        paddingHorizontal: 10,
        backgroundColor: theme === 'dark' ? '#383838' : 'white',
    },
    text: {
        color: theme === 'dark' ? 'white' : 'black',
    },
});
