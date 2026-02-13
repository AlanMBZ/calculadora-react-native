import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const Styles = StyleSheet.create({
    btnOrange: {
        width: 72,
        height: 72,
        borderRadius: 50,
        color: myColors.white,
        backgroundColor: myColors.orange,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnWhite: {
        width: 72,
        height: 72,
        borderRadius: 50,
        borderColor: myColors.black,
        backgroundColor: myColors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 50,
        backgroundColor: myColors.dark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnLigth: {
        width: 72,
        height: 72,
        borderRadius: 50,
        backgroundColor: myColors.ligth,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 50,
        backgroundColor: myColors.gray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextLigth: {
        fontSize: 32,
        color: myColors.black,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
    },
    row: {
        maxWidth: '100%',
        flexDirection: 'row',
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: myColors.black,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 48,
        color: myColors.black,
        fontWeight: '200',
        alignSelf: "flex-end",
    },




}); 