import type { DateTime } from "luxon"

export type Asset = {
    assetName: string
    assetSymbol: string | null
    balance: number | null
    price: number | null
}

export type AssetBalance = {
    assetName: string
    sourceId: string
    balance: number
    lastUpdatedAt: DateTime
}

export type AssetPrice = {
    assetName: string
    price: string
    lastUpdatedAt: DateTime
}

export type AssetSettings = {
    assetName: string
    assetSymbol: string | null
    manualBalance: number | null
    manualPrice: number | null
    displayRank: number | null
}

export type AssetSource = {
    id: number
    name: string
    type: string
    description: string | null
    readBalances: boolean
    address: string | null
    network: string | null
}
