import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { images } from "@/constants/images";

const ProductType = ({
  images,
  name,
  isActiveType,
  onPress,
}: ProductTypeProps) => {
  return (
    <View className="items-start">
      <TouchableOpacity
        key={name}
        className="justify-center items-center bg-white rounded-2xl"
        style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
        }}
      >
        <View
          className="bg-white rounded-lg"
          style={{
            width: 170,
            height: 170,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={images}
            className="w-28 h-28"
            style={{ resizeMode: "contain" }}
          />
        </View>
      </TouchableOpacity>

      <Text
        className="text-black text-md mt-2"
        style={{
          fontFamily: "Lato-Bold",
          fontSize: 16,
          color: isActiveType ? "#BF9264" : "#000000",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default ProductType;
