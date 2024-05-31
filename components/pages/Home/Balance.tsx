import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import ServicesContainer from '../../molecules/ServicesContainer';
import PersonContainer from '../../molecules/PersonContainer';
import HistoryContainer from '../../molecules/HistoryContainer';
import BalanceCard from '../../molecules/BalanceCard';
import { ThemeContext } from '../../../App';

export default function Balance(): React.JSX.Element {
  const { theme } = useContext(ThemeContext);
  const styles = getStyle(theme);
  return (
    <ScrollView style={styles.container}>
      <BalanceCard />
      <ServicesContainer />

      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Send Money</Text>
          <Text style={styles.viewAllText}>View All</Text>
        </View>

        <PersonContainer />
      </View>

      <View style={styles.historyContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>History</Text>
          <Text style={styles.viewAllText}>View All</Text>
        </View>
        <HistoryContainer />
      </View>
    </ScrollView>
  );
}

const getStyle = (theme:string) =>
    StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 17,
    backgroundColor: theme === 'dark' ? '#121212' : '#f1f3fb',
  },
  sectionHeader: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    fontSize: 20,
    color:theme === 'dark' ? 'white' : 'black',
  },
  viewAllText: {
    color: theme === 'dark' ? 'white' : 'black',
  },
  historyContainer: {
    marginTop: 15,
  },
});
