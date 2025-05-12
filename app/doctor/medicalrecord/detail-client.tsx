import {
  View,
  Text,
  FlatList,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/BackButton";

const petDetailperId = [
  {
    id: 1,
    petName: "Bixxy",
    age: 2,
    ownerId: 1,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    petName: "Max",
    age: 3,
    ownerId: 1,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    petName: "Bella",
    age: 4,
    ownerId: 2,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    petName: "Charlie",
    age: 5,
    ownerId: 2,
    image: "https://picsum.photos/200/300",
  },
];

const DetailClient = () => {
  const router = useRouter();
  const { id, age, name, petName } = useLocalSearchParams();
  const idOwner = Number(id);

  const petsPerId = petDetailperId.filter((pet) => pet.ownerId === idOwner);
  return (
    <SafeAreaView className="flex-1 bg-slate-50 px-base">
      <FlatList
        data={petsPerId}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="bg-white p-4 rounded-lg border border-gray-200 mb-4"
            onPress={() =>
              router.push({
                pathname: "/doctor/medicalrecord/detail-pet",
                params: {
                  id: item.id,
                },
              })
            }
          >
            <Text
              className="text-lg font-semibold"
              style={{ fontFamily: "Lato-Bold" }}
            >
              {item.petName}
            </Text>
            <Text
              className="text-gray-500"
              style={{ fontFamily: "Lato-Regular" }}
            >
              Age: {item.age}
            </Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <View className="flex-row justify-between py-base">
            <View className="">
              <BackButton />
            </View>
            <View className="">
              <Text className="text-2xl" style={{ fontFamily: "Lato-Bold" }}>
                {name}
              </Text>
              <Text
                className="text-gray-500"
                style={{ fontFamily: "Lato-Regular" }}
              >
                Age: {age}
              </Text>
              <Text
                className="text-gray-500"
                style={{ fontFamily: "Lato-Regular" }}
              >
                Pet Name: {petName}
              </Text>
            </View>

            <Image
              source={{ uri: "https://picsum.photos/200/300" }}
              className="w-20 h-20 rounded-full ml-4"
              //   style={{ resizeMode: "cover" }}
            />
          </View>
        }
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Text
              className="text-gray-500"
              style={{ fontFamily: "Lato-Regular" }}
            >
              No pets found for this owner.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default DetailClient;
