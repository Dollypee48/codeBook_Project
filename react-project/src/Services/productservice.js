export async function getProductList(searchTerm) {
    const api = import.meta.env.VITE_APP_DB_SERVER;

    const response = await fetch(`${api}/ebook/getAllEbooks`);

    if (!response.ok){
        throw{message: response.statuseText, status: response.status};
    }

    const data = await response.json();

    if (searchTerm){
        const filteredRsult = data?.filter(item => (item.name.toLowerCase().split("").includes(searchTerm.toLowerCase()) || item.name.toLowerCase().split(" ").includes(searchTerm.toLowerCase())) ||  item.price.toString().toLowerCase().includes(searchTerm) );
        return filteredRsult
    }

    return data;
}

export const getProduct = async (id) => {
    
    const api = import.meta.env.VITE_APP_DB_SERVER;

    const response = await fetch(`${api}/ebook/singleEbook/${id}`);

    if (!response.ok){
        throw{
            message: response.statusText, status: response.status
        }
    }
    
    const data = await response.json();
    return data;

}
export const getFeaturedList = async () => {
    
    const api = import.meta.env.VITE_APP_DB_SERVER;

    const response = await fetch(`${api}/featured_products`)

    if (!response.ok){
        throw{
            message: response.statusText, status: response.status
        }
    }

    const data =  await response.json();
    return data;
}