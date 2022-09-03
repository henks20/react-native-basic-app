import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredText, setEnteredText] = useState("");

  function goalInputHandler(text) {
    setEnteredText(text);
  }

  function addGoalHandler() {
    if (enteredText === "") {
      return;
    }
    props.onAddGoal(enteredText);
    setEnteredText("");
  }

  return (
    <Modal visible={props.isModalVisible} animationType="slide">
      <View style={styles.container}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          placeholder="Your goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} color="#513612" />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={props.onCancel} color="#ff4700" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ffa500",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#fff0da",
    backgroundColor: "#fff0da",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
