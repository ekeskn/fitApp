import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      // Get the current user's UID
      const uid = auth().currentUser.uid;
  
      // Reference to the current user's data in the database
      const userRef = database().ref(`/users/${uid}`);
  
      // Fetch user data from the database
      userRef.once('value')
        .then(snapshot => {
          const data = snapshot.val();
          console.log('User data:', data); // Log the user data to check if it's available
          setUserData(data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }, []);
  
    console.log('userData:', userData); // Log the userData state to check if it's being populated
  
    return (
      <View style={styles.container}>
        {userData ? (
          <>
            <Text>Name: {userData.name}</Text>
            <Text>Age: {userData.age}</Text>
            <Text>Height: {userData.height}</Text>
            <Text>Weight: {userData.weight}</Text>
            {/* Add other user data fields here */}
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfilePage;
