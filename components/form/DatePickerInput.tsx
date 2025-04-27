import { View, Text, Pressable, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';

const DatePickerInput = ({ label, value, mode, onChange }: DateInputProps) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setShowPicker(Platform.OS === 'ios');
      onChange(selectedDate);
      setShowPicker(false);
    } else {
      setShowPicker(false);
    }
  };

  return (
    <View className="w-full mb-4">
      <Text className="text-base mb-2" style={{ fontFamily: "Lato-Bold"}}>{label}</Text>

      <Pressable
        onPress={() => setShowPicker(true)}
        className="border border-gray-300 p-3 rounded-lg"
      >
        <Text>{value ? value.toLocaleDateString() : "Select a date"}</Text>
      </Pressable>

      {showPicker && (
        <DateTimePicker
          value={value || new Date()}
          mode={mode}
          display="default"
          onChange={handleChange}
        />
      )}
    </View>
  );
};

export default DatePickerInput;
