export interface ThemeType {
    appBackground: string
    color: string
    menuBackground: string
    searchBackground: string
}

const DARK: ThemeType = {
    appBackground: '#171725',
    color: '#fff',
    menuBackground: 'rgba(29, 35, 53, 1)',
    searchBackground: 'rgba(29, 35, 53, 1)',
}
const LIGHT: ThemeType = {
    appBackground: '#fff',
    color: 'black',
    menuBackground: '#fff',
    searchBackground: 'rgba(241,241,245,1)',
}

export { DARK, LIGHT }
