import type { DateTime } from "luxon"

export type UnitHoldersRegisterEntry = {
    date: DateTime
    vintage: number
    accountId: number
    unitsAcquiredOrRedeemed: number
    unitPrice: number
    fundsInOrOut: number
}

export type FeeCapitalisationsEntry = {
    date: DateTime
    vintage: number
    valueAtCapitalisationDate: number
    managementFee: number
    highWaterMark: number
    performanceFee: number
}

export type TaxAllocationsEntry = {
    date: DateTime
    accountId: number
    discountCapitalGains: number
    nonDiscountCapitalGains: number
    income: number
    cashDistribution: number
    eventDescription: string
}

export type FundMetricsEntry = {
    date: DateTime
    unitPrice: number | null
    aum: number | null
}

export type AssetSnapshotsEntry = {
    date: DateTime
    assetName: string
    balance: number
    price: number
}
