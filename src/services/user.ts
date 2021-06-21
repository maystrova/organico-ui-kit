import Vasya from 'Pages/ProfilePage/pics/Vasya-avatar.jpg'

export type UserType = {
    avatar: string
    name: string
    surname: string
    phoneNumber: number
}

export const DEFAULT_USER: UserType = {
    name: 'Vasya',
    surname: 'Cat',
    phoneNumber: 92341352,
    avatar: Vasya,
}