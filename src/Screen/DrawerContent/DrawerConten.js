import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import styles from "./styles";
// export default class DrawerContent extends Component {
//   constructor() {
//     super();
//     //Setting up the Main Top Large Image of the Custom Sidebar

//     //Array of the sidebar navigation option with icon and screen to navigate
//     //This screens can be any screen defined in Drawer Navigator in App.js
//     //You can find the Icons from here https://material.io/tools/icons/
//     this.items = [
//       {
//         navOptionThumb: "camera",
//         navOptionName: "First Screen",
//         screenToNavigate: "NavScreen1",
//       },
//       {
//         navOptionThumb: "image",
//         navOptionName: "Second Screen",
//         screenToNavigate: "NavScreen2",
//       },
//       {
//         navOptionThumb: "build",
//         navOptionName: "Third Screen",
//         screenToNavigate: "NavScreen3",
//       },
//     ];
//   }
//   render() {
//     return (
//       <View style={styles.sideMenuContainer}>
//         {/*Top Large Image */}
// <Image
//   source={require("./../../../assets/avatar.png")}
//   style={styles.sideMenuProfileIcon}
// />
//         {/*Divider between Top Image and Sidebar Option*/}
//         <View
//           style={{
//             width: "100%",
//             height: 1,
//             backgroundColor: "#e2e2e2",
//             marginTop: 15,
//           }}
//         />
//         {/*Setting up Navigation Options from option array using loop*/}
//         <View style={{ width: "100%" }}>
//           <DrawerContentScrollView {...this.props}>
//             <DrawerItemList {...this.props} />
//             <DrawerItem
//               label="Help"
//               onPress={() => Linking.openURL("https://mywebsite.com/help")}
//             >
//               <Text>sdfsdf</Text>
//             </DrawerItem>
//           </DrawerContentScrollView>

//         </View>
//       </View>
//     );
//   }
// }

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.sideMenuContainer}>
        <View style={styles._profile_container}>
            <View style={styles._profile_view}>
          <Image
            source={require("./../../../assets/avatar.png")}
            style={styles.sideMenuProfileIcon}
          />
          </View>
        </View>
        <DrawerItemList {...props} />
        {/* <DrawerItem
          label="Help"
          onPress={() => Linking.openURL("https://mywebsite.com/help")}
        /> */}
      </View>
    </DrawerContentScrollView>
  );
}
