import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";

type RadioInputProps = {
    label: string;
    value?: string;
    onSelect?: (value: string) => void;
}

const RadioInput = ({label, value, onSelect}: RadioInputProps) => {
  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: "1",
        label: "Yes",
        value: "1",
        checked: false,
      },
      {
        id: "2",
        label: "No",
        value: "2",
        checked: false,
      },
    ],
    []
  );
  const [withMedicalRecord, setWithMedicalRecord] = useState<string | undefined>();

  return (
    <View className="mb-4">
      <Text className="mb-2">{label}</Text>
      <RadioGroup
        accessibilityLabel="Radio Input"
        radioButtons={radioButtons}
        onPress={(value) => {
            setWithMedicalRecord(value);
            onSelect?.(value);
        }}
        selectedId={withMedicalRecord}
        containerStyle={{ marginVertical: 10, flexDirection: "row" }}
      />
    </View>
  );
};

export default RadioInput;
