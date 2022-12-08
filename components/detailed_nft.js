import React, { Component } from "react";
import { Themes } from "../assets/Themes";
import { WebView} from 'react-native-webview';
import { StyleSheet, SafeAreaView, Text, View, Image, Pressable } from "react-native";

export default function DetailedNft ({navigation, route}) {
    const {externalUrl} = route.params;
    console.log(externalUrl);

    let contentDisplayed = null;

    if (externalUrl) {
      contentDisplayed =
        <WebView
        source = {{ uri: externalUrl}}
        />
    } else {
      contentDisplayed = 
        <Text style={styles.text}>
          Did not find page
        </Text>
    }

    return (
        <View style = {styles.container}>
           {contentDisplayed}
        </View>
     )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: Themes.colors.background,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      marginBottom: '5%'
    },
    text: {
      fontSize: 32,
      fontFamily: "AmericanTypewriter-Bold",
      color: Themes.colors.white
    }
  });