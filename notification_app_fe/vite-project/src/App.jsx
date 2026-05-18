import { useState } from "react";

function App() {

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState(null);

    const sendNotification = async () => {

        const res = await fetch("http://localhost:3000/notifications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                message
            })
        });

        const data = await res.json();

        setResponse(data);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Notification App</h1>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <br /><br />

            <button onClick={sendNotification}>
                Send
            </button>

            <pre>
                {JSON.stringify(response, null, 2)}
            </pre>
        </div>
    );
}
export default App;