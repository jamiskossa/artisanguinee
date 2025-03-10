
$(document).ready(function() {
    $("#toggle-theme").click(function() {
        $("body").toggleClass("dark-mode");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const darkModeBtn = document.getElementById("dark-mode-btn");
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".toggle-btn");
    const body = document.body;

    // Mode sombre
    darkModeBtn.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
    });

    // Vérifier si le mode sombre est activé dans le stockage local
    if (localStorage.getItem("darkMode") === "true") {
        body.classList.add("dark-mode");
    }

    // Sidebar Toggle
    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("collapsed");
        if (sidebar.classList.contains("collapsed")) {
            document.querySelector(".main-content").style.marginLeft = "60px";
            toggleBtn.style.left = "70px";
        } else {
            document.querySelector(".main-content").style.marginLeft = "250px";
            toggleBtn.style.left = "260px";
        }
    });

    // Animation tableau : Survol des lignes
    document.querySelectorAll(".table-container table tr").forEach(row => {
        row.addEventListener("mouseover", function () {
            this.style.background = "rgba(0, 123, 255, 0.2)";
        });
        row.addEventListener("mouseout", function () {
            this.style.background = "transparent";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('reservationsChart').getContext('2d');

    // Données initiales (seront remplacées par des données dynamiques via Ajax)
    let reservationsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
            datasets: [{
                label: 'Réservations par mois',
                data: [10, 20, 15, 30, 25, 40], // Données fictives
                backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#6f42c1']
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Simuler une mise à jour dynamique toutes les 5 secondes
    setInterval(() => {
        $.ajax({
            url: 'getStats.php', // Fichier serveur PHP pour récupérer les vraies données
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                reservationsChart.data.datasets[0].data = data.reservations;
                reservationsChart.update();
            }
        });
    }, 5000);
});


