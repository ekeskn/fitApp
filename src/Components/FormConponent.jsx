import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function FormComponent({setEmail, setPassword, onButtonText, onPress}) {
  const [isShowing, setShowing] = useState(false);

  return (
    <View>
      <TextInput
        style={login_screen.TextInputStyle}
        placeholder="E-Mail"
        keyboardType="email-address"
        placeholderTextColor="#bdbdbd"
        onChangeText={(email) => setEmail(email)}></TextInput>

      <View style={login_screen.TextInputStyle}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#bdbdbd"
          secureTextEntry={isShowing ? false : true}
          onChangeText={(password) => setPassword(password)}
          style={{flex: 1}}></TextInput>
        <Icon
          onPress={() => (isShowing ? setShowing(false) : setShowing(true))}
          style={login_screen.text_input_icon}
          size={20}
          name={isShowing ? 'eye-off' : 'eye'}></Icon>
      </View>

      <TouchableOpacity style={login_screen.button} onPress={onPress}>
        <Text style={login_screen.buttonText}>{onButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
}
export {FormComponent};