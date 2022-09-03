import { StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
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
