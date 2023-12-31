import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui'
import { render } from 'preact'

import { App } from './app.tsx'

import '@vkontakte/vkui/dist/cssm/styles/themes.css'

const AppProvider = () => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  )
}

// biome-ignore lint: It's OK
render(<AppProvider />, document.getElementById('app')!)
