const fs = require("fs");
const API_KEY = process.env.API_KEY;

const data = {
    timestamp: new Date().toISOString(),
    message: "This JSON is json",
};

const apiUrl = 'https://cat-fact.herokuapp.com/facts/';

async function generateData() {
    try {
        const response = await fetch(apiUrl, {
            method: "GET", // or 'POST'
            headers: {
                "Content-Type": "application/json",
                // Include the API key in the request header if required by your API
                Authorization: `Bearer ${apiKey}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const data = await response.json();

        // Write the fetched data to data.json
        fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
            if (err) throw err;
            console.log("data.json has been saved with the latest data");
        });
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

generateData();
