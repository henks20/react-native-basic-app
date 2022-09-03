import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  function deleteGoalHandler() {
    props.onDeleteItem(props.id);
  }

  return (
    <Pressable onPress={deleteGoalHandler}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#6b5636",
  },
  text: {
    color: "white",
  },
});

export default GoalItem;
