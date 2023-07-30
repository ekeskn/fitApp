import { View,Text,FlatList, StyleSheet } from 'react-native'
import MoveCard from '../../Components/MoveCard/MoveCard'
import data from '../../assets/movelist.json'

const Exercise = ({navigation}) => {
    const goDetail= () =>{
        navigation.navigate('ExerciseDetails')

    }

    const renderProduct = ({item}) => {    
        return <MoveCard moves={item} onPressed = {goDetail} navigation={navigation} />;
      };
    return (
        <View style={styles.container} >
            <Text style={styles.text}>
                Exercises
            </Text>
            <FlatList data={data} renderItem={renderProduct}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{backgroundColor:'#041e43'},
    text:{color:'white', fontWeight:'bold',fontSize:30,alignSelf:'center',margin:20}
})

export default Exercise