const API_KEY = "API KEY";

async function sendMessage() {
    const input = document.getElementById("userInput");
    const messagesDiv = document.getElementById("messages");

    const userMsg = input.value;
    if (!userMsg) return;

    messagesDiv.innerHTML += `<div class="msg user"><b>Você:</b> ${userMsg}</div>`;
    input.value = "";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: userMsg }]
        })
    });

    const data = await response.json();
    const botMsg = data.choices[0].message.content;

    messagesDiv.innerHTML += `<div class="msg bot"><b>Bot:</b> ${botMsg}</div>`;
}
