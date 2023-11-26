import React from "react";
import { createDrawerNavigator }  from  "@react-navigation/drawer";
import ProfileScreen from "../screens/ProfileScreen";
import SettingScreen from "../screens/SettingScreen";

const Drawers=createDrawerNavigator()
export function Drawernavigation() {
    return(
        <Drawers.Navigator>
            <Drawers.Screen name='ProfileScreen' component={ProfileScreen}/>
            <Drawers.Screen name='SetingScreen' component={SettingScreen}/>
        </Drawers.Navigator>
    )
}