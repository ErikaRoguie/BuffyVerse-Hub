document.addEventListener('DOMContentLoaded', () => {
    console.log("Buffyverse site is ready!");

    // Fetch data from JSON file or API
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            displayEpisodes(data.episodes);
            displayCharacters(data.characters);
            displayFanCreations(data.fanCreations);
            displayBooks(data.books);
            displayComicBooks(data.comicBooks);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayEpisodes(episodes) {
    const episodesList = document.getElementById('episodes-list');
    episodes.forEach(episode => {
        const episodeItem = document.createElement('div');
        episodeItem.innerHTML = `
            <h3>${episode.title}</h3>
            <p>Season ${episode.season}</p>
            <p>${episode.description}</p>
            <a href="${episode.link}" target="_blank">More Info</a>
        `;
        episodesList.appendChild(episodeItem);
    });
}

function displayCharacters(characters) {
    const charactersList = document.getElementById('characters-list');
    characters.forEach(character => {
        const characterItem = document.createElement('div');
        characterItem.innerHTML = `
            <h3>${character.name}</h3>
            <p>${character.description}</p>
            <a href="${character.link}" target="_blank">More Info</a>
        `;
        charactersList.appendChild(characterItem);
    });
}

function displayFanCreations(fanCreations) {
    const fanCreationsList = document.getElementById('fan-creations-list');
    fanCreations.forEach(creation => {
        const creationItem = document.createElement('div');
        creationItem.innerHTML = `
            <h3>${creation.title}</h3>
            <p>By: ${creation.author}</p>
            <p>${creation.description}</p>
            <a href="${creation.link}" target="_blank">More Info</a>
        `;
        fanCreationsList.appendChild(creationItem);
    });
}

function displayBooks(books) {
    const booksList = document.getElementById('books-list');
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>By: ${book.author}</p>
            <p>${book.description}</p>
            <a href="${book.link}" target="_blank">More Info</a>
        `;
        booksList.appendChild(bookItem);
    });
}

function displayComicBooks(comicBooks) {
    const comicBooksList = document.getElementById('comic-books-list');
    comicBooks.forEach(comic => {
        const comicItem = document.createElement('div');
        comicItem.innerHTML = `
            <h3>${comic.title} (Issue ${comic.issue})</h3>
            <p>${comic.description}</p>
            <a href="${comic.link}" target="_blank">More Info</a>
        `;
        comicBooksList.appendChild(comicItem);
    });
}document.addEventListener('DOMContentLoaded', () => {
    console.log("Buffyverse site is ready!");

    // Fetch data from JSON file or API
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            displayEpisodes(data.episodes);
            displayCharacters(data.characters);
            displayFanCreations(data.fanCreations);
            displayBooks(data.books);
            displayComicBooks(data.comicBooks);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayEpisodes(episodes) {
    const episodesList = document.getElementById('episodes-list');
    episodes.forEach(episode => {
        const episodeItem = document.createElement('div');
        episodeItem.innerHTML = `
            <h3>${episode.title}</h3>
            <p>Season ${episode.season}</p>
            <p>${episode.description}</p>
        `;
        episodesList.appendChild(episodeItem);
    });
}

function displayCharacters(characters) {
    const charactersList = document.getElementById('characters-list');
    characters.forEach(character => {
        const characterItem = document.createElement('div');
        characterItem.innerHTML = `
            <h3>${character.name}</h3>
            <p>${character.description}</p>
        `;
        charactersList.appendChild(characterItem);
    });
}

function displayFanCreations(fanCreations) {
    const fanCreationsList = document.getElementById('fan-creations-list');
    fanCreations.forEach(creation => {
        const creationItem = document.createElement('div');
        creationItem.innerHTML = `
            <h3>${creation.title}</h3>
            <p>By: ${creation.author}</p>
            <p>${creation.description}</p>
        `;
        fanCreationsList.appendChild(creationItem);
    });
}

function displayBooks(books) {
    const booksList = document.getElementById('books-list');
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>By: ${book.author}</p>
            <p>${book.description}</p>
        `;
        booksList.appendChild(bookItem);
    });
}

function displayComicBooks(comicBooks) {
    const comicBooksList = document.getElementById('comic-books-list');
    comicBooks.forEach(comic => {
        const comicItem = document.createElement('div');
        comicItem.innerHTML = `
            <h3>${comic.title} (Issue ${comic.issue})</h3>
            <p>${comic.description}</p>
        `;
        comicBooksList.appendChild(comicItem);
    });
}document.addEventListener('DOMContentLoaded', () => {
    console.log("Buffyverse site is ready!");

    // Fetch data from JSON file or API
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            displayEpisodes(data.episodes);
            displayCharacters(data.characters);
            displayFanCreations(data.fanCreations);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayEpisodes(episodes) {
    const episodesList = document.getElementById('episodes-list');
    episodes.forEach(episode => {
        const episodeItem = document.createElement('div');
        episodeItem.innerHTML = `
            <h3>${episode.title}</h3>
            <p>Season ${episode.season}</p>
            <p>${episode.description}</p>
        `;
        episodesList.appendChild(episodeItem);
    });
}

function displayCharacters(characters) {
    const charactersList = document.getElementById('characters-list');
    characters.forEach(character => {
        const characterItem = document.createElement('div');
        characterItem.innerHTML = `
            <h3>${character.name}</h3>
            <p>${character.description}</p>
        `;
        charactersList.appendChild(characterItem);
    });
}

function displayFanCreations(fanCreations) {
    const fanCreationsList = document.getElementById('fan-creations-list');
    fanCreations.forEach(creation => {
        const creationItem = document.createElement('div');
        creationItem.innerHTML = `
            <h3>${creation.title}</h3>
            <p>By: ${creation.author}</p>
            <p>${creation.description}</p>
        `;
        fanCreationsList.appendChild(creationItem);
    });
}