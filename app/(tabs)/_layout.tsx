import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants/icons";

const TabIcon = ({ focused, icon, iconFilled }: any) => {
  if (focused) {
    return (
      <View className="bg-[#f6dec7] rounded-2xl w-12 h-12 justify-center items-center mt-12">
        <Image
          source={iconFilled}
          className="size-8"
          style={{ tintColor: "#BF9264" }}
        />
      </View>
    );
  }

  return (
    <View className="rounded-2xl w-12 h-12 justify-center items-center mt-12">
      <Image
        source={icon}
        className="size-8"
        style={{ tintColor: "#85857e" }}
      />
    </View>
  );
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
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
          position: "absolute",
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} iconFilled={icons.homeFilled} />
          ),
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.basket} iconFilled={icons.basketFilled} />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.chat} iconFilled={icons.chatFilled} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.profile} iconFilled={icons.profileFilled} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
