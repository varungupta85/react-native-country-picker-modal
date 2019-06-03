import { StyleSheet, PixelRatio } from 'react-native';
import { getWidthPercent, getHeightPercent, getTop, getBottom } from './ratio';

export default StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    width: getWidthPercent(100),
    height: getHeightPercent(100),
  },
  contentContainer: {
    width: getWidthPercent(100),
    backgroundColor: 'white',
  },
  touchFlag: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    resizeMode: 'contain',
    width: 25,
    height: 19,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#eee',
    opacity: 0.8,
  },
  itemCountry: {
    flexDirection: 'row',
    height: getHeightPercent(7),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemCountryFlag: {
    justifyContent: 'center',
    alignItems: 'center',
    height: getHeightPercent(7),
    width: getWidthPercent(15),
  },
  itemCountryName: {
    justifyContent: 'center',
    width: getWidthPercent(70),
    borderBottomWidth: 2 / PixelRatio.get(),
    borderBottomColor: '#ccc',
    height: getHeightPercent(7),
  },
  countryName: {
    fontSize: getHeightPercent(2.2),
  },
  letters: {
    position: 'absolute',
    height: getHeightPercent(100),
    top: getTop(),
    bottom: getBottom(),
    right: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    height: getHeightPercent(3.3),
    width: getWidthPercent(4) + 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  letterText: {
    textAlign: 'center',
    fontSize: getHeightPercent(2.2),
  },
});
