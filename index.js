const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const phoneNumber = "554391107327";
const message = encodeURIComponent("Hello! 😃%0ASomeone just visited your website! 🥳");
const apiKey = "2529632";
const url = `https://api.callmebot.com/whatsapp.php?phone=${phoneNumber}&text=${message}&apikey=${apiKey}`;

fetch(url)
    .then(response => {
        if (response.ok) {
            console.log("Message sent successfully!");
        } else {
            console.error("Error sending message:", response.statusText);
        }
    })
    .catch(error => console.error("Fetch error:", error));

    