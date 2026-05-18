const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Backend working"
    });
});

app.post("/notifications", (req, res) => {

    const { title, message } = req.body;

    res.json({
        success: true,
        notification: {
            title,
            message
        }
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});