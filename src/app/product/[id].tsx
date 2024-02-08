import { View, Image, Text } from "react-native";
import { useLocalSearchParams } from 'expo-router'
import { PRODUCTS } from "@/src/utils/data/products";
import { formatCurrency } from "@/src/utils/functions/formartCurrency";

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
      </View>
    </View>
  )
}