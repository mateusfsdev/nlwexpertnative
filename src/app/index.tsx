import { View, FlatList } from 'react-native'
import { CategoryButton } from '../components/categoryButton'
import { CATEGORIES } from '../utils/data/products'
import { Header } from '../components/header'



export default function Home(){
return (
  <View className=' flex-1 mt-5'>
   <Header title='Faça seu pedido'cartQuantityItems={5}/>

   <FlatList 
    data={CATEGORIES}
    keyExtractor={(item) => item}
    renderItem={({ item}) => <CategoryButton title={item}/>}
    horizontal
    className='max-h-10 mt-5'
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ gap: 12, paddingHorizontal:20 }}
  />

  </View>
)

}