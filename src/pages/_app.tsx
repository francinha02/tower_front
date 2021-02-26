import GlobalStyle from '../styles/global'
import NextApp from 'next/app'

import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

// const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
//   const jssStyles = document.querySelector('#jss-server-side')
//   if (jssStyles && jssStyles.parentNode) {
//     jssStyles.parentNode.removeChild(jssStyles)
//   }
//   return (
//     <ThemeProvider theme={theme}>
//       <Component {...pageProps} />
//       <GlobalStyle />
//     </ThemeProvider>
//   )
// }

export default class MyApp extends NextApp {
  // remove it here
  componentDidMount(): void {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    )
  }
}

// export default MyApp
