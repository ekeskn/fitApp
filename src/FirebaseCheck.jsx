import React from 'react';
import { View, Text, Button } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const FirebaseCheck = () => {


    const addUser = async () => {
        try {
          const user = auth().currentUser;
          if (user) {
            await database().ref(`/users/${user.uid}`).set({
              name: 'John Doe',
              age: 30,
              height: 180,
              weight: 75,
              gender: 'Male', // Cinsiyet bilgisini de ekleyelim
            });
          }
        } catch (error) {
          console.error('Error adding user:', error);
        }}


  const checkDB = () => {
    console.log(auth().currentUser.uid); // Kullanıcı UID'sini kontrol edin
    const reference = database().ref('/users/'); // Veritabanı yolunu düzenleyin

    reference
      .once('value')
      .then(snapshot => {
        console.log('Data snapshot:', snapshot.val()); // Veri anlık görüntüsünü kontrol edin
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Hata durumunda hatayı kontrol edin
      });
  };

  return (
    <View>
      <Text>asd</Text>
      <Button title="press" onPress={checkDB} />
    </View>
  );
};

export default FirebaseCheck;
