import React, { useState } from "react";
import { StyleSheet } from "react-native";

const CommentsScreen = () => {
    return (
        <View style={styles.container}>
          <Text>CommentsScreen</Text>
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

export default CommentsScreen;