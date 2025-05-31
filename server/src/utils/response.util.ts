export interface BaseApiResponse {
    success: boolean;
    error?: string | undefined;
}


export interface ApiResponse<T> extends BaseApiResponse {
    data?: T
}

const apiResponse = <T>(
    success: boolean = true,
    error?: string,
    data?: T
): ApiResponse<T> => {
    return { success, error, data }
}

export default apiResponse