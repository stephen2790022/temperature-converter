import { Text } from "react-native";
import styles from "./temperature.style";

type TemperatureDisplayProps = {
  temperature?: string;
  selectedUnit: string;
};

export const TemperatureDisplay = ({
  temperature,
  selectedUnit,
}: TemperatureDisplayProps) => {
  console.log(temperature);
  return <Text style={styles.main}>{`${temperature} ${selectedUnit}`}</Text>;
};
