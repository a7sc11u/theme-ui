import React from 'react'
import { ThemeProvider } from 'theme-ui'
import ui from '@theme-ui/markup'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ui.main
        sx={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ui.h1
          sx={{
            fontFamily: 'body',
            color: 'text',
            fontSize: 8,
          }}>
          Theme
          <ui.span sx={{ color: 'secondary' }}>UI</ui.span>
        </ui.h1>
      </ui.main>
    </ThemeProvider>
  )
}

export default App
