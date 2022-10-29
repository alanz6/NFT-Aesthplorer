import { StyleSheet, SafeAreaView, Text, View, Image } from "react-native";
import { Themes } from "../assets/Themes";

export default function Song({index, albumImageURL, title, artists, albumName, duration}) {
  return (
    <View style={styles.container}>
        <Text style={styles.text} width='10%'>
            {index}
        </Text>
        <Image 
            source={{
                uri: albumImageURL
            }}
            style={styles.image}>
        </Image>
        <View style={styles.titleAndArtist} marginRight='5%'>
            <Text numberOfLines={1} style={styles.text}>
                {title}
            </Text>
            <Text numberOfLines={1} style={styles.text}>
                {artists}
            </Text>
        </View>
        <View marginRight='5%' width='20%'>
          <Text numberOfLines={1} style={styles.text}>
              {albumName}
          </Text>
        </View>
        <Text numberOfLines={1} style={styles.text} width='10%'>
            {duration}
        </Text>
    </View>
  );
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
    fontSize: 16,
    color: Themes.colors.white
  },
  titleAndArtist: {
    backgroundColor: Themes.colors.background,
    width: '30%'
  },
  image: {
    width: '20%',
    height: '100%',
    resizeMode: 'contain'
  }
});
