import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import IconButton from "@/components/IconButton";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const historyAppointments = [
  {
    id: 1,
    date: "2023-10-01",
    time: "10:00 AM",
    petName: "Buddy",
    service: "Vaccination",
    status: "Completed",
  },
  {
    id: 2,
    date: "2023-09-15",
    time: "02:00 PM",
    petName: "Max",
    service: "Check-up",
    status: "Completed",
  },
  {
    id: 3,
    date: "2023-08-20",
    time: "11:30 AM",
    petName: "Bella",
    service: "Grooming",
    status: "Completed",
  },
];

const Index = () => {
  const router = useRouter();
  const handlePress = (route: any) => {
    router.push(route);
  };
  return (
    <SafeAreaView className="flex-1 bg-primary py-base">
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
      <View className="items-center mb-6">
        <View className="flex-row items-center gap-x-2">
          <MaterialIcons name="location-pin" size={24} color="#000" />
          <Text
            className="text-2xl font-bold text-black"
            style={{ fontFamily: "Lato-Bold" }}
          >
            Yogyakarta, ID
          </Text>
        </View>
        <Text className="text-black" style={{ fontFamily: "Lato-Bold" }}>
          Book your veterinary appointments here
        </Text>
        <View className="items-center mt-10">
          <IconButton
            name="add-task"
            size={24}
            onPress={() => {
              handlePress("appointments/veterinary/book");
            }}
            label="Book"
          />
        </View>
      </View>
      <View className="flex-1 items-center bg-white rounded-3xl shadow-sm">
        <FlatList
          data={historyAppointments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="bg-white py-base px-base rounded-lg border-b border-gray-200">
              <Text
                className="text-lg font-bold"
                style={{ fontFamily: "Lato-Bold" }}
              >
                {item.petName}
              </Text>
              <Text
                className="text-gray-600"
                style={{ fontFamily: "Lato-Bold" }}
              >
                {item.service}
              </Text>
              <Text
                className="text-gray-600"
                style={{ fontFamily: "Lato-Bold" }}
              >
                {item.date} - {item.time}
              </Text>
              <Text
                className={`text-sm ${
                  item.status === "Completed"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item.status}
              </Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ width: "100%" }}
          contentContainerStyle={{
            paddingBottom: 32,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
