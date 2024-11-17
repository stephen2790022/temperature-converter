import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./index.style";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.workSpace}>
            <View>
              <Text>Temperature</Text>
            </View>
            <View>
              <Text>input</Text>
            </View>
            <View>
              <Text>Button</Text>
            </View>
            <View></View>
            <View></View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
