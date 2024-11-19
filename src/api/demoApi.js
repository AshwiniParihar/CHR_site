// src/api/demoApi.js
const BASE_URL = "http://localhost:5000/api/demo";

export const fetchDemoRequest = async () => {
    try {
        const response = await fetch(`${BASE_URL}/request-demo`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching demo request:", error);
        throw error; // Re-throw the error to handle it in the component
    }
};
