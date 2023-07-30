import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { PERMISSIONS, request } from 'react-native-permissions';

const LocationPermissionScreen = () => {
  const requestLocationPermission = async () => {
    try {
      const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE); // Android için diğer izinleri kullanabilirsiniz

      if (result === 'granted') {
        console.log('Konum izni verildi');
        // Konum izni verildiğinde burada istediğiniz işlemleri yapabilirsiniz
      } else {
        console.log('Konum izni reddedildi');
      }
    } catch (error) {
      console.log('Konum izni istenirken hata oluştu:', error);
    }
  };

  useEffect(() => {
    // Bu kullanıcının mevcut konum izinlerini kontrol etmek için kullanılır (isteğe bağlı)
    // Kullanıcının mevcut izin durumuna göre mesaj veya arayüz gösterebilirsiniz
    const checkLocationPermissionStatus = async () => {
      const status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE); // Android için diğer izinleri kullanabilirsiniz

      if (status === 'granted') {
        console.log('Konum izni zaten verilmiş');
      } else {
        console.log('Konum izni verilmemiş');
      }
    };

    checkLocationPermissionStatus();
  }, []);

  return (
    <View>
      <Button title="Konum İzni İste" onPress={requestLocationPermission} />
    </View>
  );
};

export default LocationPermissionScreen;
