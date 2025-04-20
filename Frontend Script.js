async function sendMessage() {
  const input = document.getElementById("user-input");
  const text = input.value.trim();
  if (!text) return;

  addToChat("Ianao", text);
  input.value = "";

  const res = await fetch("http://localhost:8000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: [{ role: "user", content: text }] }),
  });
  const data = await res.json();
  addToChat("Tsara Hevitra", data.response || data.error);
}

function addToChat(sender, message) {
  const box = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.className = sender === "Ianao" ? "user" : "bot";
  msg.innerText = `${sender}: ${message}`;
  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}
