import {View, Text, Button, StyleSheet} from 'react-native';
import {useState, useEffect} from 'react';
import Recommended from '../../Components/Recomended/Recomended';
import Icon from 'react-native-vector-icons/FontAwesome'

import data from '../../assets/movelist.json'
import { Calendar } from 'react-native-calendars';

const Dashboard = () => {
  const mottos = [
    'Push beyond limits.',
    'Sweat, smile, repeat.',
    'Stronger every day.',
    'Rise and grind.',
    'Embrace the burn.',
    "Train, don't complain.",
    'One step at a time.',
    'Commit to be fit.',
    'No excuses, just results.',
    'Be the best version.',
  ];

  const [motto, setMotto] = useState();

  const selectRandomMotto = () => {
    const randomIndex = Math.floor(Math.random() * mottos.length);
    const selectedMotto = mottos[randomIndex];
    setMotto(selectedMotto);
  };

 

  const [lastLoginDate, setLastLoginDate] = useState(null);
  useEffect(() => {
    selectRandomMotto()
  }, []);
const randomIndex = Math.floor(Math.random() * 4)
  return (
    <View>
      <Text style={styles.motto}>{motto}  <Icon name="rocket" size={30} color="white" /></Text>
      <Text style={styles.todays_text}> Today's Exercises </Text>
     
      <Recommended move={data[randomIndex].name}/>
      <Recommended move={randomIndex == data.length ? data[0].name : data[randomIndex+1].name}/>
      <Text>{lastLoginDate}</Text>
      <Calendar style={styles.calendar}/>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  todays_text:{fontSize:20,alignSelf:'center',marginTop:20,color:'#041e43'},
  container: {},
  motto: {fontSize: 30, backgroundColor:'#041e43',padding:10,color:'#E4E8EE'},
  calendar:{},
});
