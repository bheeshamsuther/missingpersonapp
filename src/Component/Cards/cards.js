import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

class Card extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.Card}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: this.props.data.image,
            }}
          />
          <Text style={styles.text}>{this.props.data.name}</Text>
          <Text style={styles.text}>{this.props.data.contact_No}</Text>
          <Text style={styles.text}>{this.props.data.Year}</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              this.props.navigate.navigation.navigate(
                "AllDetail",
                this.props.data
              )
            }
          >
            <Text style={styles.Btn}>{this.props.detailbtn}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    margin: 15,
  },
  tinyLogo: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  Card: {
    padding: 3,

    // borderWidth : 2,
    borderRadius: 10,
    width: 150,
    height: 210,
    alignItems: "center",
    elevation: 4,
  },
  Btn: {
    backgroundColor: "#452d9a",
    padding: 6,
    borderRadius: 50,
    width: 130,
    textAlign: "center",
    color: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default Card;
