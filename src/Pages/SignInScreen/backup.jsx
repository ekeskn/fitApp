import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup';
import LottieView from 'lottie-react-native';
import {AppContext} from '../../Context/AppContext';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const SignupSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

const SignupPage = ({navigation}) => {
  const handleSignup = async values => {
    console.log('Signup data:', values);
    try {
      let response = await auth().createUserWithEmailAndPassword(
        values.username,
        values.password,
      );
      if (response) {
        console.log(response);
        navigation.navigate('MainPage');
      }
    } catch (e) {
      console.error(e.message);
      Alert.alert(e.message);
    }
  };

  const handleLoginPage = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Account</Text>

      <View>
        <Formik
          initialValues={{username: '', password: ''}}
          validationSchema={SignupSchema}
          onSubmit={handleSignup}>
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
                Signup
              </Button>
            </>
          )}
        </Formik>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={handleLoginPage}>
          <Text style={styles.loginLink}>Login</Text>
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
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 0,
  },
  loginText: {
    fontSize: 16,
    marginRight: 5,
  },
  loginLink: {
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
  title: {fontWeight: 'bold', fontSize: 40, marginBottom: 50},
});

export default SignupPage;
