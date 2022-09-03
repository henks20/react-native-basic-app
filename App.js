import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(text) {
    setEnteredText(text);
  }

  function addGoalHandler() {
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), text: enteredText },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.listContainer}>
        <Text>List of goals: </Text>
        <FlatList
          data={goals}
          renderItem={(goal) => {
            // Note: If goal is an object, and has 'key' or 'id' property,
            // it will be automatically added as an element's key. There is no need to write it.
            // There is also option to get and add key as a goal.index
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{goal.item.text}</Text>
              </View>
            );
          }}
          // Change to id ===> id: Math.random().toString()
          // keyExtractor={(item, index) => {
          //   return item.id;
          // }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#CCC",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  listContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#6b5636",
  },
  goalText: {
    color: "white",
  },
});
