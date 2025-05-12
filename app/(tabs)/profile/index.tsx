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
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { randomNumber } from "@/utils/random-number";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import IconButton from "@/components/IconButton";
import { useFocusEffect, useRouter } from "expo-router";
import AnimalCard from "@/components/AnimalCard";
import { useAuth } from "@/context/AuthContext";
import { logout as logoutAPI } from "@/lib/api/auth";
import { getDataUser } from "@/lib/api/profile";
import { User } from "@/lib/api/profile/type";
import { useUserStore } from "@/stores/userStore";

const rand = () => randomNumber();

const Index = () => {
  const router = useRouter();
  const auth = useAuth();
  if (!auth) {
    throw new Error("Auth context is not available");
  }

  const user = useUserStore((state) => state.user);

  const { authToken, userId } = auth;
  if (!authToken) {
    router.replace("/(auth)/login");
  }

  useFocusEffect(
    useCallback(() => {
      console.log("token: ", authToken);
      console.log("refresh token: ", auth.refreshToken);
      const id = userId;
      if (!id) return;

      const fetchUser = async () => {
        try {
          await useUserStore.getState().fetchUser(id);
          // setUser(user);
          // console.log("✅ User data refreshed on screen focus");
          console.log("user: ", user);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      };

      fetchUser();
    }, [authToken])
  );

  const { logout } = auth;

  const handleLogout = async () => {
    try {
      if (auth.refreshToken) {
        await logoutAPI({ refresh_token: auth.refreshToken });
        console.log("Request logout: ", { refresh_token: auth.refreshToken });
        await logout();
        router.replace("/(auth)/login");
      } else {
        console.error("Refresh token is null");
      }
      // router.replace("/(auth)/login");
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

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
            {user?.name}
          </Text>
          <Text
            className="text-base text-gray-500"
            style={{ fontFamily: "Lato-Regular" }}
          >
            {user?.email}
          </Text>
        </View>
      </View>

      <View className="flex-1 px-base">
        {/* Animal cards */}
        <View className="items-center mb-4">
          <AnimalCard />
        </View>

        <View className="bg-white rounded-lg mb-4">
          <TouchableOpacity
            onPress={() => router.push(`/(tabs)/profile/edit/${user?.ID}`)}
          >
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
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/profile/change-password/[id]")}
          >
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
          <TouchableOpacity onPress={() => router.push("/(tabs)/profile/pets")}>
            <View className="flex-row items-center justify-between p-4">
              <Text
                className="text-lg text-black"
                style={{ fontFamily: "Lato-Bold" }}
              >
                Pets
              </Text>

              {/* <MaterialIcons name="edit" size={24} color="#BF9264" /> */}
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="#BF9264"
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleLogout}>
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
