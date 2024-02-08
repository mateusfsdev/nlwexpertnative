import { View, Image, Text } from "react-native";
import { useLocalSearchParams } from 'expo-router'
import { PRODUCTS } from "@/src/utils/data/products";
import { formatCurrency } from "@/src/utils/functions/formartCurrency";
import { Feather } from '@expo/vector-icons'

import { LinkButton } from '@/src/components/linkButton'
import { Button } from '@/src/components/buttom'
import React from "react";

export default function Product(){
  const { id } = useLocalSearchParams()

  const product = PRODUCTS.filter((item) => item.id === id)[0]
  
  return (
    <View className='flex-1'>
      <Image 
        source={product.cover}
        className="w-full h-52 rounded-b-md"
        resizeMode="cover"
      />

      <View className="p-5 mt-8 flex-1">
        <Text className='text-lime-400 text-2xl font-heading my-2'>
          {formatCurrency(product.price)}
        </Text>

        <Text className="text-zinc-100 font-body text-base leading-6 mb-6">
          {product.description}
        </Text>

        {
          product.ingredients.map((ingredient) => (
            <Text
            key={ingredient}
            className="text-slate-400 font-body text-base leading-6"
            >
              {'\u2022'}{ingredient}
            </Text>
          ))
        }
      </View>

      <View className='p-5 pb-8 gap-5'>
        <Button>
            <Button.Icon>
              <Feather name='plus-circle' size={20}/>
            </Button.Icon>
            <Button.Text>
              Adicionar ao carrinho 
            </Button.Text>
        </Button>

        <LinkButton title='Voltar ao cardapio' href='/' />

      </View>
    </View>
  )
}