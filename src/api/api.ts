// Import the RTK Query methods from the React-specific entry point
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    endpoints: builder => ({
        get: builder.query({ // GET请求查询api
            query: (qs1) => `/device_list/device_property_json?productIdx=1&qs1=${qs1}`,
        }),
        modify: builder.mutation({  // POST请求API
            query: ({arg1, arg2}) => ({
                url: `/test`,
                method: "POST",
                body: {arg1, arg2}
            })
        }),
    })
})

// Export the auto-generated hook for the endpoint
// 使用方法：
// const [modify,{isLoading,isFetching,error}] = useModifyMutation
// const {data, isFetching} = useGetQuery()
export const {
    useModifyMutation,
    useGetQuery
} = api