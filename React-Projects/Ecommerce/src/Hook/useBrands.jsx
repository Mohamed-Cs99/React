

import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React from 'react'

export default function useBrands() {

    function getAllBrands() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    }

    let allBrandsInfo = useQuery({
        queryKey: ['allBrands'],
        queryFn: getAllBrands,
        select: (data) => data.data.data
    })

    return allBrandsInfo;

}
