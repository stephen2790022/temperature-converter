import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    position: "relative",
  },
  main: {
    alignSelf: "stretch",
    height: 40,
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 20,
  },
  unitStyle: {
    fontWeight: 700,
    fontSize: 34,
    position: "absolute",
    right: 42,
  },
});

export default styles;
