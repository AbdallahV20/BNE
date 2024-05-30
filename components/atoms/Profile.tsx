/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import { View, Text,Image,ImageSourcePropType, StyleSheet} from "react-native";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDollar, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../App";

type propTypes = {
    img:ImageSourcePropType,
    name:string,
    phone:string,
    money?:string,
    isItem?:boolean
}

export default function Profile({img,name,phone,money,isItem}:propTypes) {
    const {theme} = useContext(ThemeContext);
    return (
        <View style={[styles.container,{backgroundColor:theme === 'dark' ? "#282828" : "white"}]}>
            <Image source={img} style={{ width:isItem ? 70 : 50,  height:isItem ? 70 : 50,borderRadius:12, resizeMode: "cover" }}/>
            <View style={{justifyContent:"space-between",paddingVertical:isItem ? 0 : 3}}>
                <Text style={{fontWeight:"bold",color : theme === 'dark' ? 'white' : 'black'}}>{name}</Text>
                <View style={{rowGap:3}}>
                    <View style={{alignItems:"center",flexDirection:"row",columnGap:5}}>
                        <View style={{backgroundColor:"#eee",borderRadius:20,padding:5}}>
                            <FontAwesomeIcon size={10} color="#B7B7B7" icon={faPhone} />
                        </View>
                        <Text style={{color:"#b7b7b7"}}>{phone}</Text>
                    </View>
                    { money &&
                    <View style={{alignItems:"center",flexDirection:"row",columnGap:5}}>
                        <View style={{backgroundColor:"#eee",borderRadius:20,padding:5}}>
                            <FontAwesomeIcon size={10} color="#B7B7B7" icon={faDollar} />
                        </View>
                        <Text style={{color:"#b7b7b7"}}>${money}</Text>
                    </View>
                    }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flexDirection:"row",
        marginBottom:15,
        columnGap:15,
        backgroundColor:'white',
        borderRadius:18,
        shadowColor:'#121212',
        elevation:2,
        padding:15,
    },
});
