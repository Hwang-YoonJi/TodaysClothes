import React from "react";
import { Text, View } from "react-native";

const StandardScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ marginTop: 50, fontSize: 30 }}>기온별 옷차림</Text>
      </View>
      <View style={{ marginTop: 30, marginHorizontal: 40 }}>
        <Text style={{ fontSize: 20, color: "red" }}>
          27°C 이상&nbsp;&nbsp;&nbsp;
          <Text style={{ color: "gray" }}>그냥 덥다</Text>
        </Text>
        <Text style={{ marginTop: 5 }}>
          ➜ 나시티, 민소매, 반바지, 린넨소재, 선글라스, 양산
        </Text>
        <Text style={{ fontSize: 20, color: "orange", marginTop: 20 }}>
          23°C~26°C&nbsp;&nbsp;&nbsp;
          <Text style={{ color: "gray" }}>후덥지근</Text>
        </Text>
        <Text style={{ marginTop: 5 }}>
          ➜ 반팔, 얇은 셔츠, 얇은 긴팔, 반바지, 면바지
        </Text>
        <Text style={{ fontSize: 20, color: "#ffeb3b", marginTop: 20 }}>
          20°C~22°C&nbsp;&nbsp;&nbsp;
          <Text style={{ color: "gray" }}>시원한 바람</Text>
        </Text>
        <Text style={{ marginTop: 5 }}>
          ➜ 긴팔티, 블라우스, 얇은 가디건, 면바지, 슬랙스
        </Text>
        <Text style={{ fontSize: 20, color: "lightgreen", marginTop: 20 }}>
          17°C~19°C&nbsp;&nbsp;&nbsp;
          <Text style={{ color: "gray" }}>아침저녁 쌀쌀</Text>
        </Text>
        <Text style={{ marginTop: 5 }}>
          ➜ 얇은 니트, 가디건, 후드티, 맨투맨, 청바지, 면바지
        </Text>
        <Text style={{ fontSize: 20, color: "green", marginTop: 20 }}>
          12°C~16°C&nbsp;&nbsp;&nbsp;
          <Text style={{ color: "gray" }}>겉옷 필수</Text>
        </Text>
        <Text style={{ marginTop: 5 }}>
          ➜ 자켓, 셔츠, 가디건, 간절기 야상, 청바지, 살색 스타킹
        </Text>
        <Text style={{ fontSize: 20, color: "skyblue", marginTop: 20 }}>
          10°C~11°C&nbsp;&nbsp;&nbsp;
          <Text style={{ color: "gray" }}>차가운 바람</Text>
        </Text>
        <Text style={{ marginTop: 5 }}>
          ➜ 트랜치코트, 간절기 야상, 청바지, 여러겹 껴입기
        </Text>
        <Text style={{ fontSize: 20, color: "blue", marginTop: 20 }}>
          6°C~9°C&nbsp;&nbsp;&nbsp;
          <Text style={{ color: "gray" }}>하나라도 더 입기</Text>
        </Text>
        <Text style={{ marginTop: 5 }}>
          ➜ 겨울 코트, 가죽자켓, 히트텍, 니트, 경량패딩, 기모바지
        </Text>
        <Text style={{ fontSize: 20, color: "purple", marginTop: 20 }}>
          5°C 이하&nbsp;&nbsp;&nbsp;
          <Text style={{ color: "gray" }}>그냥 춥다</Text>
        </Text>
        <Text style={{ marginTop: 5 }}>
          ➜ 야상, 패딩, 내복, 기모바지, 목도리, 장갑, 기모소재
        </Text>
      </View>
    </View>
  );
};

export default StandardScreen;
