import React from "react";
import { View, Alert } from "react-native";
import Swiper from "react-native-swiper";
import HomeScreen from "./screens/HomeScreen";
import StandardScreen from "./screens/StandardScreen";
import Loading from "./screens/Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./screens/Weather";

const API_KEY = "04a580dd9502ee0f11aa350fc9f95f64";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    // console.log(data);
    this.setState({ isLoading: false, temp: data.main.temp });
  };

  getLocation = async () => {
    // console.log("aaaaaaaaaaaaaa");
    try {
      // throw Error();
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // console.log(coords.latitude, coords.longitude);
      this.getWeather(latitude, longitude);
      // this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
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
