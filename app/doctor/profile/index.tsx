import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { randomNumber } from "@/utils/random-number";
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import IconButton from "@/components/IconButton";
import { useRouter } from "expo-router";
import AnimalCard from "@/components/AnimalCard";

const rand = () => randomNumber();

const Index = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-slate-50 py-base">
      <View className="items-center">
        <View className="items-center mb-4">
          <Image
            source={{
              uri: `https://picsum.photos/200/300?random=${rand()}`,
            }}
            className="w-24 h-24 rounded-full shadow-xl mb-4 border-2 border-white"
            resizeMode="cover"
          />
          <Text
            className="text-xl text-black"
            style={{ fontFamily: "Lato-Bold" }}
          >
            Alfiansah Erik Sugiarto
          </Text>
          <Text
            className="text-base text-gray-500"
            style={{ fontFamily: "Lato-Regular" }}
          >
            alfiansaherik.s@gmail.com
          </Text>
          <View className="flex-row justify-between gap-4 items-center bg-white p-4 rounded-lg mt-4">
          <MaterialCommunityIcons
            name="store-marker-outline"
            size={16}
            color="#BF9264"
          />
            <Text className="text-base text-gray-500">
              XYZ Vet Clinic, Sleman
            </Text>
            <TouchableOpacity>
            <Octicons name="arrow-switch" size={16} color="#BF9264" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="flex-1 px-base">
        {/* Animal cards */}
        <View className="items-center mb-4">{/* <AnimalCard /> */}</View>

        <View className="bg-white rounded-lg mb-4">
          <TouchableOpacity onPress={() => console.log("My Profile")}>
            <View className="flex-row border-b border-gray-200 items-center justify-between p-4">
              <Text
                className="text-lg text-black"
                style={{ fontFamily: "Lato-Bold" }}
              >
                My Profile
              </Text>

              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="#BF9264"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Edit Profile")}>
            <View className="flex-row items-center border-b border-gray-200 justify-between p-4">
              <Text
                className="text-lg text-black"
                style={{ fontFamily: "Lato-Bold" }}
              >
                Change Password
              </Text>

              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="#BF9264"
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View className="bg-white rounded-lg mb-4">
            <View className="flex-row items-center justify-between p-4">
              <Text
                className="text-lg text-black"
                style={{ fontFamily: "Lato-Bold" }}
              >
                Logout
              </Text>

              <MaterialIcons name="logout" size={24} color="#BF9264" />
              {/* <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="#BF9264"
              /> */}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Index;
