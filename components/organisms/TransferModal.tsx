/* eslint-disable react-native/no-inline-styles */
import { Modal,View } from 'react-native';
import React, { useContext } from 'react';
import CustomButton from '../atoms/CustomButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TransferStackProps } from '../pages/Transfer/Transfer';
import ModalBody from '../molecules/ModalBody';
import { ThemeContext } from '../../App';

export default function TransferModal({visible,setVisible}:any) {
    const navigaiton = useNavigation<NavigationProp<TransferStackProps>>();
    const {theme} = useContext(ThemeContext);
    return (
        <Modal
        visible={visible}
        onRequestClose={()=>setVisible(false)}
        animationType="slide"
        transparent
        >
         <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'rgba(10,10,10,0.9)'}}>
           <View style={{padding:20,justifyContent:'space-between',backgroundColor : theme === 'dark' ? '#121212' : 'white',width:300,height:340,borderRadius:30}}>
                <ModalBody />
                <View>
                    <CustomButton color="#007236" title="Finish" pressFunction={()=>{
                        setVisible(false);
                        navigaiton.navigate('TransferForm');
                    }} />
               </View>
           </View>
         </View>
        </Modal>
    );
}
