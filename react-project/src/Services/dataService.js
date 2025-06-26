const api = import.meta.env.VITE_APP_DB_SERVER

// const getSession = () => {
//     const token = localStorage.getItem("token");
//     return token?JSON.parse(token) : null;
// }

const getUser = async() => {
    
    try {
        const response = await fetch(`${api}/users/userProfile`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
               
            },
            credentials: "include"
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }



        const userData = await response.json();
        return userData;
    } catch (error) {
        const email = localStorage.getItem("email");
        return email ? { email: JSON.parse(email)} : null;
    }
}

const checkLoggingStatus = async () => {
    try {
         const response = await fetch(`${api}/users/loginStatus`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
               
            },
            credentials: "include"
        })

        if(!response.ok){
            throw new Error("failed to fetch user");
        }

        const status = await response.json();

        return status;

    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}

const dataService = {
    getUser,
    checkLoggingStatus
}

export default dataService;