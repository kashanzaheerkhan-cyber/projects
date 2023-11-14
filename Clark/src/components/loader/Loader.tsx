import React from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native'
import {Color} from '../../util/Color'

export const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="small" color={Color.AccentScale.Blue[0]} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
})
