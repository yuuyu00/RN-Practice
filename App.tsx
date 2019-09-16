import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title="+1" onPress={() => setCount(count + 1)}></Button>
      <Button title="-1" onPress={() => setCount(count - 1)}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
