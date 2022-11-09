import React, { Component } from "react";
import { Themes } from "../assets/Themes";
import { WebView} from 'react-native-webview';
import { StyleSheet, SafeAreaView, Text, View, Image, Pressable } from "react-native";

export default function DetailedSong ( {navigation, route}) {
    const {external_urls} = route.params;
    return (
        <View style = {styles.container}>
           <WebView
           source = {{ uri: external_urls.spotify}}
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