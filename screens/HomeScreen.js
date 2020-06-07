import React, { useCallback } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import ProgressBall from "../components/ProgressBall/ProgressBall";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import { SETTOTALTODRINK } from "../redux/reducers/constants";
import AddButton from "../components/AddButton/AddButton";

const MainView = (props) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ProgressBar />
      <ProgressBall />
      <AddButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainView;
