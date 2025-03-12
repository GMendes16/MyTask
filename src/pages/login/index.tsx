import React, { useState } from "react";

import {Text, View, Image, TouchableOpacity, Alert} from 'react-native'
import {style} from './styles' 
import Bloco from '../../assets/bloco.1.png'
import facebook from '../../assets/faceface.png'
import google from '../../assets/google.png'
import {MaterialIcons, Octicons} from '@expo/vector-icons'
import { themas } from "../../global/themes";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {useNavigation, NavigationProp} from '@react-navigation/native'

export function Login(){


    const navigation = useNavigation<NavigationProp<any>>()

    const [email, setEmail] = useState('Email123@gmail.com')
    const [password, setPassword] = useState('Senha123')
    const [showPassword, setShowPassword] = useState(true)
    const [loading, setLoading] = useState(false)

    async function getLogin(){
        try {
            setLoading(true)
            if(!email || !password){
                return Alert.alert('Atenção', 'Informe os campos obrigatórios.')
                
            }

            if(email === 'Email123@gmail.com' && password === 'Senha123'){
                navigation.reset({routes:[{name:"BottomRoutes"}]})
            }else{
                Alert.alert('Atenção','Email ou senha invalidos')
            }

        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Bloco} 
                    style={style.bloco} 
                    resizeMode="contain"
                />
                <Text style={style.text}>MyTask</Text>
            </View>
            <View style={style.boxMid}>
                <Input
                    onChangeText={(e) => setEmail(e)} 
                    value={email}
                    title="ENDEREÇO DE E-MAIL"
                    iconRightName="email"
                    IconRight={MaterialIcons}
                />
                <Input
                    value={password}
                    onChangeText={setPassword} 
                    title="SENHA"
                    iconRightName={showPassword?"eye":"eye-closed"}
                    IconRight={Octicons}
                    secureTextEntry={showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                />
            </View>
            <View style={style.boxBottom}>
                <Button style={style.button}
                    text="Entrar"
                    loading={loading}
                    onPress={() => getLogin()}
                />
            </View>

                <TouchableOpacity style={style.button1}>
                    <Image
                        source={google}
                        style={style.logo1}
                        resizeMode='contain'
                    />
                    <Text style={style.buttonText1}>
                        entrar com google
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button2}>
                    <Image
                        source={facebook}
                        style={style.logo2}
                        resizeMode='contain'    
                    />
                    <Text style={style.buttonText2}>
                        entrar com facebook
                    </Text>
                </TouchableOpacity >
            
            <Text style={style.textBottom}>Não tem conta? <Text style={{color:themas.colors.primary}}>Crie agora!</Text></Text>
        </View>
    )
}