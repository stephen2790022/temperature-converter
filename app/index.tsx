import { ImageBackground, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import styles from "./index.style";
import { InputComponent } from "./components/Input/input.component";
import { useState } from "react";

// import Cold from "../assets/images/cold.png";

export default function Index() {
  const [inputValue, setInputValue] = useState<string>("");
  const hotImg = require("../assets/images/hot.png");
  function handleInputChange(val: string) {
    setInputValue(val);
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={hotImg} style={styles.container}>
          <View style={styles.workSpace}>
            <View>
              <Text>Temperature</Text>
            </View>
            <InputComponent
              inputValue={inputValue}
              handleInputChange={handleInputChange}
            />
            <View>
              <Text>Button {inputValue}</Text>
            </View>
            <View></View>
            <View></View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
