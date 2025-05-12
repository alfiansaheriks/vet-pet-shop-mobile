import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants/icons";
import AnimalType from "@/components/AnimalType";
import { images } from "@/constants/images";
import ProductType from "@/components/ProductType";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const data = [
  { id: 1, name: "Food", image: images.food3d },
  // { id: 2, name: "Dog", image: images.dog2d },
  // { id: 3, name: "Rabbit", image: images.rabbit2d },
  { id: 4, name: "Medicine", image: images.medicine3d },
  { id: 5, name: "Care", image: images.petcare3d },
  // { id: 6, name: "Fish", image: images.fish2d },
];

const Index = () => {
  const [activeType, setIsActiveType] = useState("Pet");

  return (
    <SafeAreaView className="flex-1 bg-slate-50 justify-center items-center">
      <View className="px-base">
        <Text
          className="text-black text-xl mt-4"
          style={{
            fontFamily: "Lato-Bold",
            fontSize: 20,
            marginTop: 30,
          }}
        >
          Products
        </Text>
        <Text
          className="text-black text-base mt-2"
          style={{
            fontFamily: "Lato-Regular",
            fontSize: 14,
          }}
        >
          Find the best products for your pet
        </Text>
        <View className="absolute top-0 right-0 mr-4 mt-12">
          <TouchableOpacity onPress={() => router.push("/products/cart")}>
            <MaterialIcons name="add-shopping-cart" size={30} color="#BF9264" />
          </TouchableOpacity>
        </View>

        <View className="flex-col mt-4 gap-4">
          <View className="flex-row gap-8 w-full justify-center items-center mt-4">
            {/* TODO: Search Icons Library for animals */}
            <AnimalType
              icons="pets"
              name="Pet"
              isActiveType={activeType === "Pet"}
              onPress={() => setIsActiveType("Pet")}
            />
            <AnimalType
              icons="pets"
              name="Poultry"
              isActiveType={activeType === "Poultry"}
              onPress={() => setIsActiveType("Poultry")}
            />
            <AnimalType
              icons="pets"
              name="Aquatic"
              isActiveType={activeType === "Aquatic"}
              onPress={() => setIsActiveType("Aquatic")}
            />
          </View>
        </View>

        <View className="flex-1 mt-10">
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            className="rounded-xl"
            columnWrapperStyle={{
              justifyContent: "space-between",
              marginBottom: 10,
              gap: 10,
            }}
            contentContainerStyle={{ paddingHorizontal: 0, paddingBottom: 80 }}
            renderItem={({ item }) => (
              <ProductType
                images={item.image}
                name={item.name}
                isActiveType={activeType === item.name}
                onPress={() => router.push(`/products/list/[category]`)}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
