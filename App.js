import { StyleSheet, SafeAreaView, Text, Pressable, FlatList } from "react-native";
import { useSpotifyAuth, millisToMinutesAndSeconds } from "./utils";
import { Themes } from "./assets/Themes";
import {SpotifyAuthButton, SongList} from "./components";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailedSong from "./components/detailed_song";
import Preview from "./components/preview";

function HomeScreen({ navigation }) {
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Themes.colors.background,
          }, 
          headerTitleStyle: {
            color: Themes.colors.white,
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="DetailedSong" component={DetailedSong} />
        <Stack.Screen name="Preview" component={Preview} />
      </Stack.Navigator>
    </NavigationContainer>
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
  },
});
