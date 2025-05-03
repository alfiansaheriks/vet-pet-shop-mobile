import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputText from "@/components/form/InputText";
import BackButton from "@/components/BackButton";
import DatePickerInput from "@/components/form/DatePickerInput";
import ImagePickerInput from "@/components/form/ImagePickerInput";

const CreatePet = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* Header */}
      <View className="relative lex-row items-center justify-center py-base px-base">
        <View className="justify-center items-center mb-4">
          <Text
            className="text-xl text-black"
            style={{ fontFamily: "Lato-Bold" }}
          >
            Create Pet
          </Text>
        </View>
        <View className="absolute left-0">
          <BackButton />
        </View>
      </View>

      {/* Scrollable content */}

      <ScrollView
        className="flex-1 bg-white rounded-lg px-base py-base"
        contentContainerStyle={{ paddingBottom: 140, gap: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 gap-2 px-base">
          <ImagePickerInput />
          <DatePickerInput
            label="Date of Birth"
            value={date}
            mode="date"
            onChange={(date) => setDate(date)}
          />
          <InputText label="Pet Name" placeholder="Pet Name" type="text" />
          <InputText label="Type" placeholder="Type" type="text" />
          <InputText label="Breed" placeholder="Breed" type="text" />
          <InputText label="Color" placeholder="Color" type="text" />
          <InputText label="Weight" placeholder="Weight" type="text" />
        </View>
        {/* Fixed Bottom Button */}
        <TouchableOpacity
          className="bg-[#BF9264] rounded-lg p-4 my-4"
          // onPress={() => {}}
        >
          <Text
            className="text-white text-center"
            style={{ fontFamily: "Lato-Bold" }}
          >
            Save Changes
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatePet;
