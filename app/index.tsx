import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import styles from "./index.style";
import { InputComponent } from "./components/Input/input.component";
import { useCallback, useMemo, useState } from "react";
import { TemperatureDisplay } from "./components/temperature-display/temperature-display.component";

const defaultTemperature = "0";
export default function Index() {
  const unit = {
    celsius: "°C",
    fahrenheit: "°F",
  };
  const [selectedUnit, setSelectedUnit] = useState(unit.celsius);
  const [inputValue, setInputValue] = useState<string>(defaultTemperature);
  const hotImg = require("../assets/images/hot.png");
  const coldImg = require("../assets/images/cold.png");

  function isNumberNaN(value: string) {
    return isNaN(Number(value));
  }

  function handleInputChange(val: string) {
    setInputValue(val);
  }
  function getOppositeUnit() {
    return selectedUnit === unit.celsius ? unit.fahrenheit : unit.celsius;
  }

  const handleCalculation = useCallback(() => {
    if (selectedUnit === unit.celsius) {
      return Number(inputValue) * 1.8 + 32;
    }
    return (Number(inputValue) - 32) * 1.8;
  }, [inputValue, selectedUnit]);

  const getTemperature = useCallback(() => {
    if (inputValue && isNumberNaN(inputValue))
      return `${inputValue} is not a number`;
    if (!inputValue) return "-";
    return handleCalculation().toFixed(1);
  }, [inputValue, selectedUnit]);

  const imgLink =
    !isNumberNaN(inputValue) && handleCalculation() <= 0 ? coldImg : hotImg;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={imgLink} style={styles.container}>
          <View style={styles.workSpace}>
            <View>
              <TemperatureDisplay
                selectedUnit={getOppositeUnit()}
                temperature={getTemperature()}
              />
            </View>
            <InputComponent
              inputValue={inputValue}
              handleInputChange={handleInputChange}
              selectedUnit={selectedUnit}
            />
            <View>
              <TouchableOpacity
                onPress={() => setSelectedUnit(getOppositeUnit)}
                style={{
                  backgroundColor: "#007BFF",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                  }}
                >
                  Change Unit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
