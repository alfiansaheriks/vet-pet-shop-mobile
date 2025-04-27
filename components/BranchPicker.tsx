import {
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

type BranchPickerModalProps = {
    branches: Array<{ id: string; name: string; address: string; openHours: string }>;
    selected: { id: string; name: string; address: string; openHours: string } | null;
    onSelect: (branch: { id: string; name: string; address: string; openHours: string }) => void;
};
  

const BranchPickerModal = ({ branches, selected, onSelect }: BranchPickerModalProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleSelect = (branch: any) => {
    onSelect(branch);
    setShowModal(false);
  };

  return (
    <View className="w-full">
      <Text className="mb-2 font-semibold">Pilih Cabang</Text>
      <TouchableOpacity
        className="border border-gray-300 p-3 rounded-lg flex-row items-center justify-between mb-4"
        onPress={() => setShowModal(true)}
      >
        <Text className="text-base">
          {selected ? selected.name : "Belum dipilih"}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#555" />
      </TouchableOpacity>

      <Modal visible={showModal} animationType="slide" transparent>
        <Pressable
          onPress={() => setShowModal(false)}
          className="flex-1 bg-black/30 justify-end"
        >
          <View className="bg-white p-4 rounded-t-2xl max-h-[70%]">
            <Text className="text-lg font-bold text-center mb-4">
              Pilih Cabang
            </Text>
            <FlatList
              data={branches}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelect(item)}
                  className="border border-gray-300 rounded-xl p-4 mb-3"
                >
                  <Text className="font-semibold text-base">{item.name}</Text>
                  <Text className="text-sm text-gray-500">{item.address}</Text>
                  <Text className="text-sm text-gray-500">
                    Jam Buka: {item.openHours}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default BranchPickerModal;