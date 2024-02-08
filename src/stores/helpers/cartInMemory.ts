import { ProductProps } from "@/src/utils/data/products";
import { ProductCartProps } from "../cartStore";

export function add(products: ProductCartProps[], newProduct: ProductProps){
  const existngProduct = products.find(({ id }) => newProduct.id === id)

  if(existngProduct) {
    return products.map((product) => product.id === existngProduct.id
    ? {...product, quantity: product.quantity + 1 }
    : product
    )
  }
  return [ ...products, {...newProduct, quantity: 1} ]
}

export function remove(products: ProductCartProps[], productRemoveId: string){
  const updateProducts = products.map((product) =>
  product.id === productRemoveId ? {
    ...product,
    quantity: product.quantity > 1 ? product.quantity - 1 : 0,
  }
  : product
  )

  return updateProducts.filter((product) => product.quantity > 0)
}