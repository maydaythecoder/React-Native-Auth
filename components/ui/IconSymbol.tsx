import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle, TextStyle } from 'react-native';

const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'eye.fill': 'visibility',
  'heart.fill': 'favorite',
  'star.fill': 'star',
  'bubble.fill': 'chat-bubble',
  'plus.app.fill': 'add-box',
  'building.2.fill': 'apartment',
  'person.fill': 'person',
  'newspaper.fill': 'article'
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof MaterialIcons>['name']
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons 
    color={color} 
    size={size} 
    name={MAPPING[name] || 'error'}
    style={style as StyleProp<TextStyle>} 
  />;
}
