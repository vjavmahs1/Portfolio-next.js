import axios from 'axios'
import Cookies from 'js-cookie'

import {getCookieFromReq} from '../helpers/utils'

const axiosInstance = axios.create({
    baseURL:`${process.env.BASE_URL}/api/v1/`,
    timeout: 3000
})

const setAuthHeader = (req) => {
    const token = req ?  getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');

    if(token) {
        return {headers : {'authorization': ` Bearer ${token}`}}
    } else {
        return undefined
    }
}

export const getSecretData = async (req) => {

    const url = '/secret' 

    return await axiosInstance.get(url, setAuthHeader(req)).then(response => response.data);

}

export const getPortfolios = async () => {

    const url = '/portfolios'
    return await axiosInstance.get(url).then(response => response.data);
}

export const createPortfolio = async (portfolioData) => {
    const url = '/portfolios'
    return await axiosInstance.post(url,portfolioData ,setAuthHeader()).then(response => response.data);

}

export const getPortfolioById = async(id) => {
    return await axiosInstance.get(`/portfolios/${id}`).then(response => response.data)
}

export const updatePortfolio = async (portfolioData) => {
    return await axiosInstance.patch(`/portfolios/${portfolioData._id}`, portfolioData, setAuthHeader()).then(response => response.data)
}


export const deletePortfolio = async(id) => {
    return await axiosInstance.delete(`/portfolios/${id}`, setAuthHeader()).then(response => response.data)
}