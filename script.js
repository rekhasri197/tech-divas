async function generate() {
    const prompt = document.getElementById("prompt").value;

    if (prompt.trim() === "") {
        alert("Please enter a marketing idea!");
        return;
    }

    document.getElementById("result").innerText = "Generating... Please wait.";

    try {
        const response = await fetch("http://127.0.0.1:8000/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt: prompt })
        });

        const data = await response.json();
        document.getElementById("result").innerText = data.result;

    } catch (error) {
        document.getElementById("result").innerText = "Error connecting to backend!";
    }
}
