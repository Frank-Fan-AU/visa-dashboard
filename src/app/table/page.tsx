import { Record, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Record[]> {
  // Fetch data from your API here.
  let res = await fetch('http://localhost:3000/api/visaTable',{cache:"no-store"})
  if(!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function TablePage() {
  const data = await getData()
  console.log('data',data)
  return (
    <div className="container mx-auto py-8">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

