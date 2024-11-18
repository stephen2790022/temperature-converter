import { TextInput, View, Text } from "react-native";
import styles from "./input.style";

type InputProps = {
  inputValue: string;
  selectedUnit: string;
  defaultValue?: string;
  handleInputChange: (val: string) => void;
};
export const InputComponent = ({
  inputValue,
  selectedUnit,
  defaultValue = "0",
  handleInputChange,
}: InputProps) => {
  const test = "1.5";
  const test2 = "1.5er";
  console.log(isNaN(Number("1.5er")));
  console.log(Number(test));
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(v) => handleInputChange(v)}
        value={inputValue}
        style={styles.main}
        placeholder="Entre un température"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
      />
      <Text style={styles.unitStyle}>{selectedUnit}</Text>
    </View>
  );
};
