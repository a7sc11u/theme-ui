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
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ui.h1
          sx={{
            fontFamily: 'body',
            color: 'text',
            fontSize: 8,
            mb: 0,
          }}>
          Theme
          <ui.span sx={{ color: 'secondary' }}>UI</ui.span>
        </ui.h1>
        <ui.h2 sx={{ fontFamily: 'body', fontSize: 5, mt: 0 }}>
          The Design Graph Framework
        </ui.h2>
      </ui.main>
    </ThemeProvider>
  )
}

export default App
