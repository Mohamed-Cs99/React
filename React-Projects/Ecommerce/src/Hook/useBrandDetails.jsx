import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

export default function useBrandDetails() {

    let { id } = useParams();


    function getBrandItems() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);
    }

    let brandItems = useQuery({
        queryKey:['brandItemsDetails'],
        queryFn:getBrandItems, 
        select:(data)=>data.data.data
    })

    return brandItems ; 

}
