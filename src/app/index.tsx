import { View } from 'react-native'
import { Header } from '../components/header'
import { CategoryButton } from '../components/categoryButton'


export default function Home(){
return (
  <View className=' flex-1 mt-5'>
   <Header title='Faça seu pedido'cartQuantityItems={5}/>
  <View className='flex-row justify-evenly'>
    <CategoryButton title='lanche do dia' isSelected></CategoryButton>
    <CategoryButton title='Combos'></CategoryButton>
  </View>

  </View>
)

}