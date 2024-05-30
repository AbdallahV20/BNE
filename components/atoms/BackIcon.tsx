import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';


type BackIconProps = {
    handlePress: () => void;
  };
const BackIcon : React.FC<BackIconProps> = ({handlePress}) => (
    <TouchableOpacity style={styles.iconLeft} onPress={handlePress}>
      <FontAwesomeIcon icon={faAngleLeft} color="white" size={20} />
    </TouchableOpacity>
  );


const styles = StyleSheet.create({
iconLeft: {
    borderRadius: 10,
    backgroundColor: '#007236',
    padding: 10,
},
});
export default BackIcon;
