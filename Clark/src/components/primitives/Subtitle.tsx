import {StyleSheet, Text, TextInputProps} from 'react-native'
import {Color} from '../../util/Color'

type Props = {
  props?: TextInputProps
  title: string | number
  testID: string
}
export const Subtitle = ({props, testID, title}: Props) => (
  <Text style={styles.text} {...props} testID={testID}>
    {title}
  </Text>
)

const styles = StyleSheet.create({
  text: {
    fontWeight: '300',
    fontSize: 14,
    color: Color.Grey[9],
    flex: 1,
  },
})
