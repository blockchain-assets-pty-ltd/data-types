
export type UnitHoldersRegisterEntry = {
    date: Date
    vintage: number
    accountId: number
    unitsAcquiredOrRedeemed: number
    unitPrice: number
}

export type FeeCapitalisationsEntry = {
    date: Date
    vintage: number
    valueAtCapitalisationDate: number
    managementFee: number
    highWaterMark: number
    performanceFee: number
}

export type TaxAllocationsEntry = {
    date: Date
    accountId: number
    discountCapitalGains: number
    nonDiscountCapitalGains: number
    income: number
    cashDistribution: number
    eventDescription: string
}

export type FundMetricsEntry = {
    date: Date
    unitPrice: number
    aum: number
}
