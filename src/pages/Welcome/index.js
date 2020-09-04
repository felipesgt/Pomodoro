import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

import Button from "../../components/Button";

import { styles } from "./styles";

export default function Welcome() {
  const navigation = useNavigation();

  const navigateToTimer = useCallback(() => navigation.navigate("Timer"), [
    navigation,
  ]);

  return (
    <View style={styles.container}>
      <LottieView
        loop={true}
        autoPlay={true}
        autoSize
        source={require("../../../assets/yoga-girl-3.json")}
      />

      <Text style={styles.text}>Concentre-se melhor para estudar</Text>
      <Button
        text="Começar"
        icon="arrow-right"
        style={styles.button}
        onPress={navigateToTimer}
      />
    </View>
  );
}
