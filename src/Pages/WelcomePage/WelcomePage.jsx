import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup';
import LottieView from 'lottie-react-native';
import {AppContext} from '../../Context/AppContext';
import auth from '@react-native-firebase/auth';
const LoginSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const WelcomePage = ({navigation}) => {

  const {userID, setUserID} = useContext(AppContext)
  

 
  const handleSignInPage = () => {
    navigation.navigate('SignUp');
  };
  const __signIn = async values => {
    try {
      let response = await auth().signInWithEmailAndPassword(
        values.username,
        values.password,
      );
      if (response) {
        console.log(response);
        console.log(auth().currentUser.uid)
        navigation.navigate('MainPage')
        Alert.alert('Successful Login', 'Welcome the React Native');
      }
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../../Animations/welcome.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>

      <View>
        <Formik
          initialValues={{username: '', password: ''}}
          validationSchema={LoginSchema}
          onSubmit={__signIn}>
          {({handleChange, handleSubmit, values, errors, touched}) => (
            <>
              <TextInput
                style={styles.input}
                label="E-Mail"
                value={values.username}
                onChangeText={handleChange('username')}
                error={touched.username && errors.username}
                theme={{colors: {text: 'red'}}}
              />
              {touched.username && errors.username && (
                <Text style={styles.error}>{errors.username}</Text>
              )}

              <TextInput
                style={styles.input}
                label="Password"
                secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
                error={touched.password && errors.password}
                theme={{colors: {text: '#041e43'}}}
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}

              <Button
                mode="contained"
                onPress={handleSubmit}
                style={styles.button}>
                Login
              </Button>
            </>
          )}
        </Formik>
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignInPage}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#041e43',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 0,
  },
  signupText: {
    fontSize: 16,
    marginRight: 5,
    color:'#041e43'
  },
  signupLink: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  animation: {
    width: 200,
    height: 200,
  },
  animationContainer: {
    alignSelf: 'center',
  },
  input: {
    margin: 10,
    borderRadius: 20,
  },
});

export default WelcomePage;
