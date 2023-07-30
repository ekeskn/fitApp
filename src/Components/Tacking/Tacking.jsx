import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const App = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    // İzinleri kontrol etmek için izin isteme işlemi
    // Konum izinleri için önce gerekli izinleri cihazdan talep etmelisin
    // Bu örnekte basitlik için izin işlemlerini atlıyoruz.
    // Detaylı izin işlemleri için 'react-native-permissions' gibi bir kütüphane kullanmanız gerekebilir.
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRegion({
          ...region,
          latitude,
          longitude,
        });
      },
      (error) => console.log('Error obtaining location', error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
      >
        <Marker
          coordinate={region}
          title="My Location"
          description="This is my current location"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
