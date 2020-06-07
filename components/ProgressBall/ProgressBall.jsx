import React, { useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
} from "react-native";
import { useSelector } from "react-redux";

const animationSettings = {
  toValue: 1,
  duration: 12000,
  easing: Easing.linear,
  RCTAnimation: true,
};

const ProgressBall = (props) => {
  const [animateSpin, setAnimateSpin] = useState(new Animated.Value(0));
  const { totalToDrink, amountDrank } = useSelector(
    (state) => state.DrinkReducer
  );
  const percentageCompleted = (amountDrank / totalToDrink) * 100 + 9 + "%";
  console.log(percentageCompleted);

  useEffect(() => {
    Animated.loop(Animated.timing(animateSpin, animationSettings)).start();

    () => {
      Animated.loop(animationSettings).stop();
    };
  }, []);

  const spin = animateSpin.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ rotate: spin }],
          backgroundColor: "rgba(30, 145, 230, 1)",
          height: 475,
          width: 475,
          position: "absolute",
          top: -310,
          left: -160,
          borderRadius: 200,
        }}
      ></Animated.View>
      <Animated.View
        style={{
          transform: [{ rotate: spin }],
          backgroundColor: "rgba(210, 210, 210, 1)",
          height: 475,
          width: 475,
          position: "absolute",
          bottom: percentageCompleted,
          left: -160,
          borderRadius: 200,
        }}
      ></Animated.View>
      {/* <Animated.View
        style={{
          transform: [{ rotate: spin }],
          backgroundColor: "rgba(30, 145, 230, 1)",
          height: 475,
          width: 475,
          position: "absolute",
          top: -310,
          left: -160,
          borderRadius: 200,
        }}
      ></Animated.View>
      <Animated.View
        style={{
          transform: [{ rotate: spin }],
          backgroundColor: "rgba(210, 210, 210, 1)",
          height: 475,
          width: 475,
          position: "absolute",
          bottom: 30,
          left: -160,
          borderRadius: 200,
        }}
      ></Animated.View> */}
    </View>
  );
};

export default ProgressBall;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 145, 255, 1)",
    width: 200,
    height: 200,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    position: "relative",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    borderColor: "white",
    borderWidth: 8,
    elevation: 8,
    marginBottom: "2%",
    overflow: "hidden",
  },
  wave: {
    backgroundColor: "rgba(210, 210, 210, 1)",
    height: 475,
    width: 475,
    position: "absolute",
    top: -325,
    left: -160,
    borderRadius: 200,
  },
});
