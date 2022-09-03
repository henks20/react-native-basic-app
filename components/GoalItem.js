import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  function deleteGoalHandler() {
    props.onDeleteItem(props.id);
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={deleteGoalHandler}
        // Android ripple effect
        android_ripple={{ color: "#513612" }}
        // iOS ripple effect
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#6b5636",
  },
  pressedItem: {
    opacity: 0.5,
  },
  text: {
    padding: 8,
    color: "white",
  },
});

export default GoalItem;
