import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const petList = [
  {
    id: 1,
    name: "Buddy",
    type: "Dog",
    breed: "Golden Retriever",
    age: 3,
    ownerName: "John Doe",
    appointmentDate: "2023-10-01",
    image: `https://picsum.photos/id/1/200/200`,
  },
  {
    id: 2,
    name: "Mittens",
    type: "Cat",
    breed: "Siamese",
    age: 2,
    ownerName: "Jane Smith",
    appointmentDate: "2023-10-02",
    image: `https://picsum.photos/id/2/200/200`,
  },
  {
    id: 3,
    name: "Bunny",
    type: "Rabbit",
    breed: "Dutch",
    age: 1,
    ownerName: "Lisa White",
    appointmentDate: "2023-10-05",
    image: `https://picsum.photos/id/3/200/200`,
  },
  {
    id: 4,
    name: "Bear",
    type: "Bearys",
    breed: "Dutch",
    age: 1,
    ownerName: "Lisa White",
    appointmentDate: "2023-10-05",
    image: `https://picsum.photos/id/3/200/200`,
  },
  // {
  //   id: 5,
  //   name: "Chicken",
  //   type: "Poultry",
  //   breed: "Dutch",
  //   age: 1,
  //   ownerName: "Lisa White",
  //   appointmentDate: "2023-10-05",
  //   image: `https://picsum.photos/id/3/200/200`,
  // },
];

const PetsPage = () => {
  const router = useRouter();
  const [petCounter, setPetCounter] = useState(0);

  useEffect(() => {
    const count = petList.length;
    setPetCounter(count);
  }, [petCounter]);

  const handlePress = ({ ...item }) => {
    router.push({
      pathname: "/(tabs)/appointments/care",
      params: {
        id: item.id,

      },
    });
  };
  return (
    <SafeAreaView className="flex-1 bg-slate-50 py-base">
      <View className="flex-row items-center justify-center py-base">
        <View className="flex-1 items-center mb-4">
          <Text
            className="text-xl text-black"
            style={{ fontFamily: "Lato-Bold" }}
          >
            My Pets
          </Text>
        </View>
        <View className="absolute left-0">
          <BackButton />
        </View>
      </View>

      <FlatList
        data={petList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="flex-row bg-white rounded-lg p-4 mb-4">
            <TouchableOpacity
              className="flex-row flex-1"
              onPress={() => handlePress(item)}
            >
              <Image
                source={{ uri: item.image }}
                className="w-20 h-20 rounded-lg mr-4"
                resizeMode="cover"
              />
              <View className="">
                <Text className="text-lg" style={{ fontFamily: "Lato-Bold" }}>
                  {item.name}
                </Text>
                <Text style={{ fontFamily: "Lato" }}>{item.type}</Text>
                <Text style={{ fontFamily: "Lato" }}>{item.breed}</Text>
                <Text style={{ fontFamily: "Lato" }}>{item.age} years old</Text>
              </View>
            </TouchableOpacity>
            <View className="items-center gap-2">
              <TouchableOpacity
                className="bg-[#BF9264] rounded-xl p-2"
                onPress={() => 
                  router.push({
                    pathname: "/(tabs)/profile/pets/edit/[id]",
                    params: {
                      id: item.id,
                      imageParams: item.image,
                    }
                  })
                }
              >
                <MaterialIcons
                  name="edit"
                  size={18}
                  color="white"
                  style={{ fontFamily: "Lato" }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-[#BF9264] rounded-xl p-2"
                onPress={() => {}}
              >
                <MaterialIcons
                  name="delete"
                  size={18}
                  color="white"
                  style={{ fontFamily: "Lato" }}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        className="px-base"
        ListFooterComponent={() =>
          //   hide button if pet already 5
          petCounter >= 5 ? null : (
            <TouchableOpacity
              className="bg-[#BF9264] rounded-lg p-4 mb-4"
              onPress={() => {
                router.push("/(tabs)/profile/pets/create");
              }}
            >
              <Text
                className="text-white text-center"
                style={{ fontFamily: "Lato-Bold" }}
              >
                Add New Pet
              </Text>
            </TouchableOpacity>
          )
        }
      />
    </SafeAreaView>
  );
};

export default PetsPage;
