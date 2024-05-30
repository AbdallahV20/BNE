/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Person from '../atoms/Person';
import { FlatList,ImageSourcePropType } from 'react-native';
export default function PersonContainer() {
    const data : {
        id:number,
        name:string,
        img : ImageSourcePropType
        } [] = [
                {
                    id:1,
                    name : 'Akhnaton',
                    img : require('../../images/Akhnaton.jpg'),
                },
                {
                    id:2,
                    name : 'Hatshepsut',
                    img : require('../../images/hatsh.jpg'),
                },
                {
                    id:3,
                    name : 'Tutankhamon',
                    img : require('../../images/Tot.jpg'),
                },
                {
                    id:4,
                    name : 'Thutmose',
                    img : require('../../images/Thut.jpg'),
                },
                {
                    id:5,
                    name : 'Ramses ii',
                    img : require('../../images/rams.jpg'),
                },
                {
                    id:6,
                    name : 'Tutankhamon',
                    img : require('../../images/Tot.jpg'),
                },
                {
                    id:7,
                    name : 'Thutmose',
                    img : require('../../images/Thut.jpg'),
                },
                {
                    id:8,
                    name : 'Ramses ii',
                    img : require('../../images/rams.jpg'),
                },
                {
                    id:9,
                    name : 'Thutmose',
                    img : require('../../images/Thut.jpg'),
                },
                {
                    id:10,
                    name : 'Ramses ii',
                    img : require('../../images/rams.jpg'),
                },
            ];
    return (
            <FlatList
                data={data}
                renderItem={ ({item}) => <Person name={item.name} img={item.img} />}
                horizontal
                keyExtractor={item=>item.id.toString()}
                showsHorizontalScrollIndicator = {false}
                contentContainerStyle={{columnGap:13}}
            />
    );
}
