async function getRandomMangaPanel() {
    try {
        const response = await fetch('https://api.jikan.moe/v3/manga/1/pictures');
        const data = await response.json();
        const randomPanel = data.pictures[Math.floor(Math.random() * data.pictures.length)];
        return randomPanel;
    } catch (error) {
        console.error('Error fetching random manga panel:', error);
        return null;
    }
}
