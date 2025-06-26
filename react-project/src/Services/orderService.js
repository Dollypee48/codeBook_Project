const api = import.meta.env.VITE_APP_DB_SERVER;

const getAuthToken = () => {
    const token = localStorage.getItem("token");
    return token ? JSON.parse(token) : null;
}

const handleResponse = async (response) => {
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "HTTP error! status: ${response.status}");
    }
    return response.json();
}

const placeOrder = async () => {
    const token = getAuthToken();

    try {
        const response = await fetch(`${api}/order/placeOrder`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },

            credentials: "include",
            body: JSON.stringify({}) // Assuming no body is needed for placing an order
        })
        return await handleResponse(response);
    } catch (error) {
        const errorMessage = error.message || "Failed to place order";
        throw new Error(errorMessage);
    }
}

const getUserOrder = async () => {
    const token = getAuthToken();

    try {
        const response = await fetch(`${api}/order/getUserOrder`, {
            methode: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },

            credentials: "include"
        })
        return await handleResponse(response);
    } catch (error) {
        const errorMessage = error.message || "Failed to fetch user orders";
        throw new Error(errorMessage);
    }
}

const getOrderById = async (orderId) => {
    const token = getAthToken();

    try {
        const response = await fetch(`${api}/order/getOrderById/${orderId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            credentials: "include"
        })
        return await handleResponse(response);
    } catch (error) {
        const errorMessage = error.message || "Failed to fetch order by ID";
        throw new Error(errorMessage);
    }
}

const orderService = {
    placeOrder,
    getUserOrder,
    getOrderById
};

export default orderService;