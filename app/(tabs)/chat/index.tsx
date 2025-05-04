import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const dummyChatList = [
  {
    id: 1,
    name: "Dr. John Doe",
    image: "https://picsum.photos/200/300",
    message: "Hi! How can I help your pet today?",
    time: "10:00 AM",
    isRead: false,
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    image: "https://picsum.photos/200/300",
    message: "Your pet is doing great!",
    time: "10:05 AM",
    isRead: true,
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    image: "https://picsum.photos/200/300",
    message: "Let’s schedule a follow-up appointment.",
    time: "10:10 AM",
    isRead: false,
  },
];

const Index = () => {
  const router = useRouter();
  const handleChatPress = (id: number) => {
    router.push(`/chat/${id}`);
  };
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "bottom"]}>
      <View className="items-center justify-center bg-white p-4 border-b border-gray-300">
        <Text className="text-sm font-semibold mt-2">Chat</Text>
      </View>

      <FlatList
        data={dummyChatList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleChatPress(item.id)}
            className={`flex-row items-center border-b border-gray-300 ${
              item.isRead ? "bg-gray-100" : ""
            }`}
          >
            <View className="flex-row items-center p-4 border-gray-300">
              <Image
                source={{ uri: item.image }}
                className="w-12 h-12 rounded-full"
                style={{ width: 48, height: 48 }}
              />
              <View className="ml-4">
                <Text
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: "Lato-Regular",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  className="text-xs text-gray-500"
                  style={{
                    fontFamily: "Lato-Regular",
                  }}
                >
                  {item.message}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Text className="text-gray-500">No messages yet.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Index;
