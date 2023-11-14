import {Image, View, StyleSheet} from 'react-native'
import {Color} from '../../util/Color'
import {Subtitle} from '../primitives/Subtitle'

type Props = {
  image: string
  productImageTestID: string
}
export const ProductImage = ({image, productImageTestID}: Props) => {
  // FYI : just a temp check to image bcaz of fake API
  if (image.length > 0 && image.includes('jpg')) {
    return (
      <Image
        source={{uri: image}}
        resizeMethod="auto"
        style={styles.image}
        testID={productImageTestID}
      />
    )
  } else {
    return (
      <View
        testID={productImageTestID}
        style={[
          styles.image,
          {
            paddingLeft: 16,
            paddingTop: 16,
          },
        ]}>
        <Subtitle testID={productImageTestID} title={'Image not available'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Color.Grey[5],
    height: 128,
    width: 128,
    marginRight: 16,
  },
})
