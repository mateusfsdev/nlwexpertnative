import { View, ActivityIndicator } from "react-native";

export function Loading(){
  return (
    <View className='flex-1 items-center justify-center bg-slate-950'>
      <ActivityIndicator color='#97ff0f' size="small"/>
    </View>
  )
}