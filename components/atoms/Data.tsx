/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View,Text } from 'react-native';

type Props = {
    title:string
    ,data:string
}

export default function Data({title,data}:Props) {
    return (
        <View style={{rowGap:3}}>
            <Text style={{color:'#848484',fontSize:17,fontFamily:'GemunuLibre-Regular'}}>{title}</Text>
            <Text style={{color:'white',fontSize:17,fontFamily:'GemunuLibre-Regular'}}>{data}</Text>
        </View>
    );
}
