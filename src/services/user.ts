import Vasya from 'Pages/ProfilePage/pics/Vasya-avatar.jpg'

export type UserType = {
    avatar: string
    name: string
    phoneNumber: number
    address: string
}

export let DEFAULT_USER: UserType = {
    name: 'Vasya Cat',
    phoneNumber: 92341352,
    avatar: Vasya,
    address: 'Nevskiy Prospect 1, Saint-Petersburg',
}
