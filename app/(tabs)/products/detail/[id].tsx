import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const detailProduct = [
  {
    id: 1,
    name: "Royal Canin",
    image: require("@/assets/images/food.png"),
    price: 10000,
    selled: 100,
    stock: 10,
    seller: "Pet Supplies Ambarketawang",
    location: "Ambarketawang, Yogyakarta",
    description:
      "Royal Canin is a premium pet food brand scientifically formulated to meet the specific nutritional needs of dogs and cats based on their breed, age, size, and health conditions. Trusted by veterinarians worldwide, Royal Canin supports optimal growth and overall well-being.",
  },
  {
    id: 2,
    name: "Bolt",
    image: require("@/assets/images/food.png"),
    price: 10000,
    selled: 100,
  },
  {
    id: 3,
    name: "Royal Rumble",
    image: require("@/assets/images/food.png"),
    price: 10000,
    selled: 100,
  },
];

const DetailProduct = () => {
  const { id } = useLocalSearchParams();
  // console.log("params: ", id);

  const product = detailProduct.find((item) => item.id === Number(id));

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 bg-slate-50 justify-center items-center px-base py-base">
        <ScrollView
          contentContainerStyle={{
            paddingBottom: Platform.OS === "ios" ? 100 : 20,
            height: "100%",
            gap: 15,
          }}
          showsVerticalScrollIndicator={false}
        >
          {product ? (
            <>
              <View className="w-full h-80 justify-center items-center bg-accent rounded-xl">
                <Image
                  source={product.image}
                  className="w-32 h-32"
                  style={{ resizeMode: "contain" }}
                />
              </View>
              <View className="w-full mt-4 items-start">
                <Text
                  className="text-black text-xl"
                  style={{
                    fontFamily: "Lato-Bold",
                    fontSize: 16,
                  }}
                >
                  {product.name}
                </Text>
                <Text
                  className="text-black text-lg"
                  style={{
                    fontFamily: "Lato-Bold",
                    fontSize: 14,
                  }}
                >
                  ${product.price}
                </Text>
              </View>

              <View className="w-full flex-row justify-between items-end mt-4 gap-2">
                <View className="flex-row items-center gap-2">
                  <Image
                    source={require("@/assets/images/food.png")}
                    className="w-12 h-12 rounded-xl border border-black"
                    style={{ resizeMode: "contain" }}
                  />
                  <View className="flex-col mb-1">
                    <Text
                      className="text-black text-md mt-2"
                      style={{
                        fontFamily: "Lato-Bold",
                        fontSize: 10,
                      }}
                    >
                      {product.seller}
                    </Text>
                    <Text
                      className="text-gray-400 text-md mt-2"
                      style={{
                        fontFamily: "Lato-Bold",
                        fontSize: 10,
                      }}
                    >
                      {product.location}
                    </Text>
                  </View>
                </View>
                <Text
                  className="text-black text-lg"
                  style={{
                    fontFamily: "Lato-Bold",
                    fontSize: 10,
                  }}
                >
                  {`Rating: 5/5`}
                </Text>
              </View>
              <View className="w-full mt-4">
                <Text
                  className="text-black text-lg"
                  style={{
                    fontFamily: "Lato-Bold",
                    fontSize: 14,
                  }}
                >
                  Description
                </Text>
                <Text
                  className="text-gray-500 mt-2"
                  style={{
                    fontFamily: "Lato-Bold",
                    fontSize: 12,
                  }}
                >
                  {product.description}
                </Text>
              </View>
              <View
                className="w-full"
                style={{
                  marginTop: Platform.OS === "ios" ? 25 : 5,
                }}
              >
                <TouchableOpacity
                  className="bg-primary rounded-xl mt-4"
                  style={{
                    width: "100%",
                    padding: Platform.OS === "ios" ? 15 : 10,
                  }}
                >
                  <Text
                    className="text-white text-lg"
                    style={{
                      fontFamily: "Lato-Bold",
                      fontSize: 16,
                      textAlign: "center",
                    }}
                  >
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <Text>Product not found</Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DetailProduct;
