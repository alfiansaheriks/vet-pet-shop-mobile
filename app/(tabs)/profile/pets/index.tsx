import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import BackButton from "@/components/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "@/context/AuthContext";
import { usePetStore } from "@/stores/petStore";
import ConfirmModal from "@/components/ConfirmModal";
import SuccessModal from "@/components/SuccessModal";

const PetsPage = () => {
  const router = useRouter();
  const auth = useAuth();
  if (!auth) {
    throw new Error("Auth context is not available");
  }

  const [petCounter, setPetCounter] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const pet = usePetStore((state) => state.pet);

  const { authToken, userId } = auth;
  if (!authToken) {
    throw new Error("Auth token is not available");
  } else if (!userId) {
    throw new Error("User ID is not available");
  }

  useFocusEffect(
    useCallback(() => {
      const token = authToken;
      const idString = userId.toString();
      if (!idString) return;
      if (!token) return;
      const fetchPets = async () => {
        try {
          await usePetStore.getState().fetchPets(idString, token);
          console.log("✅ Pet data refreshed on screen focus");
          console.log("pet: ", pet);
        } catch (error) {
          console.error("Failed to fetch pet data:", error);
        }
      };

      fetchPets();
    }, [authToken])
  );

  const handlePress = ({ ...item }) => {
    router.push({
      pathname: "/(tabs)/appointments/care",
      params: {
        id: item.id,
      },
    });
  };

  const handlePressDelete = () => {
    setShowConfirm(true);
  }

  const deletePet = async (id: string) => {
    try {
      const token = authToken;
      if (!token) return;
      await usePetStore.getState().deletePet(id, token);
      setModalVisible(true);
      await usePetStore.getState().fetchPets(userId.toString(), token);
    } catch (error) {
      console.error("Failed to delete pet:", error);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-slate-50 py-base">
      <View className="flex-row items-center justify-center py-base">
        <View className="flex-1 items-center mb-4">
          <Text
            className="text-xl text-black"
            style={{ fontFamily: "Lato-Bold" }}
          >
            My Pets
          </Text>
        </View>
        <View className="absolute left-0">
          <BackButton />
        </View>
      </View>

      <FlatList
        data={pet}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <>
            <View className="flex-row bg-white rounded-lg p-4 mb-4">
              <TouchableOpacity
                className="flex-row flex-1"
                onPress={() => handlePress(item)}
              >
                <Image
                  source={{ uri: "https://picsum.photos/id/1/200/200" }}
                  className="w-20 h-20 rounded-lg mr-4"
                  resizeMode="cover"
                />
                <View className="">
                  <Text className="text-lg" style={{ fontFamily: "Lato-Bold" }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontFamily: "Lato" }}>{item.type}</Text>
                  <Text style={{ fontFamily: "Lato" }}>{item.breed}</Text>
                  {/* <Text style={{ fontFamily: "Lato" }}>{item.age} years old</Text> */}
                </View>
              </TouchableOpacity>
              <View className="items-center gap-2">
                <TouchableOpacity
                  className="bg-[#BF9264] rounded-xl p-2"
                  onPress={() =>
                    router.push({
                      pathname: "/(tabs)/profile/pets/edit/[id]",
                      params: {
                        id: item.id,
                        // imageParams: item.image,
                      },
                    })
                  }
                >
                  <MaterialIcons
                    name="edit"
                    size={18}
                    color="white"
                    style={{ fontFamily: "Lato" }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-[#BF9264] rounded-xl p-2"
                  onPress={handlePressDelete}
                >
                  <MaterialIcons
                    name="delete"
                    size={18}
                    color="white"
                    style={{ fontFamily: "Lato" }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <ConfirmModal
              visible={showConfirm}
              title="Delete Pet"
              message="Are you sure you want to delete this pet?"
              confirmText="Delete"
              cancelText="Cancel"
              onConfirm={() => {
                setShowConfirm(false);
                deletePet(item.id);
              }}
              onCancel={() => {
                setShowConfirm(false);
              }}
            />

            <SuccessModal
              visible={modalVisible}
              message="Pet deleted successfully"
              onClose={() => {
                setModalVisible(false);
              }}
            />
          </>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        className="px-base"
        ListFooterComponent={() =>
          //   hide button if pet already 5
          petCounter >= 5 ? null : (
            <TouchableOpacity
              className="bg-[#BF9264] rounded-lg p-4 mb-4"
              onPress={() => {
                router.push("/(tabs)/profile/pets/create");
              }}
            >
              <Text
                className="text-white text-center"
                style={{ fontFamily: "Lato-Bold" }}
              >
                Add New Pet
              </Text>
            </TouchableOpacity>
          )
        }
      />
    </SafeAreaView>
  );
};

export default PetsPage;
