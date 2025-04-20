import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const Register = () => {
  return (
    <View className="flex-1 justify-center items-center bg-secondary px-base gap-x-2">
      <Text className="text-white text-2xl font-bold mb-1">
        Daftar Akun Baru
      </Text>
      <Text className="text-white text-center mb-5">
        Mulai belanja kebutuhan hewan peliharaanmu sekarang juga!
      </Text>

      <TextInput
        placeholder="Nama Lengkap"
        className="w-full bg-white text-primary rounded-full px-4 py-4 mb-2 font-bold"
        placeholderTextColor="#BF9264"
      />

      <TextInput
        placeholder="Nomor HP"
        className="w-full bg-white text-primary rounded-full px-4 py-4 font-bold mb-2"
        placeholderTextColor="#BF9264"
      />

      <TextInput
        placeholder="Email"
        className="w-full bg-white text-primary rounded-full px-4 py-4 font-bold mb-2"
        placeholderTextColor="#BF9264"
      />

      <TouchableOpacity className="bg-white rounded-full px-4 py-4 w-full mt-2">
        <Text className="text-primary font-bold text-center">Daftar</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-primary rounded-full px-4 py-4 w-full mt-2">
        <Text className="text-white font-bold text-center">Already have account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
