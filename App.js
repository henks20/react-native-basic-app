import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Hi, there!</Text>
      </View>
      <Text
        style={{
          margin: 16,
          borderWidth: 3,
          borderColor: "yellow",
          padding: 16,
        }}
      >
        Hello World!
      </Text>
      <Button title="click" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 16,
    padding: 12,
    borderWidth: 3,
    borderColor: "orange",
  },
});
