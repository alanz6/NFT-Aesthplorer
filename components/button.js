import { StyleSheet, Text, Pressable, View, Image, Dimensions} from "react-native";
import { Themes, Images } from "../assets/Themes";

export default function SpotifyAuthButton({getAuthFunction}) {
  return (
    <View style={styles.container}>
        <Pressable onPress={getAuthFunction}>
            <View style={styles.buttonContainer}>
                <Image 
                soure={Images.spotify}
                style={styles.logo}>
                </Image>
                <Text style={styles.text}>
                    CONNECT WITH SPOTIFY
                </Text>
            </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: '100%',
    width: '100%'
  },
  text: {
    flex: 3,
    fontSize: 16,
    color: Themes.colors.white
  },
  logo: {
    flex: 1,
    height: '100%'
  },
  buttonContainer: {
    backgroundColor: Themes.colors.spotify,
    flexDirection: 'row',
    borderRadius: 99999,
    alignItems: "center",
    width: '60%',
    height: '20%',
  }
});
