// load-components.js
// Ce fichier charge automatiquement la navbar et le footer dans toutes les pages

// Fonction pour charger un fichier HTML dans un élément
async function loadComponent(file, elementId) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`Erreur HTTP ${response.status} lors du chargement de ${file}`);
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Erreur lors du chargement du composant:', error);
        // Afficher un message d'erreur dans l'élément si le chargement échoue
        document.getElementById(elementId).innerHTML = 
            `<div style="color: red; padding: 20px;">Erreur de chargement du composant</div>`;
    }
}

// Charger la navbar et le footer dès que le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    // Charger la navbar
    if (document.getElementById('navbar-placeholder')) {
        loadComponent('./common/navbar.html', 'navbar-placeholder');
    }
    
    // Charger le footer
    if (document.getElementById('footer-placeholder')) {
        loadComponent('./common/footer.html', 'footer-placeholder');
    }
});