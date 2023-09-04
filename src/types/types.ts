import { type THEME } from '@/consts/consts'

export type ThemeType = typeof THEME[keyof typeof THEME]
