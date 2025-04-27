import { View, Text, FlatList } from "react-native";
import React from "react";
import ServiceType from "@/components/ServiceType";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants/icons";
import { useRouter } from "expo-router";

const services = [
  {
    id: 1,
    title: "Veterinary",
    icon: "local-hospital",
    route: "appointments/veterinary",
  },
  {
    id: 2,
    title: "Consultation",
    icon: "chat",
    route: "appointments/call-doctor",
  },
  {
    id: 3,
    title: "Care",
    icon: "pets",
    route: "appointments/care",
  },
  {
    id: 5,
    title: "Medical Records",
    icon: "medical-information",
    route: "appointments/medical-records",
  },
];

const Index = () => {
  const router = useRouter();

  const handlePress = (route: any) => {
    router.push(route);
  };
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <FlatList
        data={services}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between", width: "100%" }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ServiceType
            icon={item.icon}
            title={item.title}
            onPress={() => handlePress(item.route)}
          />
        )}
        ListHeaderComponent={
          <View className="mt-4 mb-8 ">
            <Text
              className="text-black"
              style={{
                fontFamily: "Lato-Bold",
                fontSize: 20,
              }}
            >
              Services
            </Text>
            <Text
              className="text-black mt-2"
              style={{
                fontFamily: "Lato-Bold",
                fontSize: 14,
              }}
            >
              Choose the best service for your friend.
            </Text>
          </View>
        }
        ListFooterComponent={
          <View className="mt-6 border border-accent rounded-xl px-base py-4 bg-white">
            <Text
              className="text-primary text-center shadow-sm"
              style={{
                fontFamily: "Lato-Bold",
                fontSize: 14,
              }}
            >
              🎉 Care services are discounted by 20% for first-time customers
              until 29 days.
            </Text>
          </View>
        }
        contentContainerStyle={{
          paddingBottom: 80,
          paddingTop: 16,
          paddingHorizontal: 16,
        }}
      />
    </SafeAreaView>
  );
};

export default Index;
