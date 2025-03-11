// Exemple de données d'artisans
const artisans = [
    {
        id: 1,
        name: 'Paul Lefevre',
        email: 'paul.lefevre@example.com',
        phone: '0987654321',
        photo: 'https://randomuser.me/api/portraits/men/2.jpg',
        skills: 'Plomberie, Electricité',
        status: 'Actif',
        admin_id: 1,
        created_at: '2023-03-10'
    },
    {
        id: 2,
        name: 'Sophie Leclerc',
        email: 'sophie.leclerc@example.com',
        phone: '0987654322',
        photo: 'https://randomuser.me/api/portraits/women/1.jpg',
        skills: 'Cuisine, Gestion de restaurants',
        status: 'Inactif',
        admin_id: 2,
        created_at: '2023-02-20'
    },
    // Ajoutez d'autres artisans ici...
];

// Fonction pour afficher les artisans dans le tableau
function displayArtisans(artisans) {
    const tableBody = document.querySelector('#artisans-table tbody');
    
    // Vider le corps de la table avant d'ajouter les nouvelles données
    tableBody.innerHTML = '';

    artisans.forEach(artisan => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${artisan.id}</td>
            <td>${artisan.name}</td>
            <td>${artisan.email}</td>
            <td>${artisan.phone}</td>
            <td><img src="${artisan.photo}" alt="Photo de ${artisan.name}"></td>
            <td>${artisan.skills}</td>
            <td>${artisan.status}</td>
            <td>${artisan.admin_id}</td>
            <td>${artisan.created_at}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Appel de la fonction pour afficher les artisans
displayArtisans(artisans);
