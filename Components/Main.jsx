import { View, Text } from 'react-native'
import React from 'react'
import Products from './Products'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './Cart';



const Main = () => {
  
   const Stack = createNativeStackNavigator();



  return (
    

    

   <NavigationContainer>
         
         
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Products} />
        <Stack.Screen name="Cart" component={Cart } />
      </Stack.Navigator>


   </NavigationContainer>
    
    
    
    
    
    
    
    // <View>
    //    <Products/>
    // </View>
 
 
 
 
 
 )
}

export default Main 