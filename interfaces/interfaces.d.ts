type IconsType = {
    home: React.ReactNode;
    search: React.ReactNode;
}

type HomeFeatureProps = {
    icon: any;
    title: string;
}

type AnimalTypeProps = {
    images: any;
    name: string;
    isActiveType: boolean;
    onPress: () => void;
}

type ProductTypeProps = {
    images: any;
    name: string;
    isActiveType: boolean;
    onPress: () => void;    
}

type ServiceTypeProps = {
    icon: any;
    title: string;
    onPress?: () => void;
}

type DateInputProps = {
    label: string;
    mode?: "date" | "time" | "datetime";
    value: Date | null;
    onChange: (date: Date) => void;
}

type TimePickerInputProps = {
    label: string;
    onSelect: (time: string) => void;  
}

type SelectInputProps = {
    label: string;
    onSelect: (value: string) => void;
}

type TextAreaInputProps = {
    label: string;
    placeholder: string;
    value: string;
    onChange: (text: string) => void;
}
