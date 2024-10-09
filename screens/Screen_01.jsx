import { Image, ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screens_01 = () => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState("");
  const [data] = useState([
    {
      id: 1,
      image: images.item1,
      title: "Cáp chuyển từ Cổng USB sang PS2...",
      price: "69.900 đ",
      percent: "-39%",
    },
    {
      id: 2,
      image: images.item2,
      title: "Cáp chuyển từ Cổng USB sang HDMI...",
      price: "100.900 đ",
      percent: "-19%",
    },
    {
      id: 3,
      image: images.item3,
      title: "Cáp sạc nhanh USB Type C...",
      price: "102.900 đ",
      percent: "-59%",
    },
    {
      id: 4,
      image: images.item4,
      title: "Adapter chuyển đổi từ USB sang LAN...",
      price: "99.900 đ",
      percent: "-32%",
    },
    {
      id: 5,
      image: images.item5,
      title: "Cáp chuyển đổi từ USB sang VGA...",
      price: "22.900 đ",
      percent: "-22%",
    },
    {
      id: 6,
      image: images.item6,
      title: "Cáp chuyển từ Cổng USB sang HDMI...",
      price: "67.900 đ",
      percent: "-33%",
    },
  ]);

  const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const Item = ({ image, title, price, percent }) => {
    return (
      <TouchableOpacity style={{ flex: 1 }}>
        <Image source={image} height={90} resizeMode="contain" />
        <Text style={{ fontSize: 12, marginTop: 8 }}>{title}</Text>
        <View style={{ flexDirection: "row", marginTop: 4 }}>
          <Image source={images.stars} />
          <Text style={{ fontSize: 10 }}>(15)</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 4 }}>
          <Text style={{ fontSize: 12, fontWeight: "700" }}>{price}</Text>
          <Text style={{ fontSize: 12, color: "#969DAA" }}>{percent}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItemsInPairs = () => {
    const pairs = [];
    for (let i = 0; i < filteredData.length; i += 2) {
      pairs.push(
        <View key={i} style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
          <Item {...filteredData[i]} />
          {filteredData[i + 1] && <Item {...filteredData[i + 1]} />}
        </View>
      );
    }
    return pairs;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View
        style={{
          backgroundColor: "#1BA9FF",
          height: 42,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <Image source={images.arrowleft} />
        <View
          style={{
            width: 192,
            height: 30,
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 8,
          }}
        >
          <Image source={images.search} />
          <TextInput
            placeholder="Tìm kiếm sản phẩm"
            style={{ width: "100%", height: "100%", paddingLeft: 4, outline: "none" }}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Screen_02")} style={{ position: "relative" }}>
          <Image source={images.cart} />
          <View style={{ position: "absolute", right: -7, top: -4 }}>
            <Image source={images.circle} />
          </View>
        </TouchableOpacity>
        <Image source={images.more} />
      </View>

      <ScrollView>
        <View style={{ paddingHorizontal: 20, marginTop: 22 }}>
          {filteredData.length > 0 ? renderItemsInPairs() : <Text>Không tìm thấy sản phẩm nào.</Text>}
        </View>
      </ScrollView>

      {/* Footer */}
      <View
        style={{
          backgroundColor: "#1BA9FF",
          height: 42,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <TouchableOpacity>
          <Image source={images.list} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.home} tintColor={"#000"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.back} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Screens_01;
