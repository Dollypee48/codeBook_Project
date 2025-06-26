const api = import.meta.env.VITE_APP_DB_SERVER;

const getAuthToken = () => {
    const token = localStorage.getItem("token");
    return token ? JSON.parse(token) : null;
}

const getUserCart = async () => {
 
    const response = await fetch(`${api}/cart/getCart`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include"
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch cart data");
    }
    const data = await response.json();
    return data;
}

const addToCartAPI = async (productId) => {
    const token = getAuthToken();

    const response = await fetch(`${api}/cart/addToCart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },      
        body: JSON.stringify({id: productId}),
        credentials: "include"
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add item to cart");
    }
    const data = await response.json();
    return data;
}

const removeFromCartAPI = async (productId) => {
    const token = getAuthToken();
    const response = await fetch(`${api}/cart/remove`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },  
        body: JSON.stringify({id: productId}),
        credentials: "include"
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to remove item from cart");
    }
    const data = await response.json();
    return data;

}

const clearCartAPI = async () => {
    const token = getAuthToken();
    const response = await fetch(`${api}/cart/clear`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        credentials: "include"
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to clear cart");
    }
    const data = await response.json();
    return data;
}

const cartService = {
    getUserCart,
    addToCartAPI,
    removeFromCartAPI,
    clearCartAPI
};

export default cartService;