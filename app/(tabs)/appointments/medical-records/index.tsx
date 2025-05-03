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

const medicalRecordsMap: Record<
  number,
  {
    id: number;
    date: string;
    complaint: string;
    diagnosis: string;
    doctor: string;
    clinic: string;
    notes: string;
  }[]
> = {
  1: [
    {
      id: 1,
      date: "2025-04-20",
      complaint: "Loss of appetite",
      diagnosis: "Gastrointestinal infection",
      doctor: "Dr. Rika",
      clinic: "PetCare Clinic",
      notes: "Prescribed antibiotics and vitamins",
    },
    {
      id: 2,
      date: "2025-03-03",
      complaint: "Itchy skin",
      diagnosis: "Food allergy",
      doctor: "Dr. Andi",
      clinic: "Healthy Paws",
      notes: "Recommended hypoallergenic diet",
    },
  ],
  2: [
    {
      id: 1,
      date: "2025-01-12",
      complaint: "Vomiting",
      diagnosis: "Mild stomach upset",
      doctor: "Dr. Lina",
      clinic: "Animal Health Center",
      notes: "Given antiemetic injection",
    },
  ],
  3: [
    {
      id: 1,
      date: "2025-02-18",
      complaint: "Limping",
      diagnosis: "Minor paw injury",
      doctor: "Dr. Samuel",
      clinic: "VetCare Services",
      notes: "Applied bandage and pain relief",
    },
  ],
};

const Index = () => {
  const router = useRouter();
  const [selectedPetId, setSelectedPetId] = useState<number>(petList[0].id);
  const [showPetModal, setShowPetModal] = useState(false);

  const selectedPet = petList.find((p) => p.id === selectedPetId)!;
  const medicalRecords = medicalRecordsMap[selectedPetId] || [];

  const handlePress = (route: any) => {
    router.push(route);
  };

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
        </View>
      </View>

      {/* Detail + History */}
      <View className="flex-1 items-center bg-white rounded-3xl shadow-sm">
        <FlatList
          className="bg-white mt-4 w-full"
          data={medicalRecords}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                console.log("Selected item:", item);
                // Contoh navigasi:
                // router.push({ pathname: "/medical-detail", params: item });
              }}
            >
              <View className="p-4 bg-white border-b border-gray-200 rounded-lg mb-3">
                <Text
                  className="text-sm text-gray-500"
                  style={{ fontFamily: "Lato-Regular" }}
                >
                  {item.date}
                </Text>
                <Text
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "Lato-Bold" }}
                >
                  {item.complaint}
                </Text>
                <Text
                  className="text-sm mb-1"
                  style={{ fontFamily: "Lato-Regular" }}
                >
                  Diagnosis: {item.diagnosis}
                </Text>
                <Text
                  className="text-sm text-gray-500"
                  style={{ fontFamily: "Lato-Regular" }}
                >
                  {item.doctor} – {item.clinic}
                </Text>
                <Text
                  className="text-sm mt-1"
                  style={{ fontFamily: "Lato-Regular" }}
                >
                  {item.notes}
                </Text>
              </View>
            </TouchableOpacity>
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

export default Index;
