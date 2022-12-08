import { FlatList } from "react-native";
import { Network, Alchemy } from "alchemy-sdk";
import Nft from "./nft";
import { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Text, View, Image, Pressable } from "react-native";

const settings = {
    apiKey: "PZIgTrfO3fYUn7iQOxooE96TGbkwUnal", // Replace with your Alchemy API Key.
    network: Network.ETH_MAINNET, // Replace with your network.
};
  
const alchemy = new Alchemy(settings);

export default function NFTList({navigation, route}) {
    const [data, setData] = useState([]);

    const { genre } = route.params;
    console.log(genre);
    const fetchNFTs = async () => {
        const nfts = await alchemy.nft.searchContractMetadata(genre);
        setData(nfts);
    };
    console.log(data);
    
    useEffect(() => {
        fetchNFTs();
    }, []);

    const renderNFT = ({ item, index }) => (
        <Nft 
            name = {item.name}
            address = {item.address}
            externalUrl = {item.openSea.externalUrl}
            imageUrl = {item.openSea.imageUrl}
        />
    );

    return (
        <FlatList
        data={data}
        renderItem={(item, index) => renderNFT(item, index)}
        keyExtractor={(item, index) => index}
        />
)}
