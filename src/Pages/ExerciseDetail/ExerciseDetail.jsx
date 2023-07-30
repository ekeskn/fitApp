import {View, Text, StyleSheet} from 'react-native';

import LottieView from 'lottie-react-native';
const DetailPage = ({route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.animation_container}>
        {route.params.moves.name == 'Boxing' ? (
          <LottieView
            source={require('../../Animations/boxing.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        ) : null}
        {route.params.moves.name == 'Crunches' ? (
          <LottieView
            source={require('../../Animations/crunches.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        ) : null}
        {route.params.moves.name == 'Push Up' ? (
          <LottieView
            source={require('../../Animations/pushup.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        ) : null}
        {route.params.moves.name == 'Split Jump' ? (
          <LottieView
            source={require('../../Animations/splitjump.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        ) : null}
        {route.params.moves.name == 'T-Plank' ? (
          <LottieView
            source={require('../../Animations/tplank.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        ) : null}
      </View>
      <Text style={styles.name}>{route.params.moves.name}</Text>
      <Text style={styles.detail}>{route.params.moves.longDetail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{margin:30,},
  animation: {
    width: 300,
    height: 300,
    alignSelf:'center'
  },
  name:{fontWeight:'bold',fontSize:50,color:'black'},
  detail:{fontStyle:'italic',color:'black'},

});

export default DetailPage;
