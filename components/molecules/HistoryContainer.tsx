import { ImageSourcePropType,View } from 'react-native';
import History from '../atoms/History';
import React from 'react';
export default function HistoryContainer() {
    type dataType = {
        id:number,
        img:ImageSourcePropType,
        name:string,
        date:string,
        money:string,
    } []
    const data : dataType = [
        {
            id:1,
            img :require('../../images/rams.jpg'),
            name:'Ramses ii',
            date : '13-09-2026',
            money : '$30,000.00',
        },
        {
            id:2,
            img :require('../../images/khafra.jpg'),
            name:'Khafra',
            date : '01-12-2026',
            money : '$115,000.00',
        },
        {
            id:3,
            img :require('../../images/zoser.jpg'),
            name:'Zoser',
            date : '10-07-2026',
            money : '$12,000.00',
        },
        {
            id:4,
            img :require('../../images/Tot.jpg'),
            name:'Tutankhamon',
            date : '08-05-2027',
            money : '$3000.50',
        },
        {
            id:5,
            img :require('../../images/Akhnaton.jpg'),
            name:'Akhnaton',
            date : '23-04-2027',
            money : '$500,000.00',
        },
        {
            id:6,
            img :require('../../images/Thut.jpg'),
            name:'Thutmose',
            date : '09-01-2027',
            money : '$30,000.00',
        },
    ];
    return (
        <View>
            {data.map((item) => (
                <History key={item.id} id={item.id} length={data.length} name={item.name} img={item.img} date={item.date} money={item.money} />
            ))}
        </View>
    );
}
