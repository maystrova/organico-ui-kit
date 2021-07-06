export interface ThemeType {
    appBackground: string
    color: string
    menuBackground: string
}

const DARK: ThemeType = {
    appBackground: '#171725',
    color: '#fff',
    menuBackground: 'rgba(29, 35, 53, 1)',
}
const LIGHT: ThemeType = {
    appBackground: '#fff',
    color: 'black',
    menuBackground: '#fff',
}

export { DARK, LIGHT }
