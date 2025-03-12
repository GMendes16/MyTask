import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../pages/login";
import { User } from "../pages/user";
import { BottomRoutes } from "./bottom.routes";

export function Routes(){
    
    const Stack = createStackNavigator()

    return(

        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{
                headerShown:false,
                cardStyle:{
                    backgroundColor:"#fff"
                }
            }}
        >
            
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="BottomRoutes"
                component={BottomRoutes}
            />


        </Stack.Navigator>

    )
}