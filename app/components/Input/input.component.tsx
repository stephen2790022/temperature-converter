import { TextInput } from "react-native";
import styles from "./input.style";

type InputProps = {
  inputValue: string;
  defaultValue?: string;
  handleInputChange: (val: string) => void;
};
export const InputComponent = ({
  inputValue,
  defaultValue = "0",
  handleInputChange,
}: InputProps) => {
  return (
    <TextInput
      onChangeText={(v) => handleInputChange(v)}
      value={inputValue}
      style={styles.main}
      placeholder="Entre un température"
      keyboardType="numeric"
      maxLength={4}
      defaultValue={defaultValue}
    />
  );
};
