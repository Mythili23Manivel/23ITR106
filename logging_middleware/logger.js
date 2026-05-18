const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtLm15dGhpbGkyM21hbml2ZWxAZ21haWwuY29tIiwiZXhwIjoxNzc5MDgzMjM5LCJpYXQiOjE3NzkwODIzMzksImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIzYTRkNWEwMy0wMDZlLTQ4MzctYTU4OS0xZDFlNzdiNTEyMmYiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJteXRoaWxpIG0iLCJzdWIiOiJlMmFmNjgyZC1hOTRlLTQ3OTEtOGQyNS00YWY3ZjFkMzU5Y2IifSwiZW1haWwiOiJtLm15dGhpbGkyM21hbml2ZWxAZ21haWwuY29tIiwibmFtZSI6Im15dGhpbGkgbSIsInJvbGxObyI6IjIzaXRyMTA2IiwiYWNjZXNzQ29kZSI6IlJ5WkJjeSIsImNsaWVudElEIjoiZTJhZjY4MmQtYTk0ZS00NzkxLThkMjUtNGFmN2YxZDM1OWNiIiwiY2xpZW50U2VjcmV0IjoiRWZTY3RKQWZ4ZVpGbXlidCJ9.cMmugO4HzXS0zo4hyTkyExOfzeRHNHDyjlQbEJRYH0U";

async function Log(stack, level, packageName, message) {

    try {

        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            }
        );

        console.log(response.data);

    } catch (error) {
        console.log("Log failed");
    }
}

module.exports = Log;
