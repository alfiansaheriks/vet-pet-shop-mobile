import { View, Text } from "react-native";
import React from "react";

type ErrorMessageProps = {
  message: string | null;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <View className="bg-red-100 border border-red-400 rounded-md p-3 mb-4">
      <Text className="text-red-600" style={{ fontFamily: "Lato-Bold" }}>
        {message}
      </Text>
    </View>
  );
};

export default ErrorMessage;
