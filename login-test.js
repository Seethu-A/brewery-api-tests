const axios = require('axios');


async function testLogin() {
    console.log("Testing login...");
    
    // This is your login data - just like in Postman Body
    const loginData = {
        username: "brewer1",
        password: "password123"
    };
    
    try {
        // This is like POST request in Postman
        const response = await axios.post(
            'http://localhost:3000/api/auth/login',
            loginData
        );
        
        console.log("Status:", response.status);
        console.log("Got token:", response.data.token);
        
        // Can you add a check here?
        // if (response.status === ???) {
        //     console.log("✅ Login successful!");
        // }
        
    } catch (error) {
        console.log("❌ Login failed:", error.message);
    }
}

testLogin();