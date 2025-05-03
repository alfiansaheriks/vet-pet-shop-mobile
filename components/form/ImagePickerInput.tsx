import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Button, View, Image, Touchable, TouchableOpacity } from 'react-native';

export default function ImagePickerInput() {
  const [image, setImage] = useState<string | null>(null);

  const {
    id,
    imageParams
  } = useLocalSearchParams();

  useEffect(() => {
    if (imageParams) {
      setImage(imageParams.toString());
    }
  }, [imageParams]);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(result.assets[0].uri);
    }
  };

  return (
    <View className="items-center justify-center">
      <TouchableOpacity onPress={pickImage}>
        {image ? (
          <Image
            source={{ uri: image }}
            className="w-32 h-32 rounded-full border-2 border-white mb-2"
          />
        ) : (
          <MaterialIcons
            name="add-a-photo"
            size={32}
            color="#BF9264"
            className="bg-white rounded-full p-2"
            style={{ fontFamily: "Lato" }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}
