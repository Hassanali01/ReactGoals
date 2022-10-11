import {StyleSheet,View,Text, Pressable} from 'react-native'


function GoalItem(props) {
    return(
      <View>
      <Pressable onPress={props.onDeleteItem.bind(this,props.id)}
      android_ripple={{color:'#5F6F94'}}
      style={({pressed})=>pressed && styles.itemText}
      >
        <View style={styles.line}>
        <Text style={styles.goals}>{props.text}</Text>
      </View>
      </Pressable>
      </View>

    )
    
}

export default GoalItem;

const styles=StyleSheet.create({
    line: {
        borderRadius: 5,
        // color:'white',
        paddingVertical: 8,
        margin: 5,
        padding: 5,
        backgroundColor: "#25316D",
        color:'white'
      },
      goals: {
        color: "white",
        padding: 5,
      },
      itemText:{
        opacity:0.5
      }

})