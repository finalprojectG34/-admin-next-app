import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@mui/material'

import { client } from '../src/apollo/client'
// import {store} from "../src/store";
import themes from '../styles/themes'
import config from '../config'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useLocalStorage from '../src/hooks/useLocalStorage'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [data] = useLocalStorage('store', null)

  useEffect(() => {
    if (data) {
      router.push('/dashboard')
    } else {
      router.push('/login')
    }
  }, [])
  return (
    <ApolloProvider client={client}>
      {/*<Provider store={store}>*/}
      <ThemeProvider
        theme={themes({
          isOpen: [], // for active default menu
          fontFamily: config.fontFamily,
          borderRadius: config.borderRadius,
          opened: false,
        })}
      >
        <Component {...pageProps} />
      </ThemeProvider>
      {/*</Provider>*/}
    </ApolloProvider>
  )
}

export default MyApp
