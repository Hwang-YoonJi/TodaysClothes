import React from "react";
import { Text, View, ScrollView, Image } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 40, color: "#fff" }}>안양시</Text>
          <Text style={{ fontSize: 20, color: "#fff", marginTop: 5 }}>
            맑음
          </Text>
          <Text style={{ fontSize: 70, color: "#fff" }}>27°</Text>
          <Text style={{ fontSize: 20, color: "#fff" }}>체감온도 28°</Text>
          <Text style={{ fontSize: 20, color: "#fff", marginTop: 5 }}>
            최고 <Text style={{ color: "red" }}>29°</Text> 최저{" "}
            <Text style={{ color: "blue" }}>26°</Text>
          </Text>
        </View>
        <View
          style={{
            marginTop: 40,
            backgroundColor: "#fff",
            borderRadius: 10,
            width: 350,
            height: 150,
          }}
        >
          <Text
            style={{
              marginVertical: 10,
              marginLeft: 10,
              fontWeight: "bold",
            }}
          >
            날씨에 맞는 옷 추천
          </Text>
          <View
            style={{ backgroundColor: "black", height: 1, width: "100%" }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 10,
            }}
          >
            <Text>상의</Text>
            <Text>하의</Text>
            <Text>기타</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 10,
            }}
          >
            <Image source={require("../assets/sleeveless.png")} />
            <Image source={require("../assets/shorts.png")} />
            <Image source={require("../assets/sunglasses.png")} />
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#fff",
            borderRadius: 10,
            width: 350,
            height: 170,
          }}
        >
          <Text
            style={{
              marginVertical: 10,
              marginLeft: 10,
              fontWeight: "bold",
            }}
          >
            시간별 날씨
          </Text>
          <View
            style={{ backgroundColor: "black", height: 1, width: "100%" }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 15,
            }}
          >
            <Text>지금</Text>
            <Text>오전 11시</Text>
            <Text>오후 12시</Text>
            <Text>오후 1시</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
            }}
          >
            <Image
              source={require("../assets/sunny.png")}
              style={{ marginHorizontal: 20 }}
            />
            <Image
              source={require("../assets/sunny.png")}
              style={{ marginHorizontal: 30 }}
            />
            <Image
              source={require("../assets/sunny.png")}
              style={{ marginHorizontal: 35 }}
            />
            <Image
              source={require("../assets/sunny.png")}
              style={{ marginHorizontal: 30 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
            }}
          >
            <Text style={{ fontSize: 25, marginHorizontal: 20 }}>27°</Text>
            <Text style={{ fontSize: 25, marginHorizontal: 20 }}>27°</Text>
            <Text style={{ fontSize: 25, marginHorizontal: 35 }}>28°</Text>
            <Text style={{ fontSize: 25, marginHorizontal: 25 }}>29°</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderRadius: 10,
            width: 350,
            height: 200,
            marginBottom: 70,
          }}
        >
          <Text>일별 날씨</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
