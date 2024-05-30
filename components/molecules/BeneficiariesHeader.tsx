/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Pressable,View,Text,StyleSheet } from 'react-native';
import AddButton from '../atoms/AddButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faList, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../App';

export default function BeneficiariesHeader({activeHorizontal,setActiveHorizontal}:any) : React.JSX.Element {
    const {theme} = useContext(ThemeContext);
    return (
    <View style={styles.header}>
        <Text style={[styles.title,{color : theme === 'dark' ? 'white' : 'black'}]}>Beneficiaries</Text>
        <View style={styles.iconContainer}>
            <View style={[styles.background,{backgroundColor : theme === 'dark' ? '#383838' : 'white'}]}>
                <Pressable onPress={()=>setActiveHorizontal(true)} style={[styles.icon,{backgroundColor:activeHorizontal ? '#007236' : theme === 'dark' ? '#555' : '#f1f3fb'}]} >
                    < FontAwesomeIcon style={{color:activeHorizontal ? 'white' : '#ccc'}}  icon={faWindowRestore} />
                </Pressable>
                <Pressable onPress={()=>setActiveHorizontal(false)} style={[styles.icon,{backgroundColor:activeHorizontal ? theme === 'dark' ? '#555' : '#f1f3fb' : '#007236' }]} >
                    <FontAwesomeIcon  style={{color:activeHorizontal ? '#ccc' : 'white'}} icon={faList} />
                </Pressable>
            </View >
            <AddButton />
        </View>
    </View>
    );
}


const styles = StyleSheet.create({
    title: {
        fontWeight:'bold',
        color:'black',
        fontSize:20,
    },
    header : {
        marginBottom:15,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
    },
    iconContainer : {
        columnGap:20,
        alignItems:'center',
        flexDirection:'row',
    },

    background : {
        borderRadius:20,
        shadowColor:'#666',
        elevation:2,
        backgroundColor:'white',
        padding:5,
        flexDirection:'row',
        columnGap:5,
        alignItems:'center',
        height:35,
    }, icon : {
        padding:5,
        borderRadius:15,
    },
});
