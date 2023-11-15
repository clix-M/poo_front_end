
import { Product } from "@/types/Product"
const API_URL = 'http://localhost:8080/api/v1'



export const getProducts = async () => {
    try{
        const response = await ( await fetch(`${API_URL}/products`,{cache: "no-store"})).json()

    return response 
    
    }catch(error){

        console.log("[GET_PRODUCTS]",error)
    }
}

export const createProduct = async (product: Product) => {
    try {
        const response = await ( await fetch(`${API_URL}/products`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })).json()
        return response 
        
    } catch (error) {
        console.log("[CREATE_PRODUCT]",error)
        
    }
}

export const deleteProduct = async (id: number) => {
    try {
        const response = await ( await fetch(`${API_URL}/products/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })).json()
        return response 
        
    } catch (error) {
        console.log("[DELETE_PRODUCT]",error)
        
    }
}

