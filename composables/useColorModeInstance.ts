export function useColorModeInstance() {
    const colorMode = useColorMode()
  
    // * State
    const currentTheme = useState('currentTheme', () => 'light')
  
    // * Méthodes
    const toggleTheme = (): void => {
      colorMode.value === 'light' ? colorMode.preference = 'dark' : colorMode.preference = 'light'
    }
  
    // * Watcher
    watch(colorMode, (): void => {
      currentTheme.value = colorMode.value
    })
  
    return { toggleTheme, currentTheme }
  }
  