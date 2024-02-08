import { SafeAreaView} from 'react-native'
import { Loading } from '../components/loading'
import { Slot } from "expo-router";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter'

export default function Layout(){
   const [ fontLoaded ] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  })

  if (!fontLoaded) {
    return <Loading/>
  }

  return (
    <SafeAreaView className='flex-1 bg-slate-950'>
      <Slot/>
    </SafeAreaView>
  )
  
}