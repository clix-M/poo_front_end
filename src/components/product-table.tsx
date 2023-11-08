import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { getData } from "@/lib/db"
import { Product } from "@/type/Product"
import { Actions } from "./actions"
  


  
  export async function ProductTable() {

    const data = await getData()
    return (
      <Table>
        <TableCaption>A list of your recent products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Acctions</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((product:Product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>

              <TableCell className="space-x-5">
                <Actions  id={product.id}/>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  