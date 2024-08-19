import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  let res = await fetch('http://localhost:3000/api/visaTable')
  if(!res.ok) {
    throw new Error('Failed to fetch data')
  }
  console.log(res.json)
  return res.json()
}

export default async function TablePage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-8">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

