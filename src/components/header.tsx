import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather, AntDesign  } from '@expo/vector-icons'
import { Link } from 'expo-router'
import colors from 'tailwindcss/colors'

type HeaderProps = {
  title: string,
  cartQuantityItems?: number,
  Notifications?: number,
}

export function Header({title, cartQuantityItems= 0, Notifications=0}: HeaderProps){
  return (
    <View className='flex-row items-center border-b border-slate-800 pb-5 mx-5 '>
      <View className="flex-1">
        <Image source={require('../assets/logo.png')}className="h-6 w-32 "/>
        <Text className="text-zinc-50 font-heading mt-2">{title}</Text>
      </View>
      
      

      {Notifications > 0 && (
        <Link href='/cart' asChild>
          <TouchableOpacity className="relative" activeOpacity={0.5}>
            <View className=" top-2 z-10 -right-3.5 items-center justify-center bg-lime-300 w-4 h-4 rounded-full">
              <Text className="text-slate-950 font-bold text-xs ">{Notifications}</Text>
            </View>
            <AntDesign name="notification" size={24} color={colors.white} className="gap-5" />
          </TouchableOpacity>
        </Link>
      )}

      {cartQuantityItems > 0 && (
        <Link href='/cart' asChild>
          <TouchableOpacity className="relative" activeOpacity={0.5}>
            <View className=" top-2 z-10 -right-3.5 items-center justify-center bg-lime-300 w-4 h-4 rounded-full">
              <Text className="text-slate-950 font-bold text-xs ">{cartQuantityItems}</Text>
            </View>
            <Feather name='shopping-bag' color={colors.white} size={24}/>
          </TouchableOpacity>
        </Link>
      )}
    </View>
  )
}