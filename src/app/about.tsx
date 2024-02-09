import {  View, Text, Image, ScrollView } from "react-native"
import {Header} from '@/src/components/header'
import { LinkButton } from "../components/linkButton"



export default function About(){
  return (
    <View className='flex-1 pt-8'>
      <Header title='Sobre sonna empresa!'></Header>
      <View className="p-5 gap-5">

        <ScrollView>
          <View className='items-center border-b border-slate-800 pb-5 mx-5'>
            <Text className='text-zinc-100 font-bold text-base mt-4 mb-6'>Vem conhecer um pouco mais quem somos!</Text>
            <Text className='text-zinc-100 font-bold text-base mb-4 p-2'>Somos uma empresa no ramo alimenticio a mais de 15 anos, com especialidades em lanches mas tambem trabalhamos com marmitas na hora do almoço</Text>
            <Text className='text-zinc-100  text-base mb-4 p-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus maiores error nulla corporis voluptatem ad laboriosam sunt repudiandae? Suscipit nostrum praesentium sequi ducimus voluptatibus amet quasi hic similique magni.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iste delectus eum ducimus architecto fugiat officiis explicabo tempore ad exercitationem quaerat veniam, iure quia excepturi perferendis quae quo quod ab.</Text>
            <Text className='text-zinc-100  text-base mb-4 p-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus maiores error nulla corporis voluptatem ad laboriosam sunt repudiandae? Suscipit nostrum praesentium sequi ducimus voluptatibus amet quasi hic similique magni.xcepturi perferendis quae quo quod ab.</Text>
            <Image source={require('../assets/logo.png')}className="h-8 w-48 mt-6 "/>
          </View>
          <LinkButton href='/' title='Voltar ao menu' className="mb-10 text-bold" />
        </ScrollView>
      </View>
    </View>
  )
}