
import { ProductTable } from "@/components/product-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default async function Home() {
  return (
    <main className='container mx-auto'>
      <h1 className="text-center mt-7 text-pink-500 text-2xl font-bold">
        Productos
      </h1>
      <Link
        href="/newProduc"
      >
        <Button>
          Add new Product
        </Button></Link>
      <ProductTable />
    </main>
  )
}

