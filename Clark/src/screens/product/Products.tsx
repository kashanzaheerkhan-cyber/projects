import {View, StyleSheet, FlatList} from 'react-native'
import * as React from 'react'
import ProductService from '../../services/ProductService'
import Product from '../../models/Product'
import {useEffect, useState} from 'react'
import {ProductItem} from '../../components/product/ProductItem'
import {Color} from '../../util/Color'
import {useNavigation} from '@react-navigation/native'
import {Loader} from '../../components/loader/Loader'
import {AppInput} from '../../components/input/AppInput'
import {ContentNotFound} from '../../components/empty-placeholder/ContentNotFound'

const productService = ProductService.instance
export default function Products() {
  const [products, setProducts] = useState<Array<Product>>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [query, setQuery] = useState<string | null>(null)
  const navigation = useNavigation()

  useEffect(() => {
    fetchProducts()
    return () => setProducts([])
  }, [query])

  const fetchProducts = async () => {
    setIsLoading(true)
    const newQueryParams = new URLSearchParams()
    if (query !== null) {
      newQueryParams.append('title', query)
    }
    productService.list(newQueryParams).then(response => {
      setIsLoading(false)
      setProducts(response.data)
    })
  }

  const onViewProduct = (product: Product) => {
    navigation.navigate('ProductDetail', {
      id: product.id,
    })
  }

  return (
    <View style={styles.container}>
      <AppInput
        value={query ?? ''}
        onChange={setQuery}
        testID={'AppInput_search_products'}
        placeholder="Please search"
      />
      <View style={{marginTop: 16}} />
      {isLoading ? (
        <Loader />
      ) : products.length === 0 ? (
        <ContentNotFound />
      ) : (
        <FlatList
          data={products}
          renderItem={({item}) => (
            <ProductItem product={item} onViewProduct={onViewProduct} />
          )}
          keyExtractor={item => item.id.toString()}
          testID="Products_list"
          onRefresh={fetchProducts}
          refreshing={isLoading}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Grey[0],
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
})
