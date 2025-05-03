import { View, Text, TextInput } from 'react-native'
import React from 'react'

const PasswordInput = ({label, placeholder}: PasswordInputProps) => {
  return (
    <View className="bg-white rounded-lg p-4">
      <Text className="mb-2">{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"black"}
        secureTextEntry={true}
        className="flex-1 text-base text-black border border-gray-200 p-3 rounded-lg"
        style={{ fontFamily: "Lato" }}
      />
    </View>
  )
}

export default PasswordInput