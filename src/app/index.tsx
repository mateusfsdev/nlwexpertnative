import { View } from 'react-native'
import { Header } from '../components/header'


export default function Home(){
return (
  <View className=' flex-1 mt-5'>
   <Header title='Faça seu pedido'/>
   <Header title='Ver carrinho'/>
   <Header title='Configurações'/>
  </View>
)

}