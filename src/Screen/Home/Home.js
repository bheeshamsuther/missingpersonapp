import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Picker,
  AsyncStorage,
} from "react-native";
import { Spinner, Row } from "native-base";
import Card from "../../Component/Cards/cards";
import { GetData } from "../../config/function";
import Header from "../../Component/header";
import Search from "./../../Component/searchInput/SearchInput";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { en, fr, ht } from "./../../lang/index";
import city from "./../../config/city";
import DatePicker from "../../Component/DatePicker";

i18n.translations = {
  en,
  fr,
  ht,
};
// Set the locale once at the beginning of your app.

i18n.fallbacks = true;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      AllPersons: [],
      lan: "en",
      Year: "",
      City: "",
      selectedValue: "",
      Year: undefined,
    };
  }

  componentDidMount = async () => {
    let { AllPersons } = this.state;
    try {
      let getData = await GetData();
      await getData.forEach((val) => {
        console.log(val.data().name);
        AllPersons.push(val.data());
      });
      let lang = await AsyncStorage.getItem("lang");
      console.log(lang);
      let chl = lang ? lang : "en";
      i18n.locale = chl;
      await this.setState({
        AllPersons: AllPersons,
      });
    } catch (err) {
      this.setState({
        err: err,
      });
    }
  };

  changeLang = (e) => {
    AsyncStorage.setItem("lang", e);
    i18n.locale = e;
    this.setState({});
  };

  setSelectedValue = (e, name) => {
    this.setState({
      [name]: e,
    });
  };
  searchbyDate = (date) => {
    this.setState({ dateOfBirth: date, Year: date.getFullYear() });
  };

  render() {
    let { AllPersons, selectedValue, City, Year } = this.state;
    console.log(Year);

    const filterCity = AllPersons.filter((users) => {
      return users.city.toLowerCase().includes(City.toLowerCase());
    });
    const filterPerson = filterCity.filter((users) => {
      return Year ? users.Year === Year : users;
    });
    return (
      <>
        <Header
          navigation={this.props.navigation}
          name={i18n.t("Home.1")}
          changeLan={this.changeLang}
        />
        {!AllPersons.length ? (
          <View style={{ flex: 1, marginTop: "50%" }}>
            <Spinner color="blue" />
          </View>
        ) : (
          <ScrollView>
            <View style={styles.Container}>
              <View style={styles.search}>
                <View style={styles.searchView}>
                  <Picker
                    selectedValue={City}
                    style={{
                      borderColor: "green",
                      borderEndWidth: 2,
                      color: "#452d9a",
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setSelectedValue(itemValue, "City")
                    }
                  >
                    <Picker.Item label={i18n.t("Home.city")} value="" />
                    {city.map((val, i) => (
                      <Picker.Item label={val} value={val} />
                    ))}
                  </Picker>
                </View>
                <DatePicker
                  onchange={this.searchbyDate}
                  data={i18n.t("Home.year")}
                />
              </View>
              {filterPerson && filterPerson.length ? (
                filterPerson.map((val, i) => (
                  <>
                    <Card navigate={this.props} data={val} detailbtn = {i18n.t("detailbtn")}/>
                  </>
                ))
              ) : (
                <View style={styles.notfound}>
                  <Text style={styles.notfoundtext}>
                    {i18n.t("Home.found")}
                  </Text>
                </View>
              )}
            </View>
          </ScrollView>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  search: {
    // flex: 1,
    width: "100%",
    padding: 10,
    color: "white",
    flexDirection: "row",
    alignSelf: "center",
  },
  notfound: {
    alignSelf: "center",
    marginLeft: 100,
  },
  notfoundtext: {
    fontSize: 20,
  },
  searchView: {
    flex: 1,
    borderColor: "#452d9a",
    borderWidth: 1,
    height: 52,
    marginTop: 20,
    borderRadius: 5,
  },
});

export default Home;
