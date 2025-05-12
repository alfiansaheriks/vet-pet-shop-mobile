import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '@/components/SearchBar'
import { useRouter } from 'expo-router'

const dummyPatients = [
  {
    id: 1,
    name: 'John Doe',
    petName: 'Buddy',
    age: 30
  },
  {
    id: 2,
    name: 'Jane Smith',
    petName: 'Max',
    age: 25
  },
  {
    id: 3,
    name: 'Alice Johnson',
    petName: 'Bella',
    age: 28
  },
  {
    id: 4,
    name: 'Bob Brown',
    petName: 'Charlie',
    age: 35
  }
]

const MedicalRecord = () => {
  const router = useRouter()
  return (
    <SafeAreaView className="flex-1 bg-slate-50 px-base">
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl" style={{fontFamily: "Lato-Bold"}}>Medical Record</Text>
        <SearchBar placeholder="Search for a patient..." />
        <FlatList
          data={dummyPatients}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="bg-white p-4 rounded-lg border border-gray-200 mb-4"
              onPress={() => router.push({
                pathname: '/doctor/medicalrecord/detail-client',
                params: { 
                  id: item.id,
                  name: item.name,
                  petName: item.petName,
                  age: item.age,
                }
              })}
            >
              <Text className="text-lg" style={{fontFamily: "Lato-Bold"}}>{item.name}</Text>
              <Text className="text-gray-500" style={{fontFamily: "Lato-Regular"}}>{item.petName}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
          style={{ width: '100%' }}
        />
      </View>
      
    </SafeAreaView>
  )
}

export default MedicalRecord