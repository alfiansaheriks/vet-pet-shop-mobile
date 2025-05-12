import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputText from "@/components/form/InputText";
import BackButton from "@/components/BackButton";
import { useUserStore } from "@/stores/userStore";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import ErrorMessage from "@/components/ErrorMessage";

const EditProfile = () => {
  const auth = useAuth();
  if (!auth) {
    throw new Error("Auth context is not available");
  }

  const { authToken } = auth;
  if (!authToken) {
    throw new Error("Auth token is not available");
  }

  const user = useUserStore((state) => state.user);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSaveChanges = async () => {
    try {
      const userId = user?.ID ?? null;

      if (!name || !email) {
        setErrorMessage("Mohon isi semua field");
        // console.error("Mohon isi semua field");
        return;
      }

      const data = {
        name,
        email,
        role: "customer",
      };

      await useUserStore.getState().updateUser(userId, authToken, data);
      setErrorMessage(null);
      setModalVisible(true);
      // router.back();
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const apiMessage =
          error.response?.data?.error || "Something went wrong!";
        setErrorMessage(apiMessage); // tampilkan pesan API
        // console.error("❌ Axios error:", apiMessage);
      } else {
        setErrorMessage("Unexpected error occurred.");
        // console.error("❌ Unknown error:", error);
      }
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50 py-base">
      <View className="flex-row items-center justify-center mt-4">
        <View className="flex-1 items-center mb-4">
          <Text
            className="text-xl text-black"
            style={{ fontFamily: "Lato-Bold" }}
          >
            Edit Profile
          </Text>
        </View>
        <View className="absolute left-0">
          <BackButton />
        </View>
      </View>

      <View className="w-full px-base">
        {errorMessage && (
          <ErrorMessage message={errorMessage} />
        )}
        <ScrollView
          className="bg-white rounded-lg mb-4"
          contentContainerStyle={{ padding: 20, gap: 10 }}
        >
          <InputText
            label="Name"
            placeholder="Your Name"
            type="text"
            value={name}
            onChange={setName}
          />
          <InputText
            label="Email"
            placeholder="your@email.com"
            type="email"
            value={email}
            onChange={setEmail}
          />
          <View className="flex-1"></View>

          <TouchableOpacity
            className="bg-[#BF9264] rounded-lg p-4 mb-4"
            onPress={handleSaveChanges}
          >
            <Text
              className="text-white text-center"
              style={{ fontFamily: "Lato-Bold" }}
            >
              Save Changes
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <View className="flex-1 bg-black/50 justify-center items-center px-6">
          <View className="bg-white rounded-xl p-6 w-full max-w-md items-center gap-4">
            {/* checklist icon */}
            <AntDesign name="checkcircle" size={24} color="#BF9264" />
            <Text
              className="text-lg font-bold text-center"
              style={{ fontFamily: "Lato-Bold" }}
            >
              Profile Updated Successfully
            </Text>
            <TouchableOpacity
              onPress={handleCloseModal}
              className="bg-[#BF9264] px-6 py-3 rounded-lg"
            >
              <Text className="text-white" style={{ fontFamily: "Lato-Bold" }}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default EditProfile;
