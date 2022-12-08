import { StyleSheet, SafeAreaView, Text, View, Image, Pressable, Button } from "react-native";
import { Themes } from "../assets/Themes";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Genre({ name }) {
  const navigation = useNavigation(); 
  return (
    <Pressable onPress={() => navigation.navigate('NFTList', {genre: name})}>
      <View style={styles.container}>
          <Text style={styles.text}>
            {name}
          </Text>
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
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    marginBottom: '10%',
    borderRadius: 5,
    paddingTop: '5%',
    paddingBottom: '5%'
  },
  text: {
    fontSize: 16,
    color: Themes.colors.white,
    fontFamily: "AmericanTypewriter-Bold"
  }
});
