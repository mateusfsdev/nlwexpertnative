import { View, Text, ScrollView, Alert} from "react-native"
import { Feather} from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Product } from "../components/product"
import { Header } from '@/src/components/header'

import { ProductCartProps, useCartStore } from "../stores/cartStore"
import { formatCurrency } from "../utils/functions/formartCurrency"
import { Input } from "../components/input"
import { Button } from "../components/buttom"
import { LinkButton } from "../components/linkButton"

export default function Cart(){
  const cartStore = useCartStore()
  const total = formatCurrency(cartStore.products.reduce(
    (total, product) => total + product.price * product.quantity,
    0)
  )
    function handleProductRemov(product: ProductCartProps){
      Alert.alert('Remover Item', `Deseja remmover ${product.title} do carrinho?`,[
        {
          text: 'Cancelar'
        },
        {
          text: 'Remover',
          onPress: () => cartStore.remove(product.id)
        },
      ])
    }


  return (
    <View className='flex-1 pt-8'>
      <Header title='Seu carrinho'/>

      <KeyboardAwareScrollView>

        <ScrollView> 
          <View className="p-5 flex-1">
            {cartStore.products.length > 0 ?(
            <View className="border-b border-slate-700">
              {cartStore.products.map((product) => (
              <Product
              key={product.id}
              data={product}
              onPress={() => handleProductRemov(product)}/>
            ))}
            </View>
            ):(
            <Text className='font-body text-zinc-200 text-center my-8'>
              Poxa, seu carrinho esta vazio!😴😴
            </Text>
            )}

          <View className="flex-row gap-2 items-center mt-5 mb-4">
            <Text className='text-zinc-200 text-xl font-subtitle'>Total:</Text>



            <Text className='text-lime-400 text-2xl font-heading'>
              {total}
            </Text>
          </View>
          <Input placeholder='Por favor informe o endereço de entrega completo! bairro rua numero e complemento'/>
        </View>
        </ScrollView>
        </KeyboardAwareScrollView>

        <View className="p-5 gap-5">
          <Button>
            <Button.Text>Confirmar Pedido</Button.Text>
            <Button.Icon>
              <Feather name='arrow-right-circle' size={24}/>
            </Button.Icon>
          </Button>

          <LinkButton title='voltar ao menuu' href='/'></LinkButton>

        </View>
    </View>
  )
}