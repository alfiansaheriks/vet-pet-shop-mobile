import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import TextAreaInput from "@/components/form/TextAreaInput";
import BackButton from "@/components/BackButton";

const medication = [
  {
    id: 1,
    name: "Paracetamol",
    dosage: "500mg",
    frequency: "Twice a day",
  },
  {
    id: 2,
    name: "Amoxicillin",
    dosage: "250mg",
    frequency: "Once a day",
  },
  {
    id: 3,
    name: "Ibuprofen",
    dosage: "200mg",
    frequency: "Three times a day",
  },
];

const DetailPetVisit = () => {
  const { id, name } = useLocalSearchParams();
  const [diagnosis, setDiagnosis] = useState("Test diagnosis ga si");
  const [treatment, setTreatment] = useState("Test treatment ga si");
  //   const [medication, setMedication] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-slate-50 px-base mt-4 gap-2">
        <View className="items-center">
        <Text
          className="text-2xl mb-2"
          style={{
            fontFamily: "Lato-Bold",
          }}
        >
          Visit History Detail
        </Text>
        </View>
        <View className="absolute left-0 top-14">
            <BackButton />
        </View>
        <View className="">
        <TextAreaInput
          label="Diagnosis"
          value={diagnosis}
          onChange={setDiagnosis}
          placeholder="Enter diagnosis"
          // className="mt-4"
        />
        <TextAreaInput
          label="Treatment"
          value={treatment}
          onChange={setTreatment}
          placeholder="Enter treatment"
          // className="mt-4"
        />
        </View>
        <View className="mb-2 overflow-hidden">
          <Text className="">Medication</Text>
        </View>
        <FlatList
          data={medication}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
              <Text className="text-lg font-semibold">{item.name}</Text>
              <Text className="text-gray-500">Dosage: {item.dosage}</Text>
              <Text className="text-gray-500">Frequency: {item.frequency}</Text>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View className="flex-1 items-center justify-center">
              <Text className="text-gray-500">No medication available</Text>
            </View>
          }
        />
    </SafeAreaView>
  );
};

export default DetailPetVisit;
