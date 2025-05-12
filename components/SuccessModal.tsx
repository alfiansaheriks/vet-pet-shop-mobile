import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type SuccessModalProps = {
  visible: boolean;
  message: string;
  onClose: () => void;
};

const SuccessModal: React.FC<SuccessModalProps> = ({
  visible,
  message,
  onClose,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 justify-center items-center px-6">
        <View className="bg-white rounded-xl p-6 w-full max-w-md items-center gap-4">
          <AntDesign name="checkcircle" size={36} color="#BF9264" />
          <Text
            className="text-lg text-center text-black"
            style={{ fontFamily: "Lato-Bold" }}
          >
            {message}
          </Text>
          <TouchableOpacity
            onPress={onClose}
            className="bg-[#BF9264] px-6 py-3 rounded-lg mt-2"
          >
            <Text className="text-white" style={{ fontFamily: "Lato-Bold" }}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;
