import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const animalData = [
  {
    id: 1,
    name: "Golden Retriever",
    location: "Jakarta, ID",
    image: images.dog3d,
  },
  {
    id: 2,
    name: "Persian Cat",
    location: "Bandung, ID",
    image: images.cat3d,
  },
  {
    id: 3,
    name: "Rabbit",
    location: "Yogyakarta, ID",
    image: images.cat3d,
  },
];

const AnimalCard = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="rounded-lg"
      contentContainerStyle={{
        maxHeight: 1024,
        maxWidth: 1024,
        paddingHorizontal: 0,
      }}
    >
      {animalData.map((animal) => (
        <View key={animal.id} className="relative w-[250px] mr-4">
          <View className="bg-[#BF9264] rounded-2xl justify-center items-center h-[250px]">
            <Image
              source={animal.image}
              className="size-60"
              resizeMode="contain"
            />
          </View>

          <View className="absolute bottom-0 h-24 bg-white w-full rounded-2xl justify-center items-start px-4 py-4">
            <Text
              className="text-black font-semibold text-lg"
              style={{ fontFamily: "Lato-Bold" }}
            >
              {animal.name}
            </Text>
            <View className="flex-row items-center gap-1">
              <Image
                source={icons.location}
                className="size-4 mt-1"
                style={{ tintColor: "#BF9264" }}
              />
              <Text className="text-gray-300 font-semibold text-sm mt-1" style={{ fontFamily: "Lato" }}>
                {animal.location}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default AnimalCard;
