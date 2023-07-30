import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Button} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const Profile = ({navigation}) => {

    const [userData, setUserData] = useState(null);
    const getUserInfo = ()=> {
      console.log("ad")
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
    }
  
    useEffect(() => {
      // Get the current user's UID
      getUserInfo()
    }, []);
  



    const handleLogOut = async() => {
        try {
            await auth().signOut()
            navigation.navigate('Welcome')}
        catch (e) {
            console.error(e.message); 
        }

    }

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.userinfo_container}>

           
            {userData ? (
              <>
            <Text style={styles.userinfo}>Name: {userData.name}</Text>
            <Text style={styles.userinfo}>E-Mail: {userData.mail}</Text>
            <Text style={styles.userinfo}>Age: {userData.age}</Text>
            <Text style={styles.userinfo}>Height: {userData.height}</Text>
            <Text style={styles.userinfo}>Weight: {userData.weight}</Text>
            {/* Add other user data fields here */}
          </>
        ) : (
          <Text>Loading...</Text>
          )}
           
          </View>
            <TouchableOpacity onPress={handleLogOut} style={styles.logout_container} >
                <Text style={styles.logout_text}>Log Out</Text>
            </TouchableOpacity>

  
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    logout_text : {fontWeight:'bold', fontSize:20,color:'#041e43',padding:10,alignSelf:'center'},
    container:{backgroundColor:'#041e43',flex:1},
    userinfo_container:{marginTop:50},
    logout_container:{borderWidth:1,backgroundColor:'white',margin:40,alignSelf:'center',borderRadius:20,padding:5},
    title:{color:'white',fontWeight:'bold',fontSize:30,alignSelf:'center',marginTop:40},
    userinfo:{backgroundColor:'white',fontSize:20,margin:15, borderWidth:1, padding:10, borderRadius:10,color:'#041e43'},


})