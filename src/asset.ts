
export type AssetBalance = {
    assetName: string
    sourceId: string
    balance: number
    lastUpdatedAt: Date
}

export type AssetPrice = {
    assetName: string
    price: string
    lastUpdatedAt: string
}

export type AssetSettings = {
    assetName: string
    assetSymbol: string
    manualBalance?: number
    manualPrice?: number
}

export type AssetSource = {
    id: number
    name: string
    type: string
    description?: string
    readBalances: boolean
    address?: string
    network?: string
}
