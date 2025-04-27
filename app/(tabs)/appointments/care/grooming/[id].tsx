import { View, Text, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DatePickerInput from "@/components/form/DatePickerInput";
import TimePickerInput from "@/components/form/TimePickerInput";
import { useLocalSearchParams, useRouter } from "expo-router";
import BranchPickerModal from "@/components/BranchPicker";
import Toast from "react-native-toast-message";

const branches = [
    {
      id: 'BR01',
      name: 'DrGood Jakarta Selatan',
      address: 'Jl. Sudirman No. 5, Jakarta Selatan',
      openHours: '09:00 - 17:00',
    },
    {
      id: 'BR02',
      name: 'Vet Good Yogyakarta',
      address: 'Jl. Kaliurang Km 10, Sleman',
      openHours: '08:00 - 16:00',
    },
  ];

const Grooming = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<any>(null);

  const formData = {
    id,
    branchId: selectedBranch?.id,
    date,
    time,
  };

  const handleSend = () => {
    console.log("Booking Data will sent:", formData);
    Toast.show({
      type: 'success',
      text1: 'Mantap!',
      text2: 'Toast custom kamu sudah muncul bro 🔥',
      position: 'top',
      topOffset: Platform.OS === 'ios' ? 60 : 0,
    });
    
  };
  return (
    <SafeAreaView className="flex-1 bg-slate-50 px-base w-full">
      <Text
        className="text-2xl text-center"
        style={{ fontFamily: "Lato-Bold" }}
      >
        Grooming Appointment
      </Text>
      <Text
        className="text-base text-center mb-4"
        style={{ fontFamily: "Lato-Regular" }}
      >
        Groom your friend with our grooming service
      </Text>
      <View className="items-center justify-center">
        <BranchPickerModal
          branches={branches}
          selected={selectedBranch}
          onSelect={(branch: any) => setSelectedBranch(branch)}
          />
        <DatePickerInput
          label="Select Date"
          value={date}
          onChange={(date) => setDate(date)}
          mode="date"
        />
        <TimePickerInput
          label="Select Time"
          onSelect={(time) => setTime(time)}
        />

        <TouchableOpacity
        disabled={!time || !date}
          className={`rounded-xl p-4 mt-4 w-full ${!time || !date ? "bg-slate-300" : "bg-primary"}`}
          onPress={handleSend}
        >
          <Text
            className="text-white text-center"
            style={{ fontFamily: "Lato-Bold" }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Grooming;
