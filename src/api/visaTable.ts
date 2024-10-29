import { Record } from "@/type/Record";

const API_URL = "/api/visaTable";

export async function fetchDataApi(page: number, pageSize: number, sortField?: string, sortOrder?: string, major?: string): Promise<any> {
  const res = await fetch(
    `${API_URL}?page=${page}&limit=${pageSize}&sortBy=${sortField}&sortOrder=${sortOrder}&major=${major}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export async function deleteRecord(id: string): Promise<void> {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete record");
}

export async function updateRecord(id: string, updatedData: Partial<Record>): Promise<Record> {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  if (!res.ok) throw new Error("Failed to update record");
  return res.json();
}