import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import ServiceType from "@/components/ServiceType";
import Features from "@/components/Features";

const dummySchedule = [
  {
    id: 1,
    name: "Milo",
    owner: "John Doe",
    time: "09:00 AM",
    status: "waiting",
  },
  {
    id: 2,
    name: "Bella",
    owner: "Jane Smith",
    time: "10:00 AM",
    status: "waiting",
  },
  {
    id: 3,
    name: "Charlie",
    owner: "Michael Johnson",
    time: "11:00 AM",
    status: "waiting",
  },
  {
    id: 4,
    name: "Max",
    owner: "Emily Davis",
    time: "12:00 PM",
    status: "waiting",
  },
  {
    id: 5,
    name: "Lucy",
    owner: "David Wilson",
    time: "01:00 PM",
    status: "waiting",
  },
];

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-50 mt-4 px-base">
      <View className="items-center justify-center bg-white border border-gray-200 p-4 rounded-xl gap-2">
        <View className="flex-row items-center gap-2">
          <Ionicons name="medical-outline" size={16} color="#BF9264" />
          <Text
            className="text-lg"
            style={{
              fontFamily: "Lato-Bold",
            }}
          >
            Hello, Dr. Goods!
          </Text>
        </View>
        <View className="flex-row items-center justify-between gap-2">
          <MaterialCommunityIcons
            name="store-marker-outline"
            size={16}
            color="#BF9264"
          />
          <Text
            className="text-sm"
            style={{
              fontFamily: "Lato-Regular",
            }}
          >
            XYZ Pet Clinic, Sleman
          </Text>
        </View>
      </View>

      <Text
        className="text-lg mt-4"
        style={{
          fontFamily: "Lato-Bold",
        }}
      >
        Quick Access
      </Text>

      <View className="flex-row items-center justify-between mt-2">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 10,
          }}
          className="rounded-xl"
        >
          <Features title="Medical Record" icon="medical-information" />
          <Features title="Inventory" icon="inventory" />
          <Features title="Schedule" icon="calendar-today" />
        </ScrollView>
      </View>

      <Text className="text-lg mt-4" style={{ fontFamily: "Lato-Bold" }}>
        Today's Summary
      </Text>
      <View className="flex-row items-center justify-between gap-4 mt-2 border border-gray-200 p-4 rounded-xl bg-white">
        <View className="items-center">
          <MaterialIcons name="person" size={16} color="#BF9264" />
          <Text className="text-sm " style={{ fontFamily: "Lato-Regular" }}>
            5 Patients
          </Text>
        </View>
        <View className="items-center">
          <MaterialIcons name="chat-bubble" size={16} color="#BF9264" />
          <Text className="text-sm" style={{ fontFamily: "Lato-Regular" }}>
            3 Active Chats
          </Text>
        </View>
        <View className="items-center">
          <MaterialIcons name="schedule" size={16} color="#BF9264" />
          <Text className="text-sm" style={{ fontFamily: "Lato-Regular" }}>
            5 Appointments
          </Text>
        </View>
      </View>

      <Text
        className="text-lg mt-4"
        style={{
          fontFamily: "Lato-Bold",
        }}
      >
        Today's Schedule
      </Text>

      <FlatList
        data={dummySchedule}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity className="bg-white border border-gray-200 p-4 rounded-xl w-full mt-2">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <FontAwesome6 name="paw" size={16} color="#BF9264" />
                <Text
                  className="text-base"
                  style={{
                    fontFamily: "Lato-Bold",
                  }}
                >
                  {item.name}
                </Text>
              </View>
              <Text
                className="text-sm"
                style={{
                  fontFamily: "Lato-Regular",
                }}
              >
                {item.time}
              </Text>
            </View>
            <View className="flex-row items-center justify-between mt-2">
              <Text
                className="text-sm"
                style={{
                  fontFamily: "Lato-Regular",
                }}
              >
                Owner: {item.owner}
              </Text>
              <MaterialIcons
                name="check-circle-outline"
                size={16}
                color="green"
              />
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Text
              className="text-sm"
              style={{
                fontFamily: "Lato-Regular",
              }}
            >
              No schedule available
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Index;
