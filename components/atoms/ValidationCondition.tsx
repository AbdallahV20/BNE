import {View,Text, StyleSheet} from 'react-native';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../App';

type conditionProps = {
    conditionTitle : string,
    condition : boolean
}
export default function ValidationCondition({conditionTitle,condition}:conditionProps) : React.JSX.Element {
    const {theme} = useContext(ThemeContext);
    const styles = getStyle(theme);
    return (
        <View style={styles.validationComponent}>
            <FontAwesomeIcon icon={faCircle} size={12} color={condition ? '#007236' : '#B7B7B7'}/>
            <Text style={styles.validation}>{conditionTitle}</Text>
        </View>
    );
}


const getStyle = (theme:string) =>
    StyleSheet.create({
    validationComponent : {
        flexDirection:'row',
        columnGap:10,
        alignItems:'center',
        marginTop:12,
    },
    validation : {
        fontSize:16,
        color : theme === 'dark' ? 'white' : 'black',
    },
});
