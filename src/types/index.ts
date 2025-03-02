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
  id: number;
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
}
