import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { useGlobalStore, usePetStore } from "@/stores";

const AnimalCard = () => {
  const userId = useGlobalStore((state) => state.userId);
  const token = useGlobalStore((state) => state.authToken);
  const pet = usePetStore((state) => state.pet);

  useEffect(() => {
    const fetchPets = async () => {
      if (userId && token) {
        try {
          await usePetStore.getState().fetchPets(userId.toString(), token);
        } catch (error) {
          console.error("Failed to fetch pet data:", error);
        }
      }
    };

    fetchPets();
  }, [userId, token]);

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
      {pet.map((animal) => (
        <View key={animal.id} className="relative w-[250px] mr-4">
          <View className="bg-[#BF9264] rounded-2xl justify-center items-center h-[250px]">
            <Image
              source={images.dog3d}
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
                Yogyakarta, ID
              </Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default AnimalCard;
