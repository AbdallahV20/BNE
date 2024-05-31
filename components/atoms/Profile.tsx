import { View, Text,Image,ImageSourcePropType, StyleSheet} from 'react-native';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDollar, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../App';

type propTypes = {
    img:ImageSourcePropType,
    name:string,
    phone:string,
    money?:string,
    isItem?:boolean
}

export default function Profile({img,name,phone,money,isItem}:propTypes) {
    const {theme} = useContext(ThemeContext);
    const styles = getStyle(theme,isItem);
    return (
        <View style={styles.container}>
            <Image source={img} style={styles.img}/>
            <View style={styles.card}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.body}>
                    <View style={styles.sectionContainer}>
                        <View style={styles.icon}>
                            <FontAwesomeIcon size={10} color="#B7B7B7" icon={faPhone} />
                        </View>
                        <Text style={styles.sectionTitle}>{phone}</Text>
                    </View>
                    { money &&
                    <View style={styles.sectionContainer}>
                        <View style={styles.icon}>
                            <FontAwesomeIcon size={10} color="#B7B7B7" icon={faDollar} />
                        </View>
                        <Text style={styles.sectionTitle}>${money}</Text>
                    </View>
                    }
                </View>
            </View>
        </View>
    );
}

const getStyle = (theme:string,isItem:boolean | undefined)=>
    StyleSheet.create({
    container : {
        flexDirection:'row',
        marginBottom:15,
        columnGap:15,
        borderRadius:18,
        shadowColor:'#121212',
        elevation:2,
        padding:15,
        backgroundColor:theme === 'dark' ? '#282828' : 'white',
    },
    img : {
        width:isItem ? 70 : 50,  height:isItem ? 70 : 50,borderRadius:12,
         resizeMode: 'cover',
    },
    card : {
        justifyContent:'space-between',
        paddingVertical:isItem ? 0 : 3,
    },
    name : {
        fontWeight:'bold',
        color : theme === 'dark' ? 'white' : 'black',
    },
    body : {
        rowGap:3,
    },
    sectionContainer : {
        alignItems:'center',
        flexDirection:'row',
        columnGap:5,
    },
    sectionTitle : {
        color:'#b7b7b7',
    },
    icon : {
        backgroundColor:'#eee',
        borderRadius:20,
        padding:5,
    },


});
