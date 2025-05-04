import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/BackButton";

const dummyCart = [
  {
    id: 1,
    name: "Royal Canin",
    image: require("@/assets/images/food.png"),
    price: 10000,
    selled: 100,
  },
  {
    id: 2,
    name: "Bolt",
    image: require("@/assets/images/food.png"),
    price: 10000,
    selled: 100,
  },
];

const Cart = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-50 p-4">
      <View className="items-center mb-6">
        <Text
          className="text-black"
          style={{ fontFamily: "Lato-Bold", fontSize: 20 }}
        >
          Cart
        </Text>
        <Text
          className="text-gray-600"
          style={{ fontFamily: "Lato-Bold", fontSize: 14 }}
        >
          Please input your booking details
        </Text>
      </View>
      <View className="absolute left-0 top-16">
        <BackButton />
      </View>
      <View className="flex-1">
        {dummyCart.map((item) => (
          <View key={item.id} className="flex-row items-center mb-4">
            <Image
              source={item.image}
              className="w-16 h-16 rounded-lg"
              resizeMode="cover"
            />
            <View className="ml-4">
              <Text
                className="text-black"
                style={{ fontFamily: "Lato-Bold", fontSize: 16 }}
              >
                {item.name}
              </Text>
              <Text
                className="text-gray-600"
                style={{ fontFamily: "Lato-Regular", fontSize: 14 }}
              >
                {item.price} VND
              </Text>
            </View>
          </View>
        ))}
      </View>
      <View className="absolute bottom-28 left-0 right-0 p-4 bg-white shadow-md">
        <TouchableOpacity
          className="bg-accent rounded-lg p-4"
          onPress={() => console.log("Checkout")}
        >
          <Text
            className="text-white text-center"
            style={{ fontFamily: "Lato-Bold", fontSize: 16 }}
          >
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
