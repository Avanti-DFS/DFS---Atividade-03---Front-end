import api from "./Api"

export const login = async(data) => {
    try {
        const response = await api.post("/login", data); // Send POST request to the login endpoint
        if (response.status === 200) {
            const { token, name } = response.data; // Extract token and user data from response
            localStorage.setItem('token', token); // Store token in local storage
            localStorage.setItem('user', JSON.stringify(name)); // Store user data in local storage
            return { success: true }; // Return success 
        } else {
            return { success: false, message: 'Invalid credentials' }; // Return error message on failed login
        }
    } catch (error) {
        console.error("Error during login:", error); // Handle errors during login process
        return { success: false, message: 'Error logging in' }; // Return generic error message
    }
}

export const getUserName = () => {
    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        const userData = JSON.parse(userString);
        console.log("Logged in user name:", userData);
        return userString
        // You can use userName for further processing
      } catch (error) {
        console.error("Error parsing user data from local storage:");
      }
    } else {
      console.error("No user data found in local storage");
    }
  }

// export async function getUser() {
//     try {
//         const token = localStorage.getItem('token'); // Get token from local storage
//         if (!token) {
//             return { success: false, message: 'No token found' }; // Handle missing token
//         }

//         const response = await api.get("", {
//             headers: {
//                 Authorization: `Bearer ${token}`, // Include token in Authorization header
//             },  
//         });

//         if (response.status === 200) {
//             return { success: true, data: response.data }; // Return user data
//         } else {
//             return { success: false, message: 'Failed to get user data' }; // Handle error
//         }
//     } catch (error) {
//         console.error("Error getting user data:", error); // Handle errors
//         return { success: false, message: 'Error getting user data' }; // Return generic error message
//     }
// }