import axios from 'axios';
import { CompanyBalanceSheet, CompanyCashFlow, CompanyHistoricalDividend, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch, CompanyTenK } from "./company"
interface SearchResponse {
    data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(`https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${import.meta.env.VITE_API_KEY}`);
        return data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error: ', error.message)
            return error.message
        }
        else {
            console.log("unexpected error: ", error);
            return "Unexpected error"
        }
    }
}

export const getCompanyProfile = async (query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(`https://financialmodelingprep.com/api/v3/profile/${query}?limit=40&apikey=${import.meta.env.VITE_API_KEY}`);
        return data;
    }
    catch (error: any) {
        console.log("error message from API:", error.message)
    }
}

export const getKeyMetrics = async (query: string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?limit=40&apikey=${import.meta.env.VITE_API_KEY}`);
        return data;
    }
    catch (error: any) {
        console.log("error message from API:", error.message)
    }
}

export const getIncomeStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(`https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=${import.meta.env.VITE_API_KEY}`);
        return data;
    }
    catch (error: any) {
        console.log("error message from API:", error.message)
    }
}

export const getBalanceSheet = async (query: string) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=40&apikey=${import.meta.env.VITE_API_KEY}`);
        return data;
    }
    catch (error: any) {
        console.log("error message from API:", error.message)
    }
}

export const getCashflow = async (query: string) => {
    try {
        const data = await axios.get<CompanyCashFlow[]>(`https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=40&apikey=${import.meta.env.VITE_API_KEY}`);
        return data;
    }
    catch (error: any) {
        console.log("error message from API:", error.message)
    }
}

export const getTenK = async (query: string) => {
    try {
        const data = await axios.get<CompanyTenK[]>(`https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-k&page=0&apikey=${import.meta.env.VITE_API_KEY}`);
        return data;
    }
    catch (error: any) {
        console.log("error message from API:", error.message)
    }
}

export const getHistoricalDividend = async (query: string) => {
    try {
        const data = await axios.get<CompanyHistoricalDividend>(`https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${query}?apikey=${import.meta.env.VITE_API_KEY}`);
        return data;
    }
    catch (error: any) {
        console.log("error message from API:", error.message)
    }
}
