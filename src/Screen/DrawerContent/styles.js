import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  sideMenuContainer: {
    marginTop: -10,
    padding: 0,
    margin: 0,
    flex: 1,
  },
  _profile_container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#452d9a",
    height: 200,
    marginBottom: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 90,
    height: 90,
    borderRadius: 150 / 2,
  },
  _profile_view: {
    borderWidth: 2,
    height: 130,
    width: 130,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:100
  },
});

export default styles;
