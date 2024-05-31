import { StyleSheet, View } from 'react-native';
import React, {  useContext, useState } from 'react';
import BeneficiariesVerticalList from '../../organisms/BeneficiariesVerticalList';
import BeneficiariesHorizontalList from '../../organisms/BeneficiariesHorizontalList';
import BeneficiariesHeader from '../../molecules/BeneficiariesHeader';
import { ThemeContext } from '../../../App';




export default function BeneficiariesMain(): React.JSX.Element {
  const { theme } = useContext(ThemeContext);
  const styles = getStyle(theme);
  const [activeHorizontal, setActiveHorizontal] = useState(true);


  return (
      <View style={styles.container}>
        <BeneficiariesHeader activeHorizontal={activeHorizontal} setActiveHorizontal={setActiveHorizontal} />
        {activeHorizontal && <BeneficiariesHorizontalList />}
        {!activeHorizontal && <BeneficiariesVerticalList />}
      </View>
  );
}

const getStyle = (theme:string) =>
  StyleSheet.create({
  container: {
    paddingHorizontal: 17,
    flex: 1,
    backgroundColor: theme === 'dark' ? '#121212' : '#f1f3fb',
  },
});
