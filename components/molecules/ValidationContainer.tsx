import React from 'react';
import {View,StyleSheet} from 'react-native';
import ValidationCondition from '../atoms/ValidationCondition';
export default function ValidationContainer({validation}:any) {
    return (
    <>
        <View style={styles.validationContainer}>
            <View>
                <ValidationCondition conditionTitle="Lower case letter" condition={validation.lower} />
                <ValidationCondition conditionTitle="Upper case letter" condition={validation.upper} />
            </View>
            <View>
                <ValidationCondition conditionTitle="Number" condition={validation.number} />
                <ValidationCondition conditionTitle="Special Character" condition={validation.special} />
            </View>
        </View>
        <ValidationCondition conditionTitle="Minimum 8 characters" condition={validation.minChars} />
    </>
    );
}

const styles = StyleSheet.create({
    validationContainer : {
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
    },
});
