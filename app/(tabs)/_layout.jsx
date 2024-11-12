import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect} from'expo-router'
import { icons } from '../../constants'

const TabIcon=({icon, color, name, focused})=>{
    return (
        <View>
            <Image style={{width:25, height:25}}
                source={icon}
                resizeMode="contain"
                className="w-0 h-0"
            />
        </View>
    )
}


const TabsLayout = () => {
  return (
    <>
        <Tabs>

            <Tabs.Screen
                name="home"
                options={{
                    title:'Home',
                    headerShown:false,
                    tabBarIcon: ({color, focused}) =>(
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="cart"
                options={{
                    title:'Cart',
                    headerShown:false,
                    tabBarIcon: ({color, focused}) =>(
                        <TabIcon
                            icon={icons.cart}
                            color={color}
                            name="Cart"
                            focused={focused}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="payment"
                options={{
                    title:'Payment',
                    headerShown:false,
                    tabBarIcon: ({color, focused}) =>(
                        <TabIcon
                            icon={icons.payment}
                            color={color}
                            name="Payment"
                            focused={focused}
                        />
                    )
                }}
            />  

            <Tabs.Screen
                name="profile"
                options={{
                    title:'Profile',
                    headerShown:false,
                    tabBarIcon: ({color, focused}) =>(
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            name="Profile"
                            focused={focused}
                        />
                    )
                }}
            />    
        

            

    

        </Tabs>
    </>
    
  )
}

export default TabsLayout;