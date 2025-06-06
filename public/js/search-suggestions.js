const bookTitles = [
    "Don Kishoti",
    "Ana Karenina",
    "Krim dhe Ndëshkm",
    "Zonja Bovari",
    "Krenari dhe paragjykim",
    "Uliksi",
    "1984",
    "Getsbi i Madh",
    "Njëqind Vjet Vetmi",
    "Lolita",
    "Brave New World",
    "The Alchimist",
    "Harry Potter dhe Guri Filozofal",
    "The Hobbit",
    "Charlie dhe Fabrika e Çokollatës",
    "Matilda",
    "Artemis Fowl",
    "The Chronicles of Narnia vol. 1",
    "A Brief History of Time",
    "The Selfish Gene",
    "Sapiens",
    "IN SEARCH OF SCHRODINGER'S CAT",
    "Cosmos",
    "ON THE ORIGIN OF TIME",
    "The Da Vinci Code",
    "The Handmaid's Tale",
    "The Kite Runner",
    "Vellezerit Karamazov vol. 1",
    "In Search Of Lost Time Volume 1 - The Way By Swann's",
    "Veronika vendos të vdesë",
    "Kafka ne breg",
    "Përrallat e Andersenit",
    "Peter Pan",
    "Astrophysics for People in a Hurry",
    "The Gene: An Intimate History",
    "Where the Crawdads Sing",
    "Twisted Hate"

];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const searchBar = document.querySelector('.search-bar');

    // Only initialize if both search input and search bar exist
    if (!searchInput || !searchBar) {
        console.log('Search elements not found, skipping search suggestions initialization');
        return;
    }

    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'search-suggestions';
    searchBar.appendChild(suggestionsContainer);

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        if (query.length < 2) {
            suggestionsContainer.style.display = 'none';
            return;
        }

        const suggestions = bookTitles.filter(title =>
            title.toLowerCase().includes(query)
        ).slice(0, 5);

        if (suggestions.length > 0) {
            suggestionsContainer.innerHTML = suggestions.map(suggestion => `
                <div class="suggestion-item" onclick="selectSuggestion('${suggestion}')">
                    <i class="bi bi-search"></i>
                    <span>${suggestion}</span>
                </div>
            `).join('');
            suggestionsContainer.style.display = 'block';
        } else {
            suggestionsContainer.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchBar.contains(e.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });
});

function selectSuggestion(suggestion) {
    const searchInput = document.querySelector('.search-input');
    searchInput.value = suggestion;
    document.querySelector('.search-suggestions').style.display = 'none';

    // Submit the form
    searchInput.closest('form').submit();
} 