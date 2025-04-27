import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const rand3Number = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const dummyDoctor = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Veterinarian",
    rating: 4.5,
    experience: 10,
    location: "New York",
    availability: "Available",
    image: `https://picsum.photos/id/${rand3Number(1, 100)}/200/200`,
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialty: "Veterinarian",
    rating: 4.7,
    experience: 8,
    location: "Los Angeles",
    availability: "Not Available",
    image: `https://picsum.photos/id/${rand3Number(1, 100)}/200/200`,
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    specialty: "Veterinarian",
    rating: 4.9,
    experience: 12,
    location: "Chicago",
    availability: "Available",
    image: `https://picsum.photos/id/${rand3Number(1, 100)}/200/200`,
  },
];

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-50 px-base relative">
      <FlatList
        data={dummyDoctor}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <LinearGradient
            colors={["#BF9264", "#ffffff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1.5 }}
            style={{
              borderRadius: 16,
              marginBottom: 16,
              marginHorizontal: 8, // seperti m-2
              padding: 4, // seperti p-1 untuk inner padding
            }}
          >
            <View className="flex-row p-4 m-2 rounded-lg gap-2">
              <Image
                source={{ uri: item.image }}
                className="w-28 h-28 rounded-lg"
                resizeMode="cover"
              />
              <View className="flex-col gap-1">
                <Text
                  style={{
                    fontFamily: "Lato-Bold",
                    fontSize: 14,
                    color: "#000",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontFamily: "Lato-Italic",
                    fontSize: 12,
                    color: "#000",
                  }}
                >
                  {item.specialty}
                </Text>
                <Text
                  style={{
                    fontFamily: "Lato-Bold",
                    fontSize: 12,
                    color: "#000",
                  }}
                >
                  Rating: {item.rating} ({item.experience} years)
                </Text>
                <Text
                  style={{
                    fontFamily: "Lato-Bold",
                    fontSize: 12,
                    color: "#000",
                  }}
                >
                  Location: {item.location}
                </Text>
                <Text
                  className={item.availability === "Available" ? "text-green-500" : "text-red-500"}
                  style={{
                    fontFamily: "Lato-Bold",
                    fontSize: 12,
                    padding: 4,
                    borderRadius: 8,
                    width: 100,
                    // textAlign: "center",
                  }}
                >
                  {item.availability}
                </Text>
              </View>
              <TouchableOpacity
                className="border border-secondary rounded-lg p-2 absolute right-4 top-4"
                onPress={() => {
                  // Handle button press
                }}
              >
                <FontAwesome5 name="whatsapp" size={24} color="#6F826A" />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="p-4 mb-4">
            <Text className="text-xl font-bold">Available Doctors</Text>
            <Text className="text-gray-600">
              Select a doctor for your pet's needs
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Index;
