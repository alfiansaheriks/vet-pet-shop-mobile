import BackButton from '@/components/BackButton';
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'doctor';
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! How can I help your pet today?',
      sender: 'doctor',
    },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
    };

    setMessages((prev) => [newMessage, ...prev]);
    setInputText('');
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <View className="flex-1">
          <View className="items-center justify-center bg-white p-4 border-b border-gray-300">
            <Image
              source={{ uri: "https://picsum.photos/200/300" }}
              className="w-12 h-12 rounded-full"
              style={{ width: 48, height: 48 }}
            />
            <Text className="text-sm font-semibold mt-2">Dr. John Doe</Text>
            <Text className="text-xs text-gray-500">Veterinarian</Text>
          </View>
          <View className="absolute left-0 top-8">
            <BackButton />
          </View>
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            inverted
            renderItem={({ item }) => (
              <View
                className={`px-4 py-3 my-1 rounded-xl max-w-[75%] ${
                  item.sender === 'user'
                    ? 'bg-[#DCF8C6] self-end'
                    : 'bg-[#EEE] self-start'
                }`}
              >
                <Text className="text-base text-black">{item.text}</Text>
              </View>
            )}
            contentContainerStyle={{ padding: 16 }}
          />
        </View>

        <View className="flex-row items-center border-t border-gray-300 bg-white p-2">
          <TextInput
            placeholder="Type your message..."
            className="flex-1 bg-gray-100 rounded-full px-4 py-3 mr-2 text-black"
            value={inputText}
            onChangeText={setInputText}
            placeholderTextColor="#999"
          />
          <TouchableOpacity
            onPress={sendMessage}
            className="bg-blue-500 px-4 py-3 rounded-full"
          >
            <Text className="text-white font-semibold">Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}