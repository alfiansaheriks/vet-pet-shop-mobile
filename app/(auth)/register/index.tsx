import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { register as registerAPI } from "@/lib/api/auth";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [waPhoneNumber, setWaPhoneNumber] = useState("");


  const handleRegister = async () => {
    try {
      const response = await registerAPI({Name: fullName, Email: email, Password: password, Role: "customer", Phone_Number: phoneNumber, Wa_Phone_Number: waPhoneNumber});
      console.log("Register successful: ", response);
      router.replace("/(auth)/login");
    } catch (error:any) {
      console.error("Payload: ", {fullName: fullName, email: email, password: password, role: "customer", phoneNumber: phoneNumber, waPhoneNumber: waPhoneNumber});
      console.error("Registration failed: ", error.response.data);
      console.log("Error ")
    }

  }

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
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        placeholder="Phone Number"
        className="w-full bg-white text-primary rounded-full px-4 py-4 mb-2 font-bold"
        placeholderTextColor="#BF9264"
        keyboardType="numeric"
        inputMode="numeric"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TextInput
        placeholder="WhatsApp Number"
        className="w-full bg-white text-primary rounded-full px-4 py-4 mb-2 font-bold"
        placeholderTextColor="#BF9264"
        keyboardType="numeric"
        inputMode="numeric"
        value={waPhoneNumber}
        onChangeText={setWaPhoneNumber}
      />

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        inputMode="email"
        className="w-full bg-white text-primary rounded-full px-4 py-4 font-bold mb-2"
        placeholderTextColor="#BF9264"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        className="w-full bg-white text-primary rounded-full px-4 py-4 font-bold mb-2"
        placeholderTextColor="#BF9264"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={handleRegister} className="bg-primary rounded-full px-4 py-4 w-full mt-2">
        <Text className="text-white font-bold text-center">Register</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-white rounded-full px-4 py-4 w-full mt-2" onPress={handleAlreadyHaveAccount}>
        <Text className="text-primary font-bold text-center">
          Already have account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
