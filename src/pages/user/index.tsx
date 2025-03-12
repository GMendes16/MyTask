import React from "react";
import { style }  from "./styles";
import {Ionicons} from '@expo/vector-icons';
import { Text, View,Alert,TouchableOpacity } from "react-native";
import { useNavigation,NavigationProp  } from '@react-navigation/native';
import { themas } from "../../global/themes";

export function User() {
    const navigation = useNavigation<NavigationProp<any>>();

    const handleLogout = () => {
        Alert.alert("Logout", "Você saiu da conta.");
        return navigation.reset({routes:[{name :'Login'}]});
    };

    return (
        <View style={style.container}>
            <Text style={style.name}>Usuario: Gabriel Mendes</Text>
            <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
                <Ionicons 
                    name="exit"  
                    style={{color:themas.colors.primary}}
                    size={40}
                />
            </TouchableOpacity>
        </View>
    );
}
