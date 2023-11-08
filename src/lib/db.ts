export async function getData() {
    const res = await fetch("http://localhost:8080/api/v1/products", { cache: "no-cache" });

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}




export async function deleteData(id:number) {
    const res = await fetch(`http://localhost:8080/api/v1/products/${id}`, { method: 'DELETE' })

    if (!res.ok) {
        throw new Error(`Failed to fetch data, status code: ${res.status}`)
    }

    const data = await res.text();
    return data ? JSON.parse(data) : {};
}

