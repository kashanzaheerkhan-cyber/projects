import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Products from '../screens/product/Products'
import ProductDetail from '../screens/product/ProductDetail'
import {Loader} from '../components/loader/Loader'

const Stack = createNativeStackNavigator()

export const Navigation = () => {
  return (
    <NavigationContainer fallback={<Loader />}>
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen
          options={{
            title: 'Products',
          }}
          name="Products"
          component={Products}
        />
        <Stack.Screen
          name="ProductDetail"
          options={{
            title: 'Product Detail',
          }}
          component={ProductDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
