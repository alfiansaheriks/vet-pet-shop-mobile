import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Features = ({ icon, title }: HomeFeatureProps) => {
  return (
    <>
      <TouchableOpacity className="flex-1 h-16 bg-white rounded-lg flex-row justify-start items-center px-2">
        <View className="bg-gray-100 w-10 h-10 rounded-lg">
          <MaterialIcons
            name={icon}
            size={24}
            color="#BF9264"
            className="ml-2 mt-2"
            />
        </View>
        <Text className="text-black font-semibold text-base px-4" style={{
          fontFamily: "Lato-Regular",
        }}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Features;