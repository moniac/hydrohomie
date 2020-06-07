import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  Button,
} from "react-native";

import { boundaddAmountDrank } from "../../redux/reducers/actionCreators";

const AddButton = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        {toggle && (
          <View style={{ flexDirection: "row" }}>
            <Button onPress={() => boundaddAmountDrank(0.25)} title="250" />
            <Button onPress={() => boundaddAmountDrank(0.5)} title="500" />
          </View>
        )}
      </View>
      <Button
        onPress={() => setToggle((prevValue) => !prevValue)}
        style={styles.button}
        title={toggle ? "x" : "+"}
      />
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: "5%",
  },
});
