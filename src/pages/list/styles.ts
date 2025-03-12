import { Button, Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
    },
    header:{
        width:'100%',
        height:Dimensions.get('window').height/9,
        backgroundColor:'black',
        justifyContent:'center',
        paddingHorizontal:30,
        flexDirection:'row-reverse',
        alignItems:'center',
    
    },
    greeting:{
        width:'100%',
        height:Dimensions.get('window').height/13,
        fontSize:20,
        color:'#fff',
        backgroundColor:'black',
        paddingVertical: 10
        },
    boxInput:{
        width:'70%',
        marginLeft:40,
    
    },
    boxList:{
        flex:1,
        width:'100%',

    },
    card:{
        width:'100%',
        minHeight:60,
        backgroundColor:'#fff',
        marginTop:6,
        borderRadius:10,
        justifyContent:'center',
        padding:10,
        borderWidth:1,
        borderColor:themas.colors.lightGray
    },
    rowCard:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    rowCardLeft:{
        width:'70%',
        flexDirection:'row',
        gap:10,
        alignItems:'center'

    },
    titleCard:{
        fontSize:16,
        fontWeight:'bold'
    },
    descriptionCard:{
        color:themas.colors.gray
    },
    button:{
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        width:100,
        marginVertical:10,
        borderRadius:10
    },
    bloco: {
        width: 140,
        height: 80,
       // justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'black', 
        borderRadius: 15, 
        shadowColor: 'rgba(0, 0, 0, 0.1)', 
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    textSup:{
         marginTop:10,
        

     }

})