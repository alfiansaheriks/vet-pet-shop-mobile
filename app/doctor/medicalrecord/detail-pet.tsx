import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/BackButton";

const historyPetVisit = [
  {
    id: 1,
    ownerId: 1,
    visitDate: "2023-10-01",
    reason: "Routine check-up",
  },
  {
    id: 2,
    ownerId: 1,
    visitDate: "2023-10-05",
    reason: "Vaccination",
  },
  {
    id: 3,
    ownerId: 2,
    visitDate: "2023-10-10",
    reason: "Skin allergy",
  },
  {
    id: 4,
    ownerId: 2,
    visitDate: "2023-10-15",
    reason: "Dental cleaning",
  },
];

const DetailPet = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-slate-50 px-base">
      <FlatList
        data={historyPetVisit}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="bg-white p-4 rounded-lg border border-gray-200 mb-4"
            onPress={() =>
              router.push({
                pathname: "/doctor/medicalrecord/detail-pet-visit",
                params: {
                  id: item.id,
                },
              })
            }
          >
            <Text
              className="text-lg font-semibold"
              style={{ fontFamily: "Lato-Regular" }}
            >
              {item.visitDate}
            </Text>
            <Text
              className="text-gray-500"
              style={{ fontFamily: "Lato-Regular" }}
            >
              {item.reason}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="flex-row items-center">
            <View className="absolute left-0 top-1">
              <BackButton />
            </View>
            <View className="flex-1 justify-center items-center py-base">
              <Text className="text-2xl" style={{ fontFamily: "Lato-Bold" }}>
                Visit History
              </Text>
            </View>
          </View>
        }
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Text className="text-gray-500">No visit history available</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default DetailPet;
