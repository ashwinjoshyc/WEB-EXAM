document.addEventListener('DOMContentLoaded', function () {
    // Fetch the dogs.json file
    fetch('dogs.json')
        .then(response => response.json())
        .then(data => {
            const dogTableBody = document.getElementById('dogTableBody');
            data.forEach(dog => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${dog.Breed}</td>
                    <td>${dog.Color}</td>
                    <td>${dog.Country}</td>
                `;
                dogTableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching dogs.json:', error);
        });
});
