import React from "react";
import { View, Alert } from "react-native";
import Swiper from "react-native-swiper";
import HomeScreen from "./screens/HomeScreen";
import StandardScreen from "./screens/StandardScreen";
import Loading from "./screens/Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getLocation = async () => {
    console.log("aaaaaaaaaaaaaa");
    try {
      // throw Error();
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // console.log(coords.latitude, coords.longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
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
