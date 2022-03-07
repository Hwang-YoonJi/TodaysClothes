import React from "react";
import { View } from "react-native";
import Swiper from "react-native-swiper";
import HomeScreen from "./screens/HomeScreen";
import StandardScreen from "./screens/StandardScreen";
import Loading from "./screens/Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return <Loading />;
  }
}

// const SwiperComponent = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       <Swiper
//         dotStyle={{
//           width: 10,
//           height: 10,
//           borderRadius: 10,
//           backgroundColor: "gray",
//           marginLeft: 10,
//         }}
//         activeDotStyle={{
//           width: 10,
//           height: 10,
//           borderRadius: 10,
//           backgroundColor: "yellow",
//           marginLeft: 10,
//         }}
//       >
//         <View
//           style={{
//             flex: 1,
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "#2196f3",
//           }}
//         >
//           <HomeScreen />
//         </View>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: "#fff",
//           }}
//         >
//           <StandardScreen />
//         </View>
//       </Swiper>
//     </View>
//   );
// };

// export default SwiperComponent;
