import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import images from "../constants/images";
import { useNavigation } from "@react-navigation/native";

const Screens_02 = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([
    {
      id: 1,
      image: images.cart1,
      title: "Ca nấu lẩu, nấu mì mini",
      desc: "Devang",
    },
    {
      id: 2,
      image: images.cart2,
      title: "1KG khô gà bơ tỏi",
      desc: "LTD Food",
    },
    {
      id: 3,
      image: images.cart3,
      title: "Xe cần cẩu đa năng",
      desc: "Thế giới đồ chơi",
    },
    {
      id: 4,
      image: images.cart4,
      title: "Đồ chơi dạng mô hình",
      desc: "Thế giới đồ chơi",
    },
    {
      id: 5,
      image: images.cart5,
      title: "Lãnh đạo đơn giản",
      desc: "Minh Long Book",
    },
    {
      id: 6,
      image: images.cart6,
      title: "Hiểu lòng trẻ con",
      desc: "Minh Long Book",
    },
    {
      id: 7,
      image: images.cart7,
      title: "Donal Trump Thiên tài lãnh đạo",
      desc: "Minh Long Book",
    },
  ]);
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.arrowleft} />
        </TouchableOpacity>
        <Text style={{ color: "#fff" }}>Chat</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Screen_01")}>
          <Image source={images.cart} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ marginHorizontal: 30, marginVertical: 20 }}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderTopWidth: 1,
                borderTopColor: "#969DAA",
              }}
            >
              <Image source={item.image} />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 16 }}>{item.title}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4, marginTop: 5 }}>
                  <Text>Shop</Text>
                  <Text style={{ color: "#969DAA" }}>{item.desc}</Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  width: 88,
                  height: 38,
                  backgroundColor: "#F31111",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "auto",
                }}
              >
                <Text style={{ color: "#fff" }}>Chat</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
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

export default Screens_02;

const styles = StyleSheet.create({});
