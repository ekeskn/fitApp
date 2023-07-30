import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import LottieView from 'lottie-react-native';
import {useState, useEffect} from 'react';

const MoveCard = ({moves, navigation}) => {
  const handleCardPress = () => {
    // Yönlendirme işlemi burada gerçekleşiyor
    navigation.navigate('ExerciseDetail', {moves}); // 'DetailPage' adlı sayfaya yönlendirme, hareket bilgisini taşıyan bir nesne de gönderiyoruz
  };
  const moveName = moves.name;
  let lottieLink = '../../Animations/crunches.json';

  return (
    <TouchableOpacity style={styles.main_container} onPress={handleCardPress}>
      <View>
        {moves.name == 'Boxing' ? (
          <LottieView
            source={require('../../Animations/boxing.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        ) : null}
        {moves.name == 'Crunches' ? (
          <LottieView
            source={require('../../Animations/crunches.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        ) : null}
        {moves.name == 'Push Up' ? (
          <LottieView
            source={require('../../Animations/pushup.json')}
            autoPlay
            loop
            style={styles.animation}
          /> ) : null}
           {moves.name == 'Split Jump' ? (
          <LottieView
            source={require('../../Animations/splitjump.json')}
            autoPlay
            loop
            style={styles.animation}
          /> ) : null} 
          {moves.name == 'T-Plank' ? (
            <LottieView
              source={require('../../Animations/tplank.json')}
              autoPlay
              loop
              style={styles.animation}
            /> ) : null}
      </View>

      <View style={styles.inner_container}>
        <View style={styles.name_container}>
          <Text style={styles.name_text}>{moves.name}</Text>
        </View>
        <View style={styles.detail_container}>
          <Text style={styles.detail_text}>{moves.detail}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 6,
    margin: 10,
    marginLeft:25,
    marginRight:25,
    padding: 10,
    backgroundColor:'white'
  },
  image: {flex: 0.3, alignSelf: 'center'},
  inner_container: {margin: 5, flex: 0.7},
  name_container: {flexDirection: 'row', alignItems: 'center'},
  name_text: {fontWeight: 'bold', fontSize: 20,color:'black'},
  detail_container: {},
  detail_text: {color:'black'},
  animation: {
    width: 100,
    height: 100,
  },
});

export default MoveCard;
