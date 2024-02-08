import { View, Image, Text } from "react-native";

type HeaderProps = {
  title: string
}

export function Header({title}: HeaderProps){
  return (
    <View className='flex-row items-center border-b border-slate-800 pb-5 mx-5 '>
      <View className="flex-1">
        <Image source={require('../assets/logo.png')}
        className="h-6 w-32 "></Image>
        <Text className="text-zinc-100 text-xl font-heading mt-2">{title}</Text>

      </View>
    </View>
  )
}