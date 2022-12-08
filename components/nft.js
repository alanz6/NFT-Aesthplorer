import { StyleSheet, Dimensions, Text, View, Image, Pressable, Button } from "react-native";
import { Themes } from "../assets/Themes";
import { useNavigation } from '@react-navigation/native';

export default function Nft({name, address, externalUrl, imageUrl}) {
  const navigation = useNavigation(); 
  return (
    <Pressable onPress={() => navigation.navigate('DetailedNft', {externalUrl: externalUrl})}>
      <View style={styles.container}>
          <Text style={styles.text} numberOfLines={1}>
            {name}
          </Text>
          <Image 
              source={{
                uri: imageUrl
              }}
              style={styles.image}>
          </Image>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "cornflowerblue",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: '100%',
    height: Dimensions.get('window').height / 4,
    marginBottom: '5%',
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    fontFamily: "AmericanTypewriter-Bold",
    color: Themes.colors.white
  },
  image: {
    width: '50%',
    height: '80%',
    resizeMode: 'contain'
  }
});
