import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen : React.FC = () => {
  return (
    <View style={styles.container}

    >
      <MapView style={styles.map}
          initialRegion={{
            latitude: 30.0289,
            longitude: 31.2382,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
      >

      <Marker
          coordinate={{ latitude: 30.0289, longitude: 31.2392 }}
          title="Marker"
          description="Salah Eldin ATM"
        />
        <Marker
          coordinate={{ latitude: 30.0299, longitude: 31.2330 }}
          title="Marker2"
          description="New Museum ATM"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width:'100%',
    height:'100%',
  },
});

export default MapScreen;
