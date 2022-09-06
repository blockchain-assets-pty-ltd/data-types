
export type Account = {
    id: number
    name: string
    entityType: string
    address: string
    suburb: string
    state: string
    postcode: string
    country: string
    oldId?: string
    unitsHeld?: number
    totalInvested?: number
}

export type TaxFileNumber = {
    taxFileNumber: string
    accountId: number
    clientId: number
}
