'use strict';
import {Dimensions} from 'react-native';
export const IS_DEV = __DEV__;

export const VERSION = '1.0';
let {width, height} = Dimensions.get('window')
export const SCREEN_WIDTH = width
export const SCREEN_HEIGHT = height;