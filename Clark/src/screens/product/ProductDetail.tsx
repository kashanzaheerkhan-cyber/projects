import {View, StyleSheet, ScrollView} from 'react-native'
import * as React from 'react'
import ProductService from '../../services/ProductService'
import {useEffect, useState} from 'react'
import Product from '../../models/Product'
import {Loader} from '../../components/loader/Loader'
import {RouteProp, useNavigation} from '@react-navigation/native'
import {ProductImage} from '../../components/product/ProductImage'
import {Color} from '../../util/Color'
import {Title} from '../../components/primitives/Title'
import {Subtitle} from '../../components/primitives/Subtitle'
import {ContentNotFound} from '../../components/empty-placeholder/ContentNotFound'

const productService = ProductService.instance
type Props = {
  route: RouteProp<
    {
      ProductDetail: {
        id: string
      }
    },
    'ProductDetail'
  >
}
export default function ProductDetail({route}: Props) {
  const {id} = route.params
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const navigation = useNavigation()

  useEffect(() => {
    getProduct()
    return () => setProduct(null)
  }, [id])

  const getProduct = async () => {
    setLoading(true)
    productService
      .get(id)
      .then(response => {
        setProduct(response.data)
        navigation.setOptions({
          title: response.data.title,
        })
      })
      .catch(reason => {
        setProduct(null)
        console.error(reason)
      })
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : product ? (
        <View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <View style={{flexDirection: 'row'}}>
              {product.images.map(image => (
                <ProductImage
                  image={image}
                  productImageTestID={'ProductImage_' + image}
                  key={image}
                />
              ))}
            </View>
          </ScrollView>

          <View style={styles.infoContainer}>
            <View style={styles.productInfo}>
              <Title title={`Title: ${''}`} testID="ProductItem_title" />
              <Subtitle
                title={product.title}
                testID="ProductItem_title_value"
              />
            </View>
            <View style={[styles.productInfo, {marginTop: 4}]}>
              <Title title={`Price: ${''}`} testID="ProductItem_price" />
              <Subtitle
                title={product.price}
                testID="ProductItem_price_value"
              />
            </View>
            <View style={[styles.productInfo, {marginTop: 4}]}>
              <Title
                title={`Description: ${''}`}
                testID="ProductItem_description"
              />
              <Subtitle
                title={product.description}
                testID="ProductItem_description_value"
              />
            </View>

            <View style={[styles.productInfo, {marginTop: 4}]}>
              <Title
                title={`Category: ${''}`}
                testID="ProductItem_description"
              />
              <Subtitle
                title={product.category.name}
                testID="ProductItem_category_value"
              />
              <ProductImage
                image={product.category.image}
                productImageTestID={'ProductImage_category_image'}
              />
            </View>
          </View>
        </View>
      ) : (
        <ContentNotFound />
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
  infoContainer: {
    backgroundColor: Color.Grey[2],
    padding: 16,
    width: '100%',
    borderRadius: 16,
    marginTop: 16,
  },
  productInfo: {
    flexDirection: 'row',
  },
})
