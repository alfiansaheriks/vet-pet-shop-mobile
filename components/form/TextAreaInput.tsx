import { View, Text, TextInput } from 'react-native'
import React from 'react'

const TextAreaInput = ({label, placeholder, value, onChange}: TextAreaInputProps) => {
  return (
    <View className="mb-4">
    <Text className="text-base mb-2">{label}</Text>
      <TextInput
        multiline
        numberOfLines={4}
        placeholder={placeholder}
        className="border border-gray-300 p-3 rounded-lg"
        style={{ height: 100, textAlignVertical: 'top' }}
        value={value}
        onChange={(e) => onChange(e.nativeEvent.text)}
        />
    </View>
  )
}

export default TextAreaInput