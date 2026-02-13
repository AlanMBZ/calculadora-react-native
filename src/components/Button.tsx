import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isWhite?: boolean;
    isOrange?: boolean;
    isGray?: boolean;
}

export default function Button({ onPress, title, isOrange, isGray, isWhite }: ButtonProps) {
    const theme = useContext(ThemeContext);

    return (
        <TouchableOpacity
            style={
                isWhite
                ? Styles.btnWhite
                :isOrange
                ? Styles.btnOrange
                : isGray
                ? Styles.btnGray
                : theme.ligth
                ? Styles.btnLigth
                : Styles.btnDark
            }
            onPress={onPress}>
                <Text
                    style={
                        isOrange || isGray
                        ? Styles.smallTextLigth
                        : theme.ligth
                        ? Styles.smallTextDark
                        : Styles.smallTextLigth
                    }
                >
                    {title}
                </Text>
            </TouchableOpacity>
    );
}