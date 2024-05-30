import React, { SetStateAction, createContext, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BeneficiariesMain from './BeneficiariesMain';
import BeneficiariesHistory from './BeneficiariesHistory';
import BeneficiariesAdd from './BeneficiariesAdd';
import { ImageSourcePropType } from 'react-native';
import BeneficiariesData from './data';
export type BeneficiariesStackProps = {
    BeneficiariesMain :undefined,
    BeneficiariesHistory : {
        name:string,
        img:ImageSourcePropType,
        phone:string,
        money:string,
    },
    BeneficiariesAdd : undefined,
}
type Beneficiary = {
    id: number;
    name: string;
    img: ImageSourcePropType;
    phone: string;
    money: string;
  };

  type DataContextType = {
    data: Beneficiary[];
    setData: React.Dispatch<SetStateAction<Beneficiary[]>>;
  };

  export const DataContext = createContext<DataContextType>({
    data: [],
    setData: () => {},
  });
export default function Beneficiaries() : React.JSX.Element {
    const Stack = createNativeStackNavigator<BeneficiariesStackProps>();
    const [data, setData] = useState<Beneficiary[]>(BeneficiariesData);
    return (
        <DataContext.Provider value={{ data, setData }}>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false,
                }}
            >
                <Stack.Screen name="BeneficiariesMain" component={BeneficiariesMain} />
                <Stack.Screen name="BeneficiariesHistory" component={BeneficiariesHistory} />
                <Stack.Screen name="BeneficiariesAdd" component={BeneficiariesAdd} />
            </Stack.Navigator>
        </DataContext.Provider>
    );
}
