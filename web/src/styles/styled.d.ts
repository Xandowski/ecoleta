import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    fonts: {
      title: string
      text: string
    },
    textWeight: {
      title: number
      text: number
    },
    colors: {
      background: string
      itemBackground: string
      buttonColor: string
      buttonColorDark: string
      secondaryButtonColor: string
      secondaryButtonColorDark: string
      text: string
      title: string
    }
  }
}