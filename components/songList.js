import { FlatList } from "react-native";
import Song from "./song"
import { millisToMinutesAndSeconds } from "../utils";

export default function SongList({ tracks }) {
    const renderSong = ({ item, index }) => (
        <Song
          index={index}
          albumImageURL={item.album.images[0].url}
          title={item.name}
          artists={item.artists[0].name}
          albumName={item.album.name}
          duration={millisToMinutesAndSeconds(item.duration_ms)} />
      );

    return (
        <FlatList
        data={tracks}
        renderItem={(item, index) => renderSong(item, index)}
        keyExtractor={(item, index) => index}
        />
)}