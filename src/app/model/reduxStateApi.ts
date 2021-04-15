/* eslint-disable @typescript-eslint/ban-types */
export interface ReduxStateApi {
  isLoading: boolean,
  isProcessing: boolean,
  hasError: boolean,
  data: object,
  error: object
}
