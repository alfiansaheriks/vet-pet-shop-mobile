import { View, Text, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const PetDetails = () => {
  const { id, name, type, breed, age, ownerName, appointmentDate, image } =
    useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-slate-50 ">
      <View className="flex-1 items-center mt-4">
        <View className="items-center rounded-full">
          <Image
            source={{ uri: image.toString() }}
            className="w-32 h-32 rounded-full border-2 border-white"
          />
        </View>
        
        {/* <Text className="text-lg">ID: {id}</Text> */}
        <Text className="text-lg">{name}</Text>
        <Text className="text-lg">{type} • {breed}</Text>
        <Text className="text-lg">Age: {age}</Text>
        
      </View>
    </SafeAreaView>
  );
};

export default PetDetails;
