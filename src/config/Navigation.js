import { GetStarted, Home, Addperson, AllDetail } from "./../Screen/index";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Sidebar from "./../Component/Sidebar/Sidebar";
import { DrawerContent } from "./../Screen";
import { Text } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

// TRANS

import * as Localization from "expo-localization";
import i18n, { translate } from "i18n-js";
import { en, fr, ht } from "./../lang/index";
i18n.translations = {
  en,
  fr,
  ht,
};
// Set the locale once at the beginning of your app.
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

let translateFunc = async () => {
  let lang = await AsyncStorage.getItem("lang");
  console.log(lang);
  let chl = lang ? lang : "en";
  i18n.locale = chl;
  this.setState({});
};

const Stack = createStackNavigator();

function Navigation() {
  translateFunc();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Get Start"
        contentComponent={<Sidebar />}
      >
        <Stack.Screen
          name="Home"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Get Start"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AllDetail"
          component={AllDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: "#00a9ff",
        inactiveTintColor: "#00a9ff",
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name={i18n.t("navigation.home")}
        component={Home}
        options={{
          // title: "Home",

          drawerIcon: ({ focused, size }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#00a9ff" : "black"}
            />
          ),
        }}
      />

      <Drawer.Screen
        name={i18n.t("navigation.Addperson")}
        component={Addperson}
        options={{
          drawerIcon: ({ focused, size }) => (
            <AntDesign name="adduser" size={24} color={"#00a9ff"} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default Navigation;
