import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import React from "react";
import { Redirect, Tabs } from "expo-router";
import { icons } from "@/constants/icons";
import { MaterialIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/context/AuthContext";

const TabIcon = ({ focused, icon, iconFilled }: any) => {
  if (focused) {
    return (
      <View className="bg-[#f6dec7] rounded-2xl w-12 h-12 justify-center items-center mt-12">
        <FontAwesome5
          name={icon}
          size={28}
          color="#BF9264"
          // borderRadius={2}
          // style={{ tintColor: "#ffffff" }}
        />
      </View>
    );
  }

  return (
    <View className="rounded-2xl w-12 h-12 justify-center items-center mt-12 ">
      <FontAwesome5
        name={icon}
        size={24}
        color="#85857e"
        // borderRadius={2}
        // style={{ tintColor: "#ffffff" }}
      />
    </View>
  );
};

const _Layout = () => {
  const auth = useAuth();
  if (!auth) {
    throw new Error("Auth context is not available");
  }

  const {authToken, refreshToken, loading} = auth;

  if (loading) return null;

  if (!authToken && !refreshToken) {
    return <Redirect href="/(auth)/login" />;
  }
  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderRadius: 0,
          marginHorizontal: 0,
          marginBottom: 0,
          paddingLeft: 50,
          paddingRight: 50,
          height: 100,
          // position: "absolute",
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="home" />
          ),
          tabBarButton: (props) => (
            <Pressable {...props} android_ripple={null} />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="shopping-cart" />
          ),
          tabBarButton: (props) => (
            <Pressable {...props} android_ripple={null} />
          ),
        }}
      />

      <Tabs.Screen
        name="appointments"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="book-medical" />
          ),
          tabBarButton: (props) => (
            <Pressable {...props} android_ripple={null} />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="rocketchat" />
          ),
          tabBarButton: (props) => (
            <Pressable {...props} android_ripple={null} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="user-alt" />
          ),
          tabBarButton: (props) => (
            <Pressable {...props} android_ripple={null} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
