import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function CareDetail() {
  const router = useRouter();
  const {
    id,
    animal_name,
    animal_type,
    grooming_type,
    grooming_date,
    next_due_date,
    duration,
    groomer,
    notes,
  } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-slate-50 px-base w-full">
      <Text
        className="text-2xl text-center"
        style={{ fontFamily: "Lato-Bold" }}
      >
        Grooming Appointment
      </Text>
      <Text
        className="text-base text-center mb-4"
        style={{ fontFamily: "Lato-Regular" }}
      >
        Groom your friend with our grooming service
      </Text>

      <View className="flex-1 items-center border-t border-gray-200">
        <View className="items-center">
          <View className="flex-row items-center mb-4">
            <MaterialIcons
              name="pets"
              size={18}
              color="black"
              className="mr-2 mb-2"
            />
            <Text
              className="text-lg border-b border-gray-200 py-2 mb-2"
              style={{ fontFamily: "Lato-Bold" }}
            >
              {animal_name} • {animal_type}
            </Text>
          </View>
          <View className="flex-row items-center justify-between w-full">
            <Text className="text-base" style={{ fontFamily: "Lato-Bold" }}>
              Grooming Date
            </Text>
            <Text className="text-base" style={{ fontFamily: "Lato-Bold" }}>
              {grooming_date}
            </Text>
          </View>
          <View className="flex-row items-center justify-between w-full mt-2">
            <Text className="text-base" style={{ fontFamily: "Lato-Bold" }}>
              Grooming Type
            </Text>
            <Text className="text-base" style={{ fontFamily: "Lato-Bold" }}>
              {grooming_type}
            </Text>
          </View>
          <View className="flex-row items-center justify-between w-full mt-2">
            <Text className="text-base" style={{ fontFamily: "Lato-Bold" }}>
              Duration
            </Text>
            <Text className="text-base" style={{ fontFamily: "Lato-Bold" }}>
              {duration}
            </Text>
          </View>
          <View className="flex-row items-center justify-between w-full mt-2">
            <Text className="text-base" style={{ fontFamily: "Lato-Bold" }}>
              Groomer
            </Text>
            <Text className="text-base" style={{ fontFamily: "Lato-Bold" }}>
              {groomer}
            </Text>
          </View>
        </View>
        <View className="border-b border-gray-200 w-full mt-2 p-2" />
        <View className="w-full mt-4">
          <Text className="text-base mb-4" style={{ fontFamily: "Lato-Bold" }}>
            Notes
          </Text>
          <Text
            className="text-base text-justify"
            style={{ fontFamily: "Lato-Italic" }}
          >
            {notes}
          </Text>
        </View>
        <TouchableOpacity
          className="rounded-xl p-4 mt-10 w-full bg-primary"
          onPress={() => {
            router.back();
          }}
        >
          <Text
            className="text-white text-center"
            style={{ fontFamily: "Lato-Bold" }}
          >
            Back
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
