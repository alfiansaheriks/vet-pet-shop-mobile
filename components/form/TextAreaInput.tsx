import { View, Text, TextInput } from 'react-native'
import React from 'react'

const TextAreaInput = ({label, placeholder, value, onChange}: TextAreaInputProps) => {
  return (
    <View className="mb-4">
    <Text className="text-base mb-2" style={{
      fontFamily: "Lato-Regular",
      color: "#333333",
      fontWeight: "600"
    }}>{label}</Text>
      <TextInput
        multiline
        numberOfLines={4}
        placeholder={placeholder}
        className="border border-gray-300 p-3 rounded-lg"
        style={{ height: 100, textAlignVertical: 'top', fontFamily: "Lato-Regular" }}
        value={value}
        onChange={(e) => onChange(e.nativeEvent.text)}
        />
    </View>
  )
}

export default TextAreaInput