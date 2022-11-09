import React, { Component } from "react";
import { Themes } from "../assets/Themes";
import { WebView} from 'react-native-webview';
import { StyleSheet, SafeAreaView, Text, View, Image, Pressable } from "react-native";

export default function Preview ( {navigation, route}) {
    const {preview_url} = route.params;
    return (
        <View style = {styles.container}>
           <WebView
           source = {{ uri: preview_url}}
           />
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
  });