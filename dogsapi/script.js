document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetchButton");
    const dogImage = document.getElementById("dogImage");

    // Function to fetch a random dog image
    const fetchRandomDogImage = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                const imageUrl = data.message;
                dogImage.src = imageUrl;
            })
            .catch((error) => {
                console.error("Error fetching random dog image:", error);
            });
    };

    // Fetch and display an initial random dog image
    fetchRandomDogImage();

    // Add click event listener to the fetch button
    fetchButton.addEventListener("click", fetchRandomDogImage);
});
