const api = import.meta.env.VITE_APP_DB_SERVER;

const handleResponse = async (response) => {
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }
    return response.json();
}

const createEbook = async (ebookData) => {
    try {
        const response = await fetch(`${api}/ebook/createEbook`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
         credentials: "include",
        body: JSON.stringify(ebookData),
       
    });

    return await handleResponse(response);
    } catch (error) {
        const errorMessage = error.message || "Failed to create ebook";
        throw new Error(errorMessage);
    }
}

const updateEbook = async (Id, ebookData) => {
    try {
        const response = await fetch(`${api}/ebook/updateEbook/${Id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(ebookData),
        });

        return await handleResponse(response);
    } catch (error) {
        const errorMessage = error.message || "Failed to update ebook";
        throw new Error(errorMessage);
    }
}

const checkAdminStatus = async () => {
    try {
        const response = await fetch(`${api}/users/userProfile`, {
            method: "GET",  
            
            credentials: "include"
        });
        const data = await handleResponse(response);
        return data.isAdmin || false ;

     } catch (error) {
        console.error("Error checking admin status:", error);
        return false;
    }
}

const adminService = {
    createEbook,
    updateEbook,
    checkAdminStatus,
};

export default adminService;