import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputText from "@/components/form/InputText";
import BackButton from "@/components/BackButton";
import DatePickerInput from "@/components/form/DatePickerInput";
import ImagePickerInput from "@/components/form/ImagePickerInput";
import { useAuth } from "@/context/AuthContext";
import { useGlobalStore, usePetStore } from "@/stores";
import { router } from "expo-router";
import ErrorMessage from "@/components/ErrorMessage";
import SuccessModal from "@/components/SuccessModal";

const CreatePet = () => {
  const authToken = useGlobalStore((s) => s.authToken);
  const userId = useGlobalStore((s) => s.userId)?.toString();
  const [date, setDate] = useState<Date | null>(null);
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreatePet = async () => {
    if (
      name === "" ||
      type === "" ||
      breed === "" ||
      gender === "" ||
      color === "" ||
      weight === null ||
      date === null
    ) {
      setErrorMessage("Please fill all fields");
      console.log("Please fill all fields");
      return;
    }

    if (isNaN(parseFloat(weight))) {
      return setErrorMessage("Weight must be a number");
    }
    function formatDate(date: Date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    const data = {
      name: name,
      type: type,
      breed: breed,
      gender: gender,
      color: color,
      weight: parseFloat(weight),
      birth_date: formatDate(date as Date),
    };

    try {
      setLoading(true);
      await usePetStore
        .getState()
        .addPet(userId as string, authToken as string, data as any);
      setLoading(false);
      setModalVisible(true);
      // router.back();
    } catch (error) {
      // setErrorMessage("Failed to create pet");
      console.error("Failed to create pet", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* Header */}
      <View className="relative lex-row items-center justify-center py-base px-base">
        <View className="justify-center items-center mb-4">
          <Text
            className="text-xl text-black"
            style={{ fontFamily: "Lato-Bold" }}
          >
            Create Pet
          </Text>
        </View>
        <View className="absolute left-0">
          <BackButton />
        </View>
      </View>

      <ScrollView
        className="flex-1 bg-white rounded-lg px-base py-base"
        contentContainerStyle={{ paddingBottom: 100, gap: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 gap-2 px-base">
          {errorMessage && <ErrorMessage message={errorMessage} />}

          <Text
            className="text-sm text-gray-500 mt-4 mb-2"
            style={{ fontFamily: "Lato-Bold" }}
          >
            Pet Information
          </Text>
          <ImagePickerInput />
          <DatePickerInput
            label="Date of Birth"
            value={date}
            mode="date"
            onChange={(date) => setDate(date)}
          />
          <InputText
            label="Pet Name"
            placeholder="Pet Name"
            type="text"
            value={name}
            onChange={setName}
          />
          <InputText
            label="Gender"
            placeholder="Gender"
            type="text"
            value={gender}
            onChange={setGender}
          />
          <InputText
            label="Type"
            placeholder="Type"
            type="text"
            value={type}
            onChange={setType}
          />
          <InputText
            label="Breed"
            placeholder="Breed"
            type="text"
            value={breed}
            onChange={setBreed}
          />
          <InputText
            label="Color"
            placeholder="Color"
            type="text"
            value={color}
            onChange={setColor}
          />
          <InputText
            label="Weight"
            placeholder="Weight"
            type="text"
            value={weight}
            onChange={setWeight}
          />
        </View>
        {/* Fixed Bottom Button */}
      </ScrollView>

      <TouchableOpacity
        className="bg-[#BF9264] rounded-lg p-4 absolute bottom-6 left-6 right-6"
        onPress={handleCreatePet}
      >
        <Text
          className="text-white text-center"
          style={{ fontFamily: "Lato-Bold" }}
        >
          {loading ? "Saving..." : "Add Pet"}
        </Text>
      </TouchableOpacity>

      <SuccessModal
        visible={modalVisible}
        message="Pet created successfully"
        onClose={() => {
          setModalVisible(false);
          router.back();
        }}
      />
    </SafeAreaView>
  );
};

export default CreatePet;
