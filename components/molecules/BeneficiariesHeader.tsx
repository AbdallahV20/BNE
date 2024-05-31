import React, { useContext } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import AddButton from '../atoms/AddButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faList, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../App';

type Props = {
    activeHorizontal : boolean,
    setActiveHorizontal : (v:boolean)=>void,
}
export default function BeneficiariesHeader({ activeHorizontal, setActiveHorizontal }: Props): React.JSX.Element {
  const { theme } = useContext(ThemeContext);
  const styles = getStyle(theme,activeHorizontal);
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Beneficiaries</Text>
      <View style={styles.iconContainer}>
        <View style={styles.background}>
          <Pressable
            onPress={() => setActiveHorizontal(true)}
            style={[styles.icon,styles.horizontalList]}
          >
            <FontAwesomeIcon
              color={ activeHorizontal ? 'white' : '#ccc' }
              icon={faWindowRestore}
            />
          </Pressable>
          <Pressable
            onPress={() => setActiveHorizontal(false)}
            style={[styles.icon, styles.verticalList]}
          >
            <FontAwesomeIcon
              color = { activeHorizontal ? '#ccc' : 'white' }
              icon={faList}
            />
          </Pressable>
        </View>
        <AddButton />
      </View>
    </View>
  );
}

const getStyle = (theme:string,activeHorizontal:boolean) =>
  StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: theme === 'dark' ? 'white' : 'black',
  },
  header: {
    marginBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
  background: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 20,
    shadowColor: '#666',
    elevation: 2,
    columnGap: 5,
    height: 35,
    backgroundColor: theme === 'dark' ? '#383838' : 'white',
  },
  icon: {
    padding: 5,
    borderRadius: 15,
  },
  verticalList : {
    backgroundColor: activeHorizontal ? theme === 'dark' ? '#555' : '#f1f3fb' : '#007236',
  },
  horizontalList : {
    backgroundColor: activeHorizontal ? '#007236' : theme === 'dark' ? '#555' : '#f1f3fb',
  },
});
