import { type Component } from 'vue'

export type BaseDataType<T> = {
  type: string
  props: T
}

export type BaseComponentType<T> = {
  type: Component
  props: T
}

export type HeaderProps = {
  title: string
}

export type ImageProps = {
  src: string
}

export type ButtonProps = {
  label: string
}

export type HeaderType = BaseDataType<HeaderProps>
export type ImageType = BaseDataType<ImageProps>
export type ButtonType = BaseDataType<ButtonProps>

export type HeaderComponentType = BaseComponentType<HeaderProps>
export type ImageComponentType = BaseComponentType<ImageProps>
export type ButtonComponentType = BaseComponentType<ButtonProps>

export type DataItem = HeaderType | ImageType | ButtonType
export type ComponentItem = HeaderComponentType | ImageComponentType | ButtonComponentType
