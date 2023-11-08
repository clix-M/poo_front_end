'use client'

import { deleteData } from "@/lib/db";
import { Button } from "./ui/button";

export async function Actions({id}:{id:number}){



    const onDelete = async () => {
        try {
            await deleteData(id)
            console.log('deleted')
            
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <Button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Edit
            </Button>
            <Button 
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
            </Button>
        </>
    )

}