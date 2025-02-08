import { StyleSheet } from "react-native";

export const generalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f8f8f8",
        gap: 10
    },
    sub_container: {
        flex: 1,
        gap: 5
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginBottom: 10,
    },
    headerText1: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    headerText2: {
        color: "black",
        fontSize: 17,
        fontWeight: "500",
    },
    row : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignSelf : 'stretch'
    },
    text_row : {
        flexDirection : 'row',
        alignSelf : 'stretch'
    },
    row_padding : {
        gap : 10
    },
    divider: {
        height: 1, // Divider height
        backgroundColor: '#ccc', // Light gray color
        marginVertical: 10, // Spacing above and below the divider
    },
    box: {
        backgroundColor: '#ccc5b9',
        paddingLeft : 20,
        paddingRight : 20,
        paddingBottom : 50,
        paddingTop : 20,
        borderRadius: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    category_box : {
        flex: 1,
        paddingHorizontal : 20,
        paddingVertical : 15,
        backgroundColor : 'red',
        borderRadius : 5
    }
});
