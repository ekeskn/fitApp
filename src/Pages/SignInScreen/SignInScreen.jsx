import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import LottieView from 'lottie-react-native';
import { AppContext } from '../../Context/AppContext';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const SignupSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  name: yup.string().required('Name is required'),
  age: yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer'),
  height: yup.number().required('Height is required').positive('Height must be positive'),
  weight: yup.number().required('Weight is required').positive('Weight must be positive'),
});

const SignupPage = ({ navigation }) => {
  const handleSignup = async values => {
    console.log('Signup data:', values);
    try {
      let response = await auth().createUserWithEmailAndPassword(
        values.username,
        values.password,
      );
      if (response) {
        const user = response.user;
        database().ref(`/users/${user.uid}`).set({
          uid:auth().currentUser.uid,
          name: values.name,
          age: values.age,
          height: values.height,
          weight: values.weight,
          mail:values.username
        });
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
          initialValues={{ username: '', password: '', name: '', age: '', height: '', weight: '' }}
          validationSchema={SignupSchema}
          onSubmit={handleSignup}>
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <>
              <TextInput
                style={styles.input}
                label="E-Mail"
                value={values.username}
                onChangeText={handleChange('username')}
                error={touched.username && errors.username}
                theme={{ colors: { text: 'red' } }}
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
                theme={{ colors: { text: '#041e43' } }}
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}

              <TextInput
                style={styles.input}
                label="Name"
                value={values.name}
                onChangeText={handleChange('name')}
                error={touched.name && errors.name}
                theme={{ colors: { text: '#041e43' } }}
              />
              {touched.name && errors.name && (
                <Text style={styles.error}>{errors.name}</Text>
              )}

              <TextInput
                style={styles.input}
                label="Age"
                value={values.age}
                onChangeText={handleChange('age')}
                keyboardType="numeric"
                error={touched.age && errors.age}
                theme={{ colors: { text: '#041e43' } }}
              />
              {touched.age && errors.age && (
                <Text style={styles.error}>{errors.age}</Text>
              )}

              <TextInput
                style={styles.input}
                label="Height (cm)"
                value={values.height}
                onChangeText={handleChange('height')}
                keyboardType="numeric"
                error={touched.height && errors.height}
                theme={{ colors: { text: '#041e43' } }}
              />
              {touched.height && errors.height && (
                <Text style={styles.error}>{errors.height}</Text>
              )}

              <TextInput
                style={styles.input}
                label="Weight (kg)"
                value={values.weight}
                onChangeText={handleChange('weight')}
                keyboardType="numeric"
                error={touched.weight && errors.weight}
                theme={{ colors: { text: '#041e43' } }}
              />
              {touched.weight && errors.weight && (
                <Text style={styles.error}>{errors.weight}</Text>
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
  loginText: {color:'#041e43',
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
  title: { fontWeight: 'bold', fontSize: 40, marginBottom: 50, color:'#041e43'},
});

export default SignupPage;
