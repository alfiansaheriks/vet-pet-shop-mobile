import { View, Text } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const SelectInput = ({ label, onSelect }: SelectInputProps) => {
  const [friend, setSelectedFriend] = useState("Select");

  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ fontSize: 14, marginBottom: 8 }}>{label}</Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#000",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <Picker
          selectedValue={friend}
          onValueChange={(itemValue) => {
            setSelectedFriend(itemValue);
            onSelect(itemValue);
          }}
          mode="dialog"
          style={{ height: 50, width: "100%", fontFamily: "Lato-Regular", fontSize: 16 }}
        >
          <Picker.Item label="Select" value="Select" />
          <Picker.Item label="Andy" value="Andy" />
          <Picker.Item label="John" value="John" />
          <Picker.Item label="Jane" value="Jane" />
        </Picker>
      </View>
    </View>
  );
};

export default SelectInput;
