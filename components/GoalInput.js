import {StyleSheet,View,TextInput,Button,Modal,Image} from 'react-native'
import React, { Component, useState } from "react";
import { StatusBar } from 'expo-status-bar';

function GoalInput(props) {
    const [enteredGoalsText, setEnteredGoalsText] = useState("");
    
  const goalInputHandler=(enteredText)=> {
    setEnteredGoalsText(enteredText);
  };

  const addGoalsHandler=()=> {
      props.onAddGoal(enteredGoalsText);
      setEnteredGoalsText('')
  }

    return(
      <>
      <StatusBar style='light'/>
      <Modal visible={props.visible} animationType='slide'>
        <View style={styles.subContainer}>
          <Image source={require('../assets/logo2.jpg')} style={styles.image}/>
        <TextInput
          placeholder="Enter Your Goal"
          style={styles.TextInput}
          onChangeText={goalInputHandler}
          value={enteredGoalsText}
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title="Add Goal" onPress={addGoalsHandler} color='#b180f0' />
        <View style={styles.button}>
          <Button title='Cancel' onPress={props.onCancel} color='#f31282'/>
        </View>
        </View>
        </View>
      </View>
     </Modal>
     </>

    )
    
}
export default GoalInput;

const styles=StyleSheet.create({
    subContainer: {
      flex:1,
        justifyContent: "center",
        alignItems:'center',
        marginBottom:24,
        padding:16,
        backgroundColor:'#311b6b'
      },
      TextInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor:'#e4d0ff',
        color:'#120438',
        borderRadius:6,
        width:'100%',
        padding:13,
      },
      buttonContainer:{
        marginTop:16,
        marginHorizontal:15
      //  flexDirection:'row'
      },
      button:{
        width:100,
        marginHorizontal:8, 
        flexDirection:'row'
      },
      image:{
        width:100,
        height:100,
        margin:10
      }

})