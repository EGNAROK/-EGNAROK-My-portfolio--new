import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { store } from './store/store.ts'
import { applyTheme } from './core/providers/applyTheme.tsx'
import { darkModeThemePalette, lightModeThemePalette } from './core/configs/index.ts'
import App from './App.tsx'
import './index.scss'
import './i18n.ts';

const theme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
const palette = theme === 'light' ? lightModeThemePalette : darkModeThemePalette;
applyTheme(palette);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
