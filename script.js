document.getElementById('contact-form').addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation (you can expand this as needed)
            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }

            const formData = {
                name: name,
                email: email,
                message: message,
                access_key: "f78423f9-6ad1-47e2-af9e-042f3785adef" // Include your access key here
            };

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();

                if (result.success) {
                    alert("Message sent successfully!");
                    // Reset the form after successful submission
                    document.getElementById('contact-form').reset();
                } else {
                    alert("Error sending message. Please try again.");
                }
            } catch (error) {
                console.error("Error:", error);
                // alert("An error occurred while sending your message.");
            }
        });

