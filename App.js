import { StyleSheet, SafeAreaView, Text, Pressable, FlatList } from "react-native";
import { Themes } from "./assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailedNft from "./components/detailed_nft";
import GenreList from "./components/genreList";
import NFTList from "./components/nftList";

function HomeScreen({ navigation }) {
  const genres = ["cyberpunk", "avant-garde", "futurism", "impressionism", "lo-fi", "alternative", "cubism", "surrealism"]

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.navigate('GenreList', {genres: genres})}>
        <Text style={styles.text}>
          Start!
        </Text>
      </Pressable>
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
        <Stack.Screen name="DetailedNft" component={DetailedNft}/>
        <Stack.Screen name="GenreList" component={GenreList}/>
        <Stack.Screen name="NFTList" component={NFTList}/>
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
