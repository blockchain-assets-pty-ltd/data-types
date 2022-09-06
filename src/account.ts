
export type Account = {
    id: number
    name: string
    entityType: string
    address: string
    suburb: string
    state: string
    postcode: string
    country: string
    oldId: string | null
    unitsHeld: number | null
    totalInvested: number | null
}

export type TaxFileNumber = {
    taxFileNumber: string
    accountId: number
    clientId: number
}
