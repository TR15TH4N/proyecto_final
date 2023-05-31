//variables de busqueda
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    
        cards.forEach(function(card) {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const location = card.querySelector('.card-text').textContent.toLowerCase();
    
        if (title.includes(query) || location.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
        });
});