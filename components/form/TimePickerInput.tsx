import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const times = [
  {
    id: 1,
    time: "08:00",
    isAvalable: true,
  },
  {
    id: 2,
    time: "09:00",
    isAvalable: false,
  },
  {
    id: 3,
    time: "10:00",
    isAvalable: true,
  },
  {
    id: 4,
    time: "11:00",
    isAvalable: true,
  },
  {
    id: 5,
    time: "12:00",
    isAvalable: true,
  },
  {
    id: 6,
    time: "13:00",
    isAvalable: true,
  },
  {
    id: 7,
    time: "14:00",
    isAvalable: true,
  },
  {
    id: 8,
    time: "15:00",
    isAvalable: true,
  },
  {
    id: 9,
    time: "16:00",
    isAvalable: false,
  },
  {
    id: 10,
    time: "17:00",
    isAvalable: true,
  },
  {
    id: 11,
    time: "18:00",
    isAvalable: true,
  },
  {
    id: 12,
    time: "19:00",
    isAvalable: false,
  },
];

const TimePickerInput = ({ label, onSelect }: TimePickerInputProps) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handlePress = (time: string) => {
    setSelectedTime(time);
    onSelect(time);
  };

  return (
    <View className="mb-4">
      <Text className="text-base mb-2">{label}</Text>
      <View className="flex-row flex-wrap gap-2">
        {times.map((time) => (
          <TouchableOpacity
            key={time.id}
            className={`px-4 py-2 rounded-lg border ${
              !time.isAvalable
                ? "bg-gray-200 border-gray-300"
                : selectedTime === time.time
                ? "bg-primary border-primary"
                : "bg-white border-gray-300"
            }`}
            onPress={() => handlePress(time.time)}
            disabled={!time.isAvalable}
          >
            <Text
              className={`${
                selectedTime === time.time ? "text-white" : "text-gray-800"
              } text-sm`}
            >
              {time.time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TimePickerInput;
