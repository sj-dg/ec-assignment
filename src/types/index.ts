import { type Component } from 'vue'

export type BaseDataType<T> = {
  type: string
  props: T
}

export type BaseComponentType<T> = {
  component: Component
  props: T
}

export type HeaderProps = {
  title: string
  size: 'sm' | 'md' | 'lg' | 'xl'
}

export type ImageProps = {
  src: string
  alt: string
  rounded: 'none' | 'sm' | 'md' | 'lg' | 'full'
}

export type ButtonProps = {
  label: string
  color: 'blue' | 'green' | 'red' | 'yellow'
}

export type CardProps = {
  title: string
  content: string
}

export type HeaderType = BaseDataType<HeaderProps>
export type ImageType = BaseDataType<ImageProps>
export type ButtonType = BaseDataType<ButtonProps>
export type CardType = BaseDataType<CardProps>

export type HeaderComponentType = BaseComponentType<HeaderProps>
export type ImageComponentType = BaseComponentType<ImageProps>
export type ButtonComponentType = BaseComponentType<ButtonProps>
export type CardComponentType = BaseComponentType<CardProps>

export type DataItem = HeaderType | ImageType | ButtonType | CardType
export type ComponentItem =
  | HeaderComponentType
  | ImageComponentType
  | ButtonComponentType
  | CardComponentType
