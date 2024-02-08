import { create } from 'zustand'
import { ProductProps } from '../utils/data/products'
import { createJSONStorage, persist } from 'zustand/middleware'
import * as cartInMemory from '@/src/stores/helpers/cartInMemory'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type ProductCartProps = ProductProps & {
  quantity: number
}

type StateProps = {
  products: ProductCartProps[]
  add: (product: ProductProps) => void
  remove: (productId: string) => void
}

export const useCartStore = create(
  persist<StateProps>((set) => ({
  products: [],
  add: (product: ProductProps) => set((state) => ({
    products: cartInMemory.add(state.products, product),
  })),
  remove: (productId: string) =>
  set((state) =>({
    products:  cartInMemory.remove(state.products, productId)
  }))
}), {
  name:'nlw-expert:cart',
  storage: createJSONStorage(() => AsyncStorage)

}
))