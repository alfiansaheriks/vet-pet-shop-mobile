import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputText from "@/components/form/InputText";
import BackButton from "@/components/BackButton";
import PasswordInput from "@/components/form/PasswordInput";

const ChangePassword = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-50 py-base">
      <View className="flex-row items-center justify-center mt-4">
        <View className="flex-1 items-center mb-4">
          <Text
            className="text-xl text-black"
            style={{ fontFamily: "Lato-Bold" }}
          >
            Change Password
          </Text>
        </View>

        <View className="absolute left-0">
          <BackButton />
        </View>
      </View>

      <View className="w-full px-base">
        <ScrollView
          className="bg-white rounded-lg"
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <PasswordInput label="Current Password" placeholder="********" />
          <PasswordInput label="New Password" placeholder="********" />
          <PasswordInput label="Confirm New Password" placeholder="********" />
        </ScrollView>
        <TouchableOpacity
          className="bg-[#BF9264] rounded-lg p-4 mb-4"
          // onPress={() => {}}
        >
          <Text
            className="text-white text-center"
            style={{ fontFamily: "Lato-Bold" }}
          >
            Save Changes
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
