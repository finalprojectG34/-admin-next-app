import {ThemeProvider} from '@mui/material'


import config from '../config'
import themes from '../styles/themes'

import {withApollo} from '../src/hooks/useIsAuth'

import '../styles/globals.css'

function MyApp({Component, pageProps}) {
    return (

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

    )
}

export default withApollo({ssr: false})(MyApp)
