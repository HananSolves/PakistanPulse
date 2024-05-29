document.addEventListener('DOMContentLoaded', function() {
    showAttractions('Punjab');
});

const attractions = {
    Punjab: [
        {name: 'Badshahi Mosque', reviews: '4.5/5 (9004 reviews)', img: 'Resources/badshahi_mosque.jpg'},
        {name: 'Derawar Fort', reviews: '4.8/5 (4863 reviews)', img: 'Resources/Derawar_Fort.jpg'},
        {name: 'Hiran Minar', reviews: '4.6/5 (4863 reviews)', img: 'Resources/Hiran_Minar_Park.jpg'},
        {name: 'Tomb of Bibi Jawindi', reviews: '4.2/5 (4863 reviews)', img: 'Resources/tomb_of_bibi_jawindi.jpg'},
    ],
    Sindh: [
        {name: 'Chaukhandi Tombs', reviews: '4.6/5 (5930 reviews)', img: 'Resources/Chaukhandi_Tombs.jpg'},
        {name: 'Mazar-e-Quaid', reviews: '4.4/5 (4500 reviews)', img: 'Resources/Mazar-e-Quaid.jpg'}
    ],
    Balochistan: [
        {name: 'Hingol National Park', reviews: '4.7/5 (3200 reviews)', img: 'Resources/HIngol_National_Park.jpg'},
        {name: 'Miri Fort', reviews: '4.3/5 (2500 reviews)', img: 'Resources/Miri_Fort.jpg'}
    ],
    'Khyber Pakhtunkhwa': [
        {name: 'Kalam Valley', reviews: '4.9/5 (4700 reviews)', img: 'Resources/Kalam.jpg'},
        {name: 'Swat Valley', reviews: '4.8/5 (4600 reviews)', img: 'Resources/swat_valley.jpg'}
    ],
    Gilgit: [
        {name: 'Hunza Valley', reviews: '5.0/5 (5500 reviews)', img: 'Resources/hunza.jpg'},
        {name: 'Fairy Meadows', reviews: '4.9/5 (5000 reviews)', img: 'Resources/fairy_meadows.jpg'}
    ]
};

function showAttractions(province) {
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent.includes(province)) {
            tab.classList.add('active');
        }
    });

    const attractionCards = document.getElementById('attraction-cards');
    attractionCards.innerHTML = '';

    attractions[province].forEach(attraction => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = attraction.img;
        img.alt = attraction.name;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const h3 = document.createElement('h3');
        h3.textContent = attraction.name;

        const reviews = document.createElement('p');
        reviews.classList.add('reviews');
        reviews.textContent = attraction.reviews;

        cardContent.appendChild(h3);
        cardContent.appendChild(reviews);
        card.appendChild(img);
        card.appendChild(cardContent);

        attractionCards.appendChild(card);
    });
}
