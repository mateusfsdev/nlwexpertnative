import { View } from "react-native"
import {Header} from '@/src/components/header'
import { LinkButton } from "../components/linkButton"

export default function About(){
  return (
    <View className='flex-1 pt-8'>
      <Header title='Sobre sonna empresa!'></Header>
      <LinkButton title='voltar' href='/'></LinkButton>
    </View>
  )
}