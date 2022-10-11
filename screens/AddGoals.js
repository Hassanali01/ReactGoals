import React, { Component, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,Button
} from "react-native";
import GoalItem from "../components/GoalItem";
import GoalInput from "../components/GoalInput";

function AddGoals(params) {
//     const [enteredGoalsText, setEnteredGoalsText] = useState("");
//   const [courseGoals, setCourseGoals] = useState([]);
  
    
//   const goalInputHandler = (enteredText) => {
//     setEnteredGoalsText(enteredText);
//   };


//   const addGoalsHandler = () => {
//     setCourseGoals((currentCourseGoals) => [
//       ...currentCourseGoals,
//       { text: enteredGoalsText, id: Math.random().toString() },
//     ]);
//   };
const [courseGoals, setCourseGoals] = useState([]);
const [goalIsVisible, setGoalIsVisible] = useState(false)

const addGoalsHandler = (enteredGoalsText) => {
        setCourseGoals((currentCourseGoals) => [
          ...currentCourseGoals,
          { text: enteredGoalsText, id: Math.random().toString() },
        ]);
        onCancelHandler();
      };
      function onDeleteHandler(id) {
        setCourseGoals(currentCourseGoals=>{
          return currentCourseGoals.filter((goal)=> goal.id !==id);
        })
        
      }
      function onModelHandler() {
        setGoalIsVisible(true)
        
      }
      function onCancelHandler() {
        setGoalIsVisible(false)
        
      }
    
  return (
    <View style={styles.container}>
      <Button title="Add New Goal" color='#a065ec' onPress={onModelHandler}/>
        <GoalInput onAddGoal={addGoalsHandler} visible={goalIsVisible} onCancel={onCancelHandler}/>
      {/* <View style={styles.subContainer}>
        <TextInput
          placeholder="Enter Your Goal"
          style={styles.TextInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalsHandler} />
      </View>
      <View style={styles.goals}>
            {courseGoals.map((goals)=>
            <View style={styles.line}><Text key={goals} style={styles.goals}>{goals}</Text></View>)}
        </View> */}
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} onDeleteItem={onDeleteHandler} id={itemData.item.id}/>
        }}
        keyExtractor={(item,index)=>{return item.id}}
        alwaysBounceVertical={false}
      />
    </View>
  );
}
export default AddGoals;
const styles = StyleSheet.create({
  container: {
    padding: 50,
    // backgroundColor:'#1e085a'
  },
//   subContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginVertical: 40,
//     borderBottomWidth: 1,
//     borderBottomColor: "grey",
//     paddingBottom: 50,
//   },
//   TextInput: {
//     flex: 1,
//     border: 1,
//     borderWidth: 2,
//     borderColor: "grey",
//     paddingLeft: 10,
//     alignItems: "center",
//     borderRadius: 5,
//     width: "80%",
//     justifyContent: "center",
//     marginRight: 10,
//   },
//   line: {
//     borderRadius: 5,
//     // color:'white',
//     paddingVertical: 8,
//     margin: 5,
//     padding: 5,
//     backgroundColor: "grey",
//   },
//   goals: {
//     color: "white",
//   },
});
