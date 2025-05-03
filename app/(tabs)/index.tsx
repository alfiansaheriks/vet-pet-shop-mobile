import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { LinearGradient } from "expo-linear-gradient";
import AnimalCard from "@/components/AnimalCard";
import { SafeAreaView } from "react-native-safe-area-context";

const Features = ({ icon, title }: HomeFeatureProps) => {
  return (
    <>
      <TouchableOpacity className="flex-1 h-16 bg-white rounded-lg flex-row justify-start items-center px-2">
        <View className="bg-gray-100 w-10 h-10 rounded-lg">
          <Image
            source={icon}
            className="size-6 ml-2 mt-2"
            style={{ tintColor: "#BF9264" }}
          />
        </View>
        <Text className="text-black font-semibold text-base px-4" style={{
          fontFamily: "Lato-Regular",
        }}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

const TabsIndex = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-50 justify-center items-center">
        <ScrollView
          className="bg-slate-50"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100,
            paddingTop: 55,
          }}
        >
          <View className="px-base">
            <View className="flex-row bg-transparent rounded-xl justify-between w-full">
              <View className="w-16 h-16 bg-[#f6dec7] rounded-xl justify-center items-center">
                <Image source={images.cat3d} className="size-16" />
              </View>
              <View className="flex-row w-1/2 bg-transparent rounded-xl justify-center items-center gap-1">
                <Image
                  source={icons.location}
                  className="size-8"
                  style={{ tintColor: "#BF9264" }}
                />
                <Text className="text-black font-bold" style={{
                  fontFamily: "Lato-Regular",
                }}>Yogyakarta,ID</Text>
                <Image
                  source={icons.arrowDown}
                  className="size-8"
                  style={{ tintColor: "#BF9264" }}
                />
              </View>
              <View className="bg-white rounded-2xl w-12 h-12 justify-center items-center mt-2">
                <Image
                  source={icons.notification}
                  className="size-6"
                  style={{ tintColor: "#9ca3af" }}
                />
              </View>
            </View>

            <View className="flex-row w-full items-center gap-4 mt-10">
              <View className="flex-1 rounded-xl bg-white px-4">
                <SearchBar placeholder="Search for products" />
              </View>

              <View className="rounded-2xl w-12 h-12 justify-center items-center">
                <LinearGradient
                  colors={["#f6dec7", "#BF9264"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={{ borderRadius: 9, padding: 15 }}
                >
                  <Image
                    source={icons.discover}
                    className="size-6"
                    style={{ tintColor: "#ffffff" }}
                  />
                </LinearGradient>
              </View>
            </View>

            <View className="flex-row justify-between items-center mt-10">
              <Text className="text-black font-bold text-2xl">Features</Text>
            </View>
            <View className="flex-row mt-1">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingBottom: 10,
                  paddingTop: 10,
                  gap: 10,
                }}
                className="rounded-xl"
              >
                <Features icon={icons.basket} title="Products" />
                <Features icon={icons.chat} title="Schedule" />
                <Features icon={icons.profile} title="Profile" />
              </ScrollView>
            </View>

            <View className="flex-row justify-between items-center mt-10">
              <Text className="text-black font-bold text-2xl" style={{
                fontFamily: "Lato-Regular",
              }}>Discover</Text>
              <Text className="text-[#BF9264] font-base text-lg" style={{
                fontFamily: "Lato-Regular",
              }}>See All</Text>
            </View>
            <View className="w-full mt-5">
              <AnimalCard />
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default TabsIndex;
