import {StyleSheet, Text, TextInputProps} from 'react-native'
import {Color} from '../../util/Color'

type Props = {
  props?: TextInputProps
  title: string
  testID: string
}
export const Title = ({props, testID, title}: Props) => (
  <Text style={styles.text} {...props} testID={testID}>
    {title}
  </Text>
)

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Color.Grey[8],
  },
})
