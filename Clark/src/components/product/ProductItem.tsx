import {
  Animated,
  Easing,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import Product from '../../models/Product'
import {Color} from '../../util/Color'
import React, {useEffect, useRef} from 'react'
import {ProductImage} from './ProductImage'
import {Title} from '../primitives/Title'
import {Subtitle} from '../primitives/Subtitle'

type Props = {
  product: Product
  onViewProduct: (product: Product) => void
}

export const ProductItem = ({product, onViewProduct}: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start()
  }, [fadeAnim])

  return (
    <TouchableOpacity onPress={() => onViewProduct(product)}>
      <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
        <ProductImage
          image={product.images[0] || ''}
          productImageTestID={'ProductItem_image'}
        />
        <View style={styles.infoContainer}>
          <View style={styles.productInfo}>
            <Title title={`Title: ${''}`} testID="ProductItem_title" />
            <Subtitle
              props={{
                style: {
                  maxWidth: 120,
                },
              }}
              title={product.title}
              testID="ProductItem_title_value"
            />
          </View>
          <View style={[styles.productInfo, {marginTop: 4}]}>
            <Title title={`Price: ${''}`} testID="ProductItem_price" />
            <Subtitle title={product.price} testID="ProductItem_price_value" />
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
    flexDirection: 'row',
  },
  image: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Color.Grey[5],
    height: 128,
    width: 128,
    marginRight: 16,
  },
  infoContainer: {
    backgroundColor: Color.Grey[2],
    padding: 16,
    width: '100%',
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
