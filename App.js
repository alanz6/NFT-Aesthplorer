import { StyleSheet, SafeAreaView, Text, Pressable, FlatList } from "react-native";
import { useSpotifyAuth, millisToMinutesAndSeconds } from "./utils";
import { Themes } from "./assets/Themes";
import {SpotifyAuthButton, SongList} from "./components";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);

  let contentDisplayed = null;
  
  if (token) {
    contentDisplayed =
      <SongList tracks={tracks} testID={"SongList"}/>
  } else {
    contentDisplayed = <SpotifyAuthButton getAuthFunction={getSpotifyAuth} testID={"AuthButton"}>
    </SpotifyAuthButton>
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 32,
    color: Themes.colors.white
  }
});
