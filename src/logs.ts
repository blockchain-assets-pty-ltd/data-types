
export type InvestorPortalAccessLogEntry = {
    date: Date
    clientId: number
}

export type ModificationLogEntry = {
    date: Date
    adminId?: number
    clientId?: number
    botId?: number
    data: string
    signature: string
}
