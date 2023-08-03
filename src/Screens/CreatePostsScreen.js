import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CreatePostScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreatePostScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreatePostScreen;