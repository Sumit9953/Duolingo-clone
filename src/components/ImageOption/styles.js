import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
 
    optionContainer: {
        //boeder
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: "lightgrey",
        borderRadius: 10,

        //size
        width: "48%",
        height: "48%",

        //space
        padding: 10,


        alignItems: 'center'
    },
    selectedContainer: {
        backgroundColor: "#DDF4FE",
        borderColor: "#81D5FE"
    },
    optionImage: {
        width:"100%",
        height: "100%",
        flex:1,
    },
    optionText: {
        fontWeight: "bold"
    },
    slectedText: {
        fontWeight: "bold",
        color: "#40BEF7"
    }
  
})

export default styles;