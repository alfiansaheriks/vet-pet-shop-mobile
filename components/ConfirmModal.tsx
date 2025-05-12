import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type ConfirmModalProps = {
  visible: boolean;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  visible,
  title = "Confirm",
  message,
  confirmText = "Yes",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View className="flex-1 bg-black/50 justify-center items-center px-6">
        <View className="bg-white rounded-xl p-6 w-full max-w-md items-center gap-4">
          <AntDesign name="questioncircle" size={36} color="#BF9264" />
          <Text
            className="text-lg text-center text-black"
            style={{ fontFamily: "Lato-Bold" }}
          >
            {title}
          </Text>
          <Text className="text-center text-gray-700 mb-4">{message}</Text>
          <View className="flex-row gap-4">
            <TouchableOpacity
              onPress={onCancel}
              className="border border-gray-300 px-6 py-2 rounded-lg"
            >
              <Text className="text-gray-700" style={{ fontFamily: "Lato-Bold" }}>
                {cancelText}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onConfirm}
              className="bg-[#BF9264] px-6 py-2 rounded-lg"
            >
              <Text className="text-white" style={{ fontFamily: "Lato-Bold" }}>
                {confirmText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;
