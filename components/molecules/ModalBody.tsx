/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import {View,Text,Image} from 'react-native';
import { ThemeContext } from '../../App';
const ModalBody : React.FC = ()=> {
    const {theme} = useContext(ThemeContext);
    return (
        <View style={{alignItems:'center'}}>
            <Image  source={require('../../images/transfer.png')}/>
            <Text style={{fontSize:20,fontWeight:'bold',color : theme === 'dark' ? '#b7b7b7' : 'black',marginTop:5}}>Mission Complete</Text>
            <Text style={{marginTop:5}}>Transfer to Akhnaton was successful</Text>
        </View>
    );
};
export default ModalBody;
