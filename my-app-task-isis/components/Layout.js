import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="##1c041f" />
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    backgroundColor: "#1c041f",
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "#1c041f",
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
});

export default Layout;