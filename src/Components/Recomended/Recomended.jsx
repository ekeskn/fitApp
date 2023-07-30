import { View,Text,StyleSheet } from 'react-native'


const Recommended = ({move}) =>{
    const sets=[3,5,7,10]
    return(
    <View style={styles.container}> 
    <View style={styles.move_container}>

        <Text style={styles.move_text}>{move}</Text>
    </View>
    <View style={styles.set_container}>
        <Text style={styles.set_text}>
            {sets[Math.floor(Math.random() *3)]} Set
        </Text>
        <Text style={styles.times_text}>
        {sets[Math.floor(Math.random() *3)]} Times
        </Text>
    </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container:{flexDirection:'row', padding:10, borderRadius:10, borderWidth:1, margin:20, marginTop:10, marginBottom:10, justifyContent:'space-between',backgroundColor:'#041e43'},
    move_container:{alignItems:'center',justifyContent:'center'},
    set_container:{justifyContent: 'center',},
    move_text:{fontSize:20,color:'#E4E8EE'},
    set_text:{borderBottomWidth:2, color:'#E4E8EE', borderColor:'#E4E8EE'},
    times_text:{color:'#E4E8EE'},
    setnumber:{},
    eachset:{},
})
export default Recommended