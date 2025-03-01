export interface SuccessResponse<T> {
  success: true;
  message: string;
  data: T;
}


export interface ErrorResponse {
  success: false;
  message: string;
  errorCode?: string;
  errors?: any;
}


export interface Stock {
  symbol: string;
  company: string;
  sector: string;
  logo: string;
  current_price: number;
  change: number;
  change_percent: number;
  market_cap: string;
  volume: string;
  pe_ratio: number;
  dividend_yield: number;
  candlestick_data: {
    date: string;
    open: string;
    high: string;
    low: string;
    close: string;
    "adjusted close": string;
    volume: string;
    "dividend amount": string;
    "split coefficient": string;
  }[];
}