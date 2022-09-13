import type { DateTime } from "luxon"
import { UnitHoldersRegisterEntry, FeeCapitalisationsEntry } from "./ledgers"

export type VintageData = {
    id: number
    creationDate: DateTime

    uhrEntries: UnitHoldersRegisterEntry[]
    initialCapitalInvested: number
    initialUnitsAcquired: number
    unitsRemainingAtValuationDate: number
    unitsRedeemedOnValuationDate: number

    latestFcEntry: FeeCapitalisationsEntry | undefined
    previousMoneyRedeemedOnValuationDate: number
    previousNetValueBeforePF: number
    previousNetValueAfterPF: number
    previousHighWaterMark: number
    wasPreviousPerformanceFeePaidOut?: boolean

    valueAtValuationDate: number

    accruedManagementFee: number
    payableManagementFee: number

    netValueBeforePF: number

    highWaterMark: number

    preTaxInvestmentReturn: number

    benchmarkPortfolio: number
    benchmarkReturnOnCapital: number
    benchmarkInvestmentReturn: number

    outPerformance: number

    indicativePerformanceFee: number
    redeemedUnitsPerformanceFee: number
    payablePerformanceFee: number

    netValueAfterPF: number
    unitsOutstandingAtBeginningOfNextValuationPeriod: number
}

export type FeeCalculation = {
    valuationDate: DateTime,
    aum: number,
    rates: {
        managementFee: number,
        benchmarkReturn: number,
        performanceFee: number
    }
    vintages: VintageData[]
}
