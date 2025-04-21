import { View, Text } from 'react-native'
import React from 'react'

const AnimalCard = () => {
  return (
    <View className="w-full h-full bg-white rounded-2xl shadow-lg justify-center items-center">
      <View className="w-full bg-[#f6dec7] rounded-2xl justify-center items-center">
        <Text className="text-black font-bold">Animal Card</Text>
        <Text className="text-gray-500">This is an animal card</Text>
        </View>
    </View>
  )
}

export default AnimalCard