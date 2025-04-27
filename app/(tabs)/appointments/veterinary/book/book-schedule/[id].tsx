import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import DatePickerInput from "@/components/form/DatePickerInput";
import TimePickerInput from "@/components/form/TimePickerInput";
import SelectInput from "@/components/form/SelectInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import RadioInput from "@/components/form/RadioInput";

const Booking = () => {
  const { id } = useLocalSearchParams();

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState<string | null>(null);
  const [selectedFriend, setSelectedFriend] = useState<string | null>(null);
  const [notes, setNotes] = useState<string>("");
  const [withMedicalRecord, setWithMedicalRecord] = useState("");

  const handleSubmit = () => {
    const formData = {
      id,
      date,
      time,
      friend: selectedFriend,
      notes,
      withMedicalRecord,
    };

    console.log("Booking Data:", formData);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50 p-4" edges={["top"]}>
      <ScrollView contentContainerStyle={{  }}>
        <View className="items-center mb-6">
          <Text
            className="text-primary"
            style={{ fontFamily: "Lato-Bold", fontSize: 20 }}
          >
            Booking Details
          </Text>
          <Text
            className="text-gray-600"
            style={{ fontFamily: "Lato-Bold", fontSize: 14 }}
          >
            Please input your booking details
          </Text>
        </View>

        <DatePickerInput
          label="Select Date"
          value={date}
          mode="date"
          onChange={(date) => setDate(date)}
        />

        <TimePickerInput
          label="Select Time"
          onSelect={(time) => setTime(time)}
        />

        <SelectInput
          label="Select Friends"
          onSelect={(friend) => setSelectedFriend(friend)}
        />

        <TextAreaInput
          label="Additional Notes"
          placeholder="Any additional notes for the appointment"
          value={notes}
          onChange={(text) => setNotes(text)}
        />

        <RadioInput
          label="With medical record?"
          onSelect={(value) => setWithMedicalRecord(value)}
        />

        {/* Tombol Submit */}
        <View className="mt-6">
          <Text
            onPress={handleSubmit}
            className="bg-primary text-white text-center py-3 rounded-lg"
          >
            Submit Booking
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Booking;
