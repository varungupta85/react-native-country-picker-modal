import { Dimensions, Platform } from 'react-native'

const { height, width } = Dimensions.get('window')

const isIphoneX = () => {
  let dimen = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      (dimen.height === 896 || dimen.width === 896))
  )
}

// Remove the status bar height since the modal view does not cover this area
const ANDROID_MINUS_HEIGHT = 24
const iPHONE_X_MINUS_HEIGHT = 34
const iPhoneX = isIphoneX()

const getHeight = () =>
  Platform.OS === 'android'
    ? height - ANDROID_MINUS_HEIGHT
    : iPhoneX
    ? height - iPHONE_X_MINUS_HEIGHT
    : height

export const getWidthPercent = percentage => (width * percentage) / 100
export const getHeightPercent = percentage => (getHeight() * percentage) / 100
export const getPercent = percentage =>
  (((getHeight() + width) / 2) * percentage) / 100
export const getTop = () => (iPhoneX ? 44 : 0)
export const getBottom = () => (iPhoneX ? 34 : 0)
