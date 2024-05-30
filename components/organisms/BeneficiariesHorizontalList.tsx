import { useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { FlatList , StyleSheet,View, Pressable} from 'react-native';
import Person from '../atoms/Person';
import EmptyList from '../molecules/EmptyList';
import { BeneficiariesStackProps, DataContext } from '../pages/Beneficiaries/Beneficiaries';


export default function BenHorizontalList() : React.JSX.Element {
    const {data} = useContext(DataContext);
    const navigation = useNavigation<NativeStackNavigationProp<BeneficiariesStackProps>>();
    const emptyList = ()=> <EmptyList add={true} img={require('../../images/emptyList.png')} title="No Beneficiaries" subTitle="You don’t have beneficiaries, add some so you can send money"/>;
    return (
        <FlatList
            data={data}
            renderItem={
                ({item})=>
                <Pressable onPress={()=>(navigation.navigate(
                    'BeneficiariesHistory' ,
                    {
                        name: item.name,
                        img: item.img,
                        money: item.money,
                        phone: item.phone,
                    }
                ))}>
                    <View>
                        <Person img={item.img} name={item.name} />
                    </View>
                </Pressable>
            }
            showsVerticalScrollIndicator={false}
            numColumns={4}
            keyExtractor={(item)=>item.id.toString()}
            columnWrapperStyle={styles.columnWrapper}
            ListEmptyComponent={emptyList}
        />
    );
}

const styles = StyleSheet.create({
    columnWrapper : {
        justifyContent:'space-between',
    },
});

