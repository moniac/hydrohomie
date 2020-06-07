import React, { useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const ProgressBar = (props) => {
  const { totalToDrink, amountDrank } = useSelector(
    (state) => state.DrinkReducer
  );
  console.log(totalToDrink, amountDrank);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.amountDrank}>{amountDrank}</Text>
        <Text style={styles.amountLeft}>/{totalToDrink}L</Text>
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(180, 180, 180, 0.5)'",
    width: "100%",
    height: "100%",
    maxHeight: "45%",
    position: "absolute",
    left: 0,
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
  },
  amountDrank: {
    fontSize: 60,
    fontWeight: "bold",
  },
  amountLeft: {
    fontSize: 60,
    fontWeight: "bold",
    opacity: 0.5,
  },
});
