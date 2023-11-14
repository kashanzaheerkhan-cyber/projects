import {StyleSheet, View} from 'react-native'
import React from 'react'
import {Title} from '../primitives/Title'

export const ContentNotFound = () => (
  <View style={styles.container}>
    <Title title="Content not found " testID={'ContentNotFound'} />
  </View>
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
})
