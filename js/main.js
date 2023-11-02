// Sample data for user profile (replace with actual data)
const userProfileData = {
    name: "",
    email: "",
    location: "",
};

// Sample database of 10 random names
const randomNames = [
    "Alice", "Bob", "Charlie", "David", "Eve",
    "Frank", "Grace", "Hannah", "Isaac", "Jack"
];

// Sample database of random reviews and star ratings
const randomReviews = [
    { name: "Alice", review: "Great service! Alice really helped me organize my sale.", stars: 5 },
    { name: "Bob", review: "Bob is fantastic. He made my sale a breeze!", stars: 4 },
    { name: "Charlie", review: "Charlie was very professional and efficient.", stars: 4 },
    { name: "David", review: "David's advice was invaluable. Highly recommended!", stars: 5 },
    { name: "Eve", review: "Eve exceeded my expectations. A pleasure to work with.", stars: 5 },
    { name: "Frank", review: "Frank was a lifesaver. My sale went off without a hitch.", stars: 4 },
    { name: "Grace", review: "Grace is an expert at what she does. Very satisfied.", stars: 4 },
    { name: "Hannah", review: "Hannah was polite and helpful. Good experience.", stars: 3 },
    { name: "Isaac", review: "Isaac's advice was helpful. My sale was a success.", stars: 4 },
    { name: "Jack", review: "Jack is a true professional. I would hire him again.", stars: 5 }
];

// Function to display user profile data in the UI
function displayUserProfile() {
    const profileSection = document.getElementById("user-profile");
    const profileContent = document.createElement("div");
    profileContent.innerHTML = `
        <h2>Your Profile</h2>
        <p><strong>Name:</strong> ${userProfileData.name}</p>
        <p><strong>Email:</strong> ${userProfileData.email}</p>
        <p><strong>Location:</strong> ${userProfileData.location}</p>
        <!-- Add more user profile details here -->
    `;
    profileSection.innerHTML = ""; // Clear the previous content
    profileSection.appendChild(profileContent);
}

// Function to fetch and display Yard Sale Pros in the matchmaking section
function fetchYardSalePros() {
    // Implement matchmaking logic here and display results in the UI.
}

// Function to generate random one-sentence bios
function generateRandomBios() {
    const bios = [];
    const usedNames = [];

    for (let i = 0; i < 3; i++) {
        let randomName;
        do {
            randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
        } while (usedNames.includes(randomName));

        usedNames.push(randomName);

        const randomBio = [
            `Hi, I'm an expert in organizing successful yard sales.`,
            `Meet your yard sale specialist. Let's make your sale a hit!`,
            `Here, ready to help you declutter and sell your treasures.`
            // Add more random bios as needed
        ];

        const bio = randomBio[Math.floor(Math.random() * randomBio.length)];
        bios.push(bio);
    }
    return bios;
}

// Function to display random Yard Sale Pro names and bios
function displayRandomYardSalePros() {
    const pros = randomNames.slice().sort(() => 0.5 - Math.random()).slice(0, 3); // Randomly select 3 names
    const bios = generateRandomBios(); // Generate random bios

    const matchedPros = pros.map((name, index) => ({
        bio: bios[index],
        name
    }));

    return matchedPros;
}

// Function to handle real-time chat functionality
function initializeChat() {
    // Implement real-time chat functionality here.
}

// Function to fetch and display reviews and ratings
function fetchReviewsAndRatings() {
    const reviewsSection = document.getElementById("reviews");
    reviewsSection.innerHTML = "<h3>Reviews and Ratings</h3>";

    const displayedNames = displayRandomYardSalePros();
    for (const name of displayedNames) {
        const matchingReview = randomReviews.find(review => review.name === name);
        if (matchingReview) {
            const reviewElement = document.createElement("div");
            reviewElement.innerHTML = `
                <p><strong>Name:</strong> ${matchingReview.name}</p>
                <p><strong>Review:</strong> ${matchingReview.review}</p>
                <p><strong>Stars:</strong> ${"★".repeat(matchingReview.stars)}</p>
            `;
            reviewsSection.appendChild(reviewElement);
        }
    }
}

// Function to update the user profile data with the form input
function updateProfile() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const locationInput = document.getElementById("location");

    userProfileData.name = nameInput.value;
    userProfileData.email = emailInput.value;
    userProfileData.location = locationInput.value;

    displayUserProfile();

    // Clear the form input fields
    nameInput.value = "";
    emailInput.value = "";
    locationInput.value = "";

    // Display random Yard Sale Pros, bios, and reviews
    const displayedPros = displayRandomYardSalePros();
    const matchmakingSection = document.getElementById("matchmaking");
    matchmakingSection.innerHTML = "<h3>Matched Yard Sale Pros</h3>";
    const reviewsSection = document.getElementById("reviews");
    reviewsSection.innerHTML = "<h3>Reviews and Ratings</h3>";

    displayedPros.forEach((pro) => {
        const nameElement = document.createElement("p");
        nameElement.textContent = pro.name;
        matchmakingSection.appendChild(nameElement);

        const bioElement = document.createElement("p");
        bioElement.textContent = pro.bio;
        matchmakingSection.appendChild(bioElement);

        // Display reviews for the displayed names
        const matchingReview = randomReviews.find((review) => review.name === pro.name);
        if (matchingReview) {
            const reviewElement = document.createElement("div");
            reviewElement.innerHTML = `
                <p><strong>Name:</strong> ${matchingReview.name}</p>
                <p><strong>Review:</strong> ${matchingReview.review}</p>
                <p><strong>Stars:</strong> ${"★".repeat(matchingReview.stars)}</p>
            `;
            reviewsSection.appendChild(reviewElement);
        }
    });
}

// Attach an event listener to the form for user profile updates
document.getElementById("request-form").addEventListener("submit", function(event) {
    event.preventDefault();
    updateProfile();
});

// Call the functions to display user profile, Yard Sale Pros, chat, and reviews.
displayUserProfile();
fetchYardSalePros();
initializeChat();

// Simulating a real time chat

// script.js

const chatContainer = document.getElementById("chat-container");
const interestDropdown = document.getElementById("interest-dropdown");
const sendButton = document.getElementById("send-button");
const userNameInput = document.getElementById("user-name-input");
const setNameButton = document.getElementById("set-name-button");

const responses = {
    electronics: [
        "Electronics can sell well. Make a list of the type of electronics are you selling?",
        "Verify if any vintage electronics are in your collection",
        "Need tips for cleaning and presenting electronic items? I can help.",
    ],
    furniture: [
        "Furniture items are often in demand. Think about what pieces you are selling",
        "Note any antique or unique furniture pieces",
        "Want to know how to stage and photograph furniture for sale? I can help.",
    ],
    clothing: [
        "Clothing items are a popular choice. Make note of any specific styles or sizes",
        "Consider organizing a clothing sale event display.",
        "We offer tips for pricing and presenting clothing items",
    ],
    collectibles: [
        "Collectibles can be fascinating. Be aware of the kind of collectibles you have.",
        "Verify if any rare or limited edition items.",
        "We can help to attract collectors to your sale too.",
    ],
    books: [
        "Books are a great item to sell. Make note of any specific genres or authors.",
        "Be aware if you are selling rare or first edition books too.",
        "We can help organize bookshelves for display.",
    ],
    tools: [
        "Tools are always useful. Make note of what types of tools you are selling.",
        "Verify if any unique or specialty tools are in your inventory.",
        "Would you like tips for cleaning and showcasing tools? I can help.",
    ],
};

let isBotResponding = false;
let userName = "You"; // Default user name
let botName = "Jiyoung"; // Korean bot name

// Function to add a message to the chat container
function addMessage(message, isUser = false, name = userName) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(isUser ? "user-message" : "bot-message");
    const senderName = isUser ? name : botName;
    messageElement.innerHTML = `<strong>${senderName}:</strong> ${message}`;
    chatContainer.appendChild(messageElement);
}

// Function to handle user interactions
function handleUserInteraction() {
    if (isBotResponding) return; // Prevent multiple clicks

    isBotResponding = true;
    const selectedOption = interestDropdown.value;
    addMessage(`I am interested in ${interestDropdown.options[interestDropdown.selectedIndex].text}`, true);
    const botResponses = responses[selectedOption];

    if (botResponses && botResponses.length > 0) {
        let index = 0;

        const botResponseInterval = setInterval(() => {
            if (index < botResponses.length) {
                addMessage(botResponses[index]);
                index++;
            } else {
                clearInterval(botResponseInterval);
                isBotResponding = false;
            }
        }, 5000); // Adjust the interval duration (in milliseconds) as needed
    }
}

// Function to set the user's name
function setUserAndStartChat() {
    const inputName = userNameInput.value.trim();
    if (inputName !== "") {
        userName = inputName;
        userNameInput.disabled = true;
        setNameButton.disabled = true;
        addMessage(`Hello ${userName} what are you intersted in?`);
    }
}

// Event listeners
sendButton.addEventListener("click", handleUserInteraction);
setNameButton.addEventListener("click", setUserAndStartChat);

document.querySelector(".menu-btn").addEventListener("click", function() {
    document.querySelector(".main-menu").classList.toggle("show")
})