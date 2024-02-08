import { Image, ImageProps, TouchableOpacity, TouchableOpacityProps, View, Text } from "react-native";
import { forwardRef } from 'react'


type ProductDataProps = {
  title: string,
  description: string,
  thumbnail: ImageProps
}
type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps
}

export const Product = forwardRef<TouchableOpacity, ProductProps>(({ data, ...rest },
  ref) => {
  return (
    <TouchableOpacity ref={ref}className="w-full flex-row items-center pb-4"
    {...rest}
    >
    <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />

    <View className='flex-1 ml-3 '>
      <Text className="text-zinc-50 font-subtitle text-base flex-1 ">{data.title}</Text>
      <Text className="text-zinc-400  text-xs leading-5 mt-0.5 ">{data.description}</Text>
    </View>
  </TouchableOpacity>
  )
})