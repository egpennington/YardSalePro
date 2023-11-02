document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("application-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const location = document.getElementById("location").value;
        const experience = document.getElementById("experience").value;
        const availability = document.getElementById("availability").value;
        const comments = document.getElementById("comments").value;

        // Create an application object
        const application = {
            name,
            email,
            phone,
            location,
            experience,
            availability,
            comments,
        };

        // Store the application in local storage
        const applications = JSON.parse(localStorage.getItem("yardSaleProApplications")) || [];
        applications.push(application);
        localStorage.setItem("yardSaleProApplications", JSON.stringify(applications));

        // Clear the form
        form.reset();

        // Show a confirmation message to the user
        alert("Application submitted successfully!");
    });
});

document.querySelector(".menu-btn").addEventListener("click", function() {
    document.querySelector(".main-menu").classList.toggle("show")
})
