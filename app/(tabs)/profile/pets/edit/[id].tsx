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
import { useGlobalStore, usePetStore } from "@/stores";
import { router, useLocalSearchParams } from "expo-router";
import ErrorMessage from "@/components/ErrorMessage";
import SuccessModal from "@/components/SuccessModal";

export default function EditPet() {
  const [date, setDate] = useState<Date | null>(null);
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const { id } = useLocalSearchParams();

  useEffect(() => {
    console.log("id: ", id);
    const fetchPet = async () => {
      try {
        const token = useGlobalStore.getState().authToken;
        const petId = id as string;
        if (!token) return;
        if (!petId) return;
        await usePetStore.getState().fetchPet(petId, token);

        const pet = usePetStore.getState().pet;

        if (pet) {
          const current = Array.isArray(pet) ? pet[0] : pet;
          setName(current.name);
          setGender(current.gender);
          setType(current.type);
          setBreed(current.breed);
          setColor(current.color);
          setWeight(current.weight.toString());
          setDate(new Date(current.birth_date));
        }
      } catch (error) {
        console.error("Failed to fetch pet data:", error);
      }
    };
    fetchPet();
  }, [id]);

  const handleEditPet = async () => {
    if (
      name === "" ||
      gender === "" ||
      type === "" ||
      breed === "" ||
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
      gender: gender,
      type: type,
      breed: breed,
      color: color,
      weight: parseFloat(weight),
      birth_date: date ? formatDate(date) : "",
    };

    try {
      setLoading(true);
      const token = useGlobalStore.getState().authToken;
      const petId = id as string;
      if (!token) return;
      if (!petId) return;
      await usePetStore.getState().updatePet(petId, token, data);
      setModalVisible(true);
      setLoading(false);
    } catch (error) {
      console.error("Failed to edit pet:", error);
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
            Edit Pet
          </Text>
        </View>
        <View className="absolute left-0">
          <BackButton />
        </View>
      </View>

      {/* Scrollable content */}

      <ScrollView
        className="flex-1 bg-white rounded-lg px-base py-base"
        contentContainerStyle={{ paddingBottom: 140, gap: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 gap-2 px-base">
          {errorMessage && (
            <ErrorMessage message={errorMessage} />
          )}

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
      </ScrollView>

      <TouchableOpacity
        className="bg-[#BF9264] rounded-lg p-4 absolute bottom-6 left-6 right-6"
        onPress={handleEditPet}
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
        message="Pet updated successfully"
        onClose={() => {
          setModalVisible(false);
          // Navigate to the pet list or any other screen
          router.back();
        }}
      />
    </SafeAreaView>
  );
}
