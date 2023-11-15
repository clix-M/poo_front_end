'use client';

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/Product';
import { useStore } from '@/lib/store';
import { useEffect } from 'react';

const ProductList = () => {

    // const data = await getProducts();
   

    // console.log(data);
    // llamar a zustand

    const  {products,getProducts} =  useStore();

    useEffect(()=>{

        getProducts()

    },[])
    // si no hay productos
    if (!products) return <div>Loading...</div>


    console.log(products);


    return (
        <Table className='max-w-5xl mx-auto text-center'>
            <TableCaption>Product List</TableCaption>
            <TableHeader className="bg-slate-800 text-center">
                <TableRow>
                    <TableHead className="text-center">ID</TableHead>
                    <TableHead className="text-center">Name</TableHead>
                    <TableHead className="text-center">Price</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product:Product) => (
                    <TableRow key={product.id}>
                        <TableCell >{product.id}</TableCell >
                        <TableCell >{product.name}</TableCell >
                        <TableCell >{product.price}</TableCell >
                        <TableCell className='space-x-5'>
                            <Button 
                            className="btn btn-sm btn-primary">
                                Edit</Button>
                            <Button
                             className="btn btn-sm btn-danger">
                                Delete</Button>
                        </TableCell >
                    </TableRow >
                ))}
            </TableBody>
        </Table>
    )
}
export default ProductList;

