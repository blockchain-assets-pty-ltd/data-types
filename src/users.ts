
export type Administrator = {
    id: number
    firstName: string
    lastName: string
    email: string
    ethereumAddress: string
    telegramUsername: string
}

export type Client = {
    id: number
    firstName: string
    lastName?: string
    email: string
    lastAccessedAt?: Date
    accessesInLast7Days?: number
    totalAccesses?: number
}

export type Bot = {
    id: number
    name: string
    ethereumAddress: string
}
