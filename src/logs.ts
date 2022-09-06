import { DateTime } from "luxon"

export type InvestorPortalAccessLogEntry = {
    date: DateTime
    clientId: number
}

export type ModificationLogEntry = {
    date: DateTime
    adminId?: number
    clientId?: number
    botId?: number
    data: string
    signature: string
}
