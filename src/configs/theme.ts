export interface ThemeType {
    appBackground: string
    color: string
}

const DARK: ThemeType = { appBackground: '#171725', color: '#fff' }
const LIGHT: ThemeType = { appBackground: '#fff', color: 'black' }

export { DARK, LIGHT }
