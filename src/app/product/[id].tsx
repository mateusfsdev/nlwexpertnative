import { View } from "react-native";
import { useLocalSearchParams } from 'expo-router'

export default function Produuct(){
  const { id } = useLocalSearchParams()
  
  return (
    <View className='flex-1'></View>
  )
}