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
import BackHeader from "./../../Component/backheader";

import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { en, fr, ht } from "./../../lang/index";
i18n.translations = {
  en,
  fr,
  ht,
};
// Set the locale once at the beginning of your app.
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;
class AllDetail extends React.Component {
  componentDidMount = async () => {
    let lang = await AsyncStorage.getItem("lang");
    console.log(lang);
    let chl = lang ? lang : "en";
    i18n.locale = chl;
  };

  render() {
    let {
      name,
      dateOfBirth,
      missingDate,
      age,
      city,
      eyes_color,
      height,
      lastSeenLocation,
      contact_No,
      description,
      Year,
      approve,
      image,
    } = this.props.route.params;
    return (
      <View style={styles.Container}>
        <BackHeader
          navigation={this.props.navigation}
          name={i18n.t("detail")}
        />
        <ScrollView>
        <View style={styles._inner_view}>
          <View style={styles.Card}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: image,
              }}
            />
            <View style={styles.text}>
              <Text style={styles.title}>{i18n.t("contact.name")} : </Text>
              <Text style={styles._value}> {name}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.title}>{i18n.t("contact.city")} : </Text>
              <Text style={styles._value}> {city}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.title}>{i18n.t("contact.age")} : </Text>
              <Text style={styles._value}> {age}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.title}>{i18n.t("contact.eyesColor")} : </Text>
              <Text style={styles._value}> {eyes_color}</Text>
            </View>
            {/* <Text style={styles.text}>{dateOfBirth}</Text> */}
            {/* <Text style={styles.text}>{missingDate}</Text> */}
            <View style={styles.text}>
              <Text style={styles.title}>{i18n.t("contact.height")} : </Text>
              <Text style={styles._value}> {height}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.title}>
                {i18n.t("contact.lastLocation")} :
              </Text>
              <Text style={styles._value}> {lastSeenLocation}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.title}>
              {i18n.t("contact.contact")} :
              </Text>
              <Text style={styles._value}> {contact_No}</Text>
            </View>


            <View style={styles._desciption}>
              <Text style={styles._detail}>
                {i18n.t("contact.description")}
              </Text>
              <Text style={styles._value}> {description}</Text>
            </View>


            <TouchableOpacity activeOpacity={0.5} style={styles.button}>
              <Text style={styles.Btn}>{i18n.t("contactus")}</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container:{
    flex:1
  },
  _inner_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: 160,
    height: 160,
    alignSelf:"center"
  },
  Card: {
    padding: 15,
    borderRadius: 3,
    width: "85%",
    paddingBottom: 30,
    elevation: 1,
  },
  Btn: {
    backgroundColor: "#452d9a",
    padding: 15,
    borderRadius: 50,
    width: 220,
    
    color: "white",
    alignSelf:"center"
  },
  text: {
    fontSize: 16,
    marginTop: 4,
    // paddingLeft: 10,
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%",
    padding:5,
  },
  title: {
    fontWeight: "bold",
    flex:1
  },
  _detail:{
    fontWeight:"bold",
    textAlign:"center",paddingTop:10,
    borderBottomWidth:1,
    borderColor:"grey",
    width:"75%",
    alignSelf:"center",
    marginBottom:10,
    paddingBottom:2

  },

  button: {
    // marginTop: 10,
    flex: 1
  },
  _value:{
    flex:1
  },
  _desciption:{
    // height:100
  }
});

export default AllDetail;
