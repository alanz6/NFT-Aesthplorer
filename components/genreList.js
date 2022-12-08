import { FlatList } from "react-native";
import Genre from "./genre";
import { StyleSheet, SafeAreaView, Text, View, Image, Pressable, Button } from "react-native";

export default function GenreList({navigation, route}) {
  const {genres} = route.params;

  const renderGenre = ({ item, index }) => (
      <Genre name = {item}>
      </Genre>
  );

  return (
    <View style={styles.container}>
      <FlatList
      data={genres}
      renderItem={(item, index) => renderGenre(item, index)}
      keyExtractor={(item, index) => index}
      />
    </View>
)}

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      flex: 1,
      flexDirection: 'row',
    }
  });