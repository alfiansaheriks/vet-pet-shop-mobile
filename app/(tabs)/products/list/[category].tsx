import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SearchBar from "@/components/SearchBar";
import { Link } from "expo-router";

const data = [
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
  {
    id: 3,
    name: "Royal Rumble",
    image: require("@/assets/images/food.png"),
    price: 10000,
    selled: 100,
  },
  {
    id: 4,
    name: "Medicine",
    image: require("@/assets/images/food.png"),
    price: 10000,
    selled: 100,
  },
  {
    id: 5,
    name: "Care",
    image: require("@/assets/images/food.png"),
    price: 10000,
    selled: 100,
  },
  {
    id: 6,
    name: "Fish",
    image: require("@/assets/images/food.png"),
    price: 10000,
    selled: 100,
  },
  {
    id: 7,
    name: "Care",
    image: require("@/assets/images/food.png"),
    price: 10000,
    selled: 100,
  },
  {
    id: 8,
    name: "Fish",
    image: require("@/assets/images/food.png"),
    price: 10000,
    selled: 100,
  },
  {
    id: 9,
    name: "Care",
    image: require("@/assets/images/food.png"),
    price: 10000,
    selled: 100,
  },
  {
    id: 10,
    name: "Fish",
    image: require("@/assets/images/food.png"),
    price: 10000,
    selled: 100,
  },
];

const ProductList = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-50 px-base">
      <View className="flex-1 px-4 gap-4">
        {/* Static Header */}
        <View className="w-full mt-4">
          <Text
            className="text-black text-xl"
            style={{
              fontFamily: "Lato-Bold",
              fontSize: 24,
            }}
          >
            Products
          </Text>
          <View className="rounded-xl bg-white px-4 py-0 mt-6">
            <SearchBar placeholder="Search for products" />
          </View>
        </View>

        {/* FlatList gets all the remaining space */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            paddingBottom: 100,
            paddingTop: 10,
            gap: 10,
          }}
          columnWrapperStyle={{
            gap: Platform.OS === "ios" ? 20 : 10,
          }}
          renderItem={({ item }) => (
            <Link href={`/(tabs)/products/detail/${item.id}`} asChild>
              <TouchableOpacity className="flex-1 items-start bg-white rounded-lg shadow-sm p-6 mb-4">
                <View
                  className="bg-gray-100 rounded-md mb-2"
                  style={{
                    width: Platform.OS === "ios" ? 135 : 120,
                    height: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={item.image}
                    className="w-16 h-16"
                    style={{ resizeMode: "contain" }}
                  />
                </View>
                <Text
                  className="text-black text-lg"
                  style={{
                    fontFamily: "Lato-Bold",
                    fontSize: 14,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  className="text-gray-500 bg-gray-100 rounded-md px-2 mt-2"
                  style={{
                    fontFamily: "Lato-Regular",
                    fontSize: 12,
                  }}
                >
                  {`$${item.price}`}
                </Text>
                <Text
                  className="text-gray-500 mt-2"
                  style={{
                    fontFamily: "Lato-Regular",
                    fontSize: 12,
                  }}
                >
                  {`Sold: ${item.selled}`}
                </Text>
              </TouchableOpacity>
            </Link>
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductList;
