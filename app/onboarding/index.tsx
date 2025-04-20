import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { images } from '@/constants/images';
import { Asset } from 'expo-asset';
import { router } from 'expo-router';

const onBoarding = () => {
  const handleGetStarted = () => {
    try {
      router.push('/(auth)/login');
    } catch (error) {
      console.error('Error navigating to login:', error);
    }
  }
  return (
    <View className="flex-1 justify-center items-center bg-primary px-base gap-x-2">
        <Image source={images.dog3d} className="size-96" />
            <Text className="text-white text-5xl font-bold text-center mb-2">Happy pets, happy you!</Text>
            <Text className="text-white text-lg text-center">Start the journey to a better life with your loyal companions — all in one app.</Text>
            <TouchableOpacity className="bg-white rounded-full w-full px-8 py-4 mt-10" onPress={handleGetStarted}>
                <Text className="text-primary font-bold text-lg text-center">Get Started</Text>
            </TouchableOpacity>
    </View>
  )
}

export default onBoarding