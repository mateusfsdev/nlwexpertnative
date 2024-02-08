import { useState, useRef } from 'react'

import { CategoryButton } from '../components/categoryButton'
import { Product } from '../components/product'
import { Header } from '../components/header'

import { View, FlatList, SectionList, Text } from 'react-native'
import { CATEGORIES, MENU } from '../utils/data/products'

export default function Home(){
  const [category, setCategory] = useState(CATEGORIES[0])

  const sectionListRef = useRef<SectionList>(null)

  function handleCategorySelect(selectedCategory: string){
    setCategory(selectedCategory)

    const sectionIndex = CATEGORIES.find((category) =>
      category === selectedCategory
    )
    if(sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        itemIndex: 0,
        sectionIndex,

      })
    }   
  }

return (
  <View className=' flex-1 mt-5'>
   <Header title='Faça seu pedido'cartQuantityItems={5}/>

   <FlatList 
    data={CATEGORIES}
    keyExtractor={(item) => item}
    renderItem={({ item}) =>
      <CategoryButton
      isSelected={item === category}
      title={item} onPress={() => handleCategorySelect(item)}/>}
    horizontal
    className='max-h-10 mt-5'
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ gap: 12, paddingHorizontal:20 }}
  />

  <SectionList 
    ref={sectionListRef}
    sections={MENU}
    keyExtractor={(item) => item.id}
    stickySectionHeadersEnabled={false}
    renderItem={({item}) => (
      <Product data={item}/>
    )}
    renderSectionHeader={({section: {title} }) => (
    <Text className='text-zinc-50 text-xl font-heading mt-8 mb-3 '>
      {title}
    </Text>
  )}
  className='flex-1 p-5'
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{paddingBottom: 100}}
  />

  </View>
)

}