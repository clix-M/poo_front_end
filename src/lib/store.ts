import { type Product } from '@/types/Product';
import { create } from 'zustand';
import { createProduct, deleteProduct, getProducts } from './data';

const API_URL = 'http://localhost:8080/api/v1'



type Store = {
    products: Product[];
    getProducts: ()=> Promise<void>;
    createProduct: (product: Product) => Promise<void>;
    deleteProduct: (id: number) => Promise<void>;
}

export const useStore = create<Store>((set, get) => ({
    products: [],
    getProducts : async () => {
        const response = await ( await fetch(`${API_URL}/products`)).json()
        set({ products: response })
    },
    createProduct: async (product) => {
        const response = await createProduct(product);
        set({ products: [...get().products, response] })
    },
    deleteProduct: async (id) => {
        await deleteProduct(id);
        set({ products: get().products.filter(p => p.id !== id) })
    }
}))

