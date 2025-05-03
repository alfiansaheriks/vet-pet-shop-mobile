import {
  View,
  Text,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import BackButton from "@/components/BackButton";
import { useRouter } from "expo-router";

export const branches = [
  {
    id: 1,
    name: "Vet Petshop Malioboro",
    address: "Jl. Malioboro No.1, Yogyakarta",
    city: "Yogyakarta",
    latitude: -7.7925,
    longitude: 110.3657,
    distance: 1.2, // km (dummy)
    isOpen: true,
    phone: "081234567890",
    rating: 4.5,
    ratingCount: 120,
  },
  {
    id: 2,
    name: "Vet Petshop Jakal",
    address: "Jl. Kaliurang KM 7, Sleman",
    city: "Sleman",
    latitude: -7.7475,
    longitude: 110.3888,
    distance: 4.5,
    isOpen: false,
    phone: "081234567891",
    rating: 4.0,
    ratingCount: 80,
  },
  {
    id: 3,
    name: "Vet Petshop Bantul",
    address: "Jl. Parangtritis No.88, Bantul",
    city: "Bantul",
    latitude: -7.9021,
    longitude: 110.339,
    distance: 7.8,
    isOpen: true,
    phone: "081234567892",
    rating: 4.8,
    ratingCount: 200,
  },
];

const BookAppointment = () => {
  const router = useRouter();
  const handlePress = (id: string) => {
    router.push(`/(tabs)/appointments/veterinary/book/book-schedule/${id}`);
  };
  return (
    <SafeAreaView className="flex-1 bg-white" style={{ padding: 16 }}>
      <FlatList
        data={branches}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
          <>
          <View className="items-center mb-4">
            {/* <BackButton /> */}
            <Text
              className="text-2xl font-bold"
              style={{ fontFamily: "Lato-Bold" }}
            >
              Veterinary Branches
            </Text>
            <Text className="text-gray-600" style={{ fontFamily: "Lato-Bold" }}>
              Find the nearest veterinary branches
            </Text>
          </View>
          <View className="absolute left-0">
            <BackButton />
          </View>
          </>
        )}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <Text
              className="text-lg font-bold"
              style={{ fontFamily: "Lato-Bold" }}
            >
              {item.name}
            </Text>
            <Text className="text-gray-600" style={{ fontFamily: "Lato-Bold" }}>
              {item.address}
            </Text>
            <Text className="text-gray-600" style={{ fontFamily: "Lato-Bold" }}>
              {item.city}
            </Text>
            <Text className="text-gray-600" style={{ fontFamily: "Lato-Bold" }}>
              Distance: {item.distance} km
            </Text>
            <Text className="text-gray-600" style={{ fontFamily: "Lato-Bold" }}>
              Phone: {item.phone}
            </Text>
            <Text
              className={`text-sm ${
                item.isOpen ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.isOpen ? "Open Now" : "Closed"}
            </Text>
            <View className="flex-row justify-between mt-2">
              <View className="flex-row items-center">
                <MaterialIcons name="star" size={20} color="#BF9264" />
                <Text
                  className="text-gray-600"
                  style={{ fontFamily: "Lato-Bold" }}
                >
                  {item.rating} ({item.ratingCount} reviews)
                </Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  handlePress(item.id.toString())
                }
                className="rounded-lg p-2 mt-2"
                disabled={!item.isOpen}
                style={{ backgroundColor: item.isOpen ? "#BF9264" : "#ccc" }}
              >
                <Text
                  className="text-white text-center"
                  style={{ fontFamily: "Lato-Bold" }}
                >
                  Book Appointment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 32,
        }}
      />
    </SafeAreaView>
  );
};

export default BookAppointment;
