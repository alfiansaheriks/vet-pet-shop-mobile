import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";

const Register = () => {
  const [isSentOtp, setIsSentOtp] = useState(false);

  const handleSendOtp = () => {
    setIsSentOtp(true);
  };

  const handleAlreadyHaveAccount = () => {
    try {
      router.push("/(auth)/login");
    } catch (error) {
      console.error("Error navigating to login:", error);
    }
  }
  return (
    <View className="flex-1 justify-center items-center bg-secondary px-base gap-x-2">
      <Text className="text-white text-2xl font-bold mb-1">
        Register New Account
      </Text>
      <Text className="text-white text-center mb-5">
        Start your journey with us and enjoy the best pet products.
      </Text>

      <TextInput
        placeholder="Full Name"
        className="w-full bg-white text-primary rounded-full px-4 py-4 mb-2 font-bold"
        placeholderTextColor="#BF9264"
      />

      <TextInput
        placeholder="Phone Number"
        className="w-full bg-white text-primary rounded-full px-4 py-4 font-bold mb-2"
        placeholderTextColor="#BF9264"
      />

      <TextInput
        placeholder="Email"
        className="w-full bg-white text-primary rounded-full px-4 py-4 font-bold mb-2"
        placeholderTextColor="#BF9264"
      />

      <View className="flex-row rounded-full px-14 gap-x-1">
        <TextInput
          placeholder="Verification Code"
          className="w-full bg-white text-primary rounded-full px-4 py-4 font-bold"
          placeholderTextColor="#BF9264"
        />
        {isSentOtp ? (
          <TouchableOpacity className="bg-primary rounded-full px-4 py-4">
            <Text className="text-white font-bold text-center">Verify Otp</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="bg-primary rounded-full px-4 py-4"
            onPress={handleSendOtp}
          >
            <Text className="text-white font-bold text-center">Send OTP</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity className="bg-primary rounded-full px-4 py-4 w-full mt-2">
        <Text className="text-white font-bold text-center">Register</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-primary rounded-full px-4 py-4 w-full mt-2" onPress={handleAlreadyHaveAccount}>
        <Text className="text-white font-bold text-center">
          Already have account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
