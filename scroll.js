const scrollButton = document.getElementById('scroll-button');
const scrollList = document.getElementById('scroll-list');

scrollButton.addEventListener('click', () => {
    scrollList.scrollBy({
        left: 30, 
        behavior: 'smooth'
    });
});

