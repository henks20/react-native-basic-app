import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

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
        <TextInput
          placeholder="Your goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={props.onCancel} />
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
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#CCC",
    width: "100%",
    padding: 8,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
