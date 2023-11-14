import React from 'react'
import {StyleSheet, TextStyle, TextInput, TextInputProps} from 'react-native'
import {Color} from '../../util/Color'

type Props = {
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  labelStyle?: TextStyle
  maxLength?: number
  props?: TextInputProps
  testID: string
}

export const AppInput = ({
  value,
  placeholder,
  onChange,
  props,
  testID,
}: Props): JSX.Element => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={Color.Grey[6]}
      style={styles.textInputStyle}
      value={value}
      onChangeText={onChange}
      {...props}
      testID={testID}
    />
  )
}

const styles = StyleSheet.create({
  textInputStyle: {
    minHeight: 48,
    borderColor: Color.Grey[8],
    borderWidth: 0.5,
    borderRadius: 8,
    paddingLeft: 16,
  },
})

AppInput.defaultProps = {
  value: '',
  placeholder: '',
  onChange: null,
  props: {},
}
