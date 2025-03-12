import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    boxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        marginTop:10,
        borderRadius:40,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        backgroundColor:'black',
        borderColor:themas.colors.primary,
    },
    input:{
        height:'100%',
        width:'90%',
        borderRadius:40,
        color:'white',
    },
    titleInput:{
        marginLeft:5,
        color:'white',
        marginTop:20
    },
    icon:{
        width:'100%',
        color:themas.colors.primary,
    },
    button:{
        width:'10%'
    }
})