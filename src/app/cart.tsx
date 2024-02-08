import { View, Text, ScrollView} from "react-native"

import { Product } from "../components/product"
import { Header } from '@/src/components/header'

import { useCartStore } from "../stores/cartStore"
import { formatCurrency } from "../utils/functions/formartCurrency"

export default function Cart(){
  const cartStore = useCartStore()
const total = formatCurrency(cartStore.products.reduce((total, product) => total + product.price * product.quantity, 0))

  return (
    <View className='flex-1 pt-8'>
      <Header title='Seu carrinho'/>
      <ScrollView> 
      {cartStore.products.length > 0 ?(
        <View className="p-5 flex-1">
        {cartStore.products.map((product) => (
          <Product key={product.id} data={product}/>
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
      </ScrollView>
    </View>
  )
}