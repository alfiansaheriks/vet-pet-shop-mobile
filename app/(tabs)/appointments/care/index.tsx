import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { randomNumber } from "@/utils/random-number";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import IconButton from "@/components/IconButton";
import { useRouter } from "expo-router";

const rand = () => randomNumber();

const petList = [
  {
    id: 1,
    name: "Buddy",
    type: "Dog",
    breed: "Golden Retriever",
    age: 3,
    ownerName: "John Doe",
    appointmentDate: "2023-10-01",
    image: `https://picsum.photos/id/${rand()}/200/200`,
  },
  {
    id: 2,
    name: "Mittens",
    type: "Cat",
    breed: "Siamese",
    age: 2,
    ownerName: "Jane Smith",
    appointmentDate: "2023-10-02",
    image: `https://picsum.photos/id/${rand()}/200/200`,
  },
  {
    id: 3,
    name: "Bunny",
    type: "Rabbit",
    breed: "Dutch",
    age: 1,
    ownerName: "Lisa White",
    appointmentDate: "2023-10-05",
    image: `https://picsum.photos/id/${rand()}/200/200`,
  },
];

const activityHistoryMap: Record<
  number,
  { id: number; title: string; date: string; notes: string }[]
> = {
  1: [
    {
      id: 1,
      title: "Vaccination",
      date: "2023-09-15",
      notes: "Rabies & DHPP vaccine given",
    },
    {
      id: 2,
      title: "Grooming",
      date: "2023-08-10",
      notes: "Full grooming session",
    },
  ],
  2: [
    {
      id: 1,
      title: "Checkup",
      date: "2023-09-01",
      notes: "Ear infection treatment",
    },
  ],
  3: [
    {
      id: 1,
      title: "Grooming",
      date: "2023-09-20",
      notes: "Nail trim and fur brushing",
    },
  ],
};

const PetDetail = () => {
    const router = useRouter();
  const [selectedPetId, setSelectedPetId] = useState<number>(petList[0].id);
  const [showPetModal, setShowPetModal] = useState(false);

  const selectedPet = petList.find((p) => p.id === selectedPetId)!;
  const activityHistory = activityHistoryMap[selectedPetId] || [];

  const handlePress = (route: any) => {
    router.push(route);
  }
  

  return (
    <SafeAreaView className="flex-1 bg-white py-base">
      <LinearGradient
        colors={["#BF9264", "#ffffff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "50%",
          zIndex: -1,
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
        }}
      />

      <View className="items-center">
        <TouchableOpacity
          className="flex-row items-center justify-center mb-4"
          onPress={() => setShowPetModal(true)}
        >
          <Text
            className="text-xl text-black mr-1"
            style={{ fontFamily: "Lato-Bold" }}
          >
            {selectedPet.name}
          </Text>
          <Ionicons name="chevron-down" size={20} color="#000" />
        </TouchableOpacity>

        {/* Modal Dropdown */}
        <Modal visible={showPetModal} transparent animationType="fade">
          <Pressable
            className="flex-1 bg-black/30 justify-center items-center px-4"
            onPressOut={() => setShowPetModal(false)}
          >
            <View className="bg-white rounded-xl p-4 w-full max-w-md shadow-md">
              <Text className="text-lg font-bold mb-3 text-center">
                Select Pet
              </Text>
              {petList.map((pet) => (
                <TouchableOpacity
                  key={pet.id}
                  onPress={() => {
                    setSelectedPetId(pet.id);
                    setShowPetModal(false);
                  }}
                  className={`flex-row items-center mb-3 p-2 rounded-lg ${
                    pet.id === selectedPetId ? "bg-primary" : "bg-white"
                  }`}
                >
                  <Image
                    source={{ uri: pet.image }}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <View>
                    <Text
                      className={`${
                        pet.id === selectedPetId ? "text-black" : "text-black"
                      }`}
                      style={{ fontFamily: "Lato-Bold" }}
                    >
                      {pet.name}
                    </Text>
                    <Text
                      className={`${
                        pet.id === selectedPetId ? "text-black" : "text-black"
                      } text-sm`}
                      style={{ fontFamily: "Lato-Italic" }}
                    >
                      {pet.type}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </Pressable>
        </Modal>
        <View className="items-center mb-4">
          <Image
            source={{ uri: selectedPet.image }}
            className="w-24 h-24 rounded-full shadow-xl mb-4"
            resizeMode="cover"
          />
          <Text
            className="text-lg font-semibold text-black"
            style={{ fontFamily: "Lato-Bold" }}
          >
            {selectedPet.type} • {selectedPet.breed}
          </Text>
          <Text
            className="text-sm text-black"
            style={{ fontFamily: "Lato-Bold" }}
          >
            Age: {selectedPet.age} years
          </Text>
          <View className="flex-row items-center mt-4 gap-4">
              <IconButton
                name="content-cut"
                size={24}
                onPress={() => {
                    handlePress(`/appointments/care/grooming/${selectedPet.id}`);
                }}
                label="Grooming"
                />
                <IconButton
                name="vaccines"
                size={24}
                onPress={() => {
                    handlePress(`/appointments/care/vaccination/${selectedPet.id}`);
                }}
                label="Vaccination"
                />
          </View>
        </View>
      </View>

      {/* Detail + History */}
      <View className="flex-1 items-center bg-white rounded-3xl shadow-sm">
        <FlatList
          className="bg-white mt-4 w-full"
          data={activityHistory}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="p-4 rounded-lg mb-2 border-b border-gray-200">
              <Text className="text-lg font-bold">{item.title}</Text>
              <Text className="text-sm text-gray-500">{item.date}</Text>
              <Text className="text-sm">{item.notes}</Text>
            </View>
          )}
          contentContainerStyle={{
            paddingBottom: 80,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default PetDetail;
