// conference speakers data

const speaker = [
    {
        name: 'Yvonne Aki-Sawyerr',
        title: 'Mayor of Freetown',
        info: 'OBE is a Sierra Leonean politician, who is serving as the current mayor of Freetown',
        image: 'images/speaker1.jpg',
        imageText: 'Yvonne Aki-Sawyerr'
    },
    {
        name: 'Brodie Boland',
        title: 'Partner, McKinsey & Company',
        info: 'Brodie is a leader of McKinsey\'s work on climate risk in the real-estate and infrastructure sectors',
        image: 'images/speaker2.jpg',
        imageText: 'Brodie Boland'
    },
    {
        name: 'Nathalie Palladitcheff',
        title: 'President and CEO, Ivanhoé Cambridge',
        info: 'President of Ivanhoé Cambridge, the real estate subsidiary of the Caisse de dépôt et placement du Québec',
        image: 'images/speaker3.jpg',
        imageText: 'Nathalie Palladitcheff'
    },
    {
        name: 'Bill Winters',
        title: 'Chief Executive Officer of Standard Chartered',
        info: 'CBE is an American banker who is the chief executive of Standard Chartered, and was formerly co-head of JPMorgan Chase\'s investment bank',
        image: 'images/speaker4.jpg',
        imageText: 'Bill Winters'
    },
    {
        name: 'Divya Seshamani',
        title: 'Managing Partner, Greensphere',
        info: 'She manages funds that invest in sustainable technology and projects in areas such as sustainable forestry, and energy efficiency',
        image: 'images/speaker5.jpg',
        imageText: 'Divya Seshamani'
    },
    {
        name: 'Virginia Simmons',
        title: 'Managing Partner, UK and Ireland, McKinsey & Company',
        info: 'Virginia brings experience in supporting retailers and banks to drive growth and harness new technologies',
        image: 'images/speaker6.jpg',
        imageText: 'Virginia Simmons'
    }
]

// conference speakers dynamic html

const speakerContainerFirstHalf = document.createElement('div');
const speakerContainerSecondHalf = document.createElement('div');

speakerContainerFirstHalf.classList.add('speaker-half-one-container');
speakerContainerSecondHalf.classList.add('speaker-half-one-container');
speakerContainerSecondHalf.classList.add('display-none');

for (let i = 0; i < 3; i++) {
    
    const speakerContainer = document.querySelector('.speakers');
    const speakerList = document.createElement('div');
    const speakerImg = document.createElement('img');
    const speakerInfo = document.createElement('div');
    const speakerName = document.createElement('h4');
    const speakerPosition = document.createElement('p');
    const speakerStory = document.createElement('p');

    speakerList.classList.add('speaker-list');
    speakerImg.classList.add('speaker-img');
    speakerInfo.classList.add('speaker-info');
    speakerName.classList.add('speaker-name');
    speakerStory.classList.add('speaker-story');
    speakerPosition.classList.add('speaker-position');
    speakerStory.classList.add('speaker-story');

    speakerInfo.appendChild(speakerName);
    speakerInfo.appendChild(speakerPosition);
    speakerInfo.appendChild(speakerStory);
    speakerList.appendChild(speakerImg);
    speakerList.appendChild(speakerInfo);

    speakerImg.setAttribute('src', speaker[i].image);
    speakerImg.setAttribute('alt', speaker[i].imageText);
    speakerName.textContent = speaker[i].name;
    speakerPosition.textContent = speaker[i].title;
    speakerStory.textContent = speaker[i].info;

    speakerContainerFirstHalf.appendChild(speakerList);
    speakerContainer.appendChild(speakerContainerFirstHalf)
}

for (let i = 3; i < 6; i++) {
    
    const speakerContainer = document.querySelector('.speakers');
    const speakerList = document.createElement('div');
    const speakerImg = document.createElement('img');
    const speakerInfo = document.createElement('div');
    const speakerName = document.createElement('h4');
    const speakerPosition = document.createElement('p');
    const speakerStory = document.createElement('p');

    speakerList.classList.add('speaker-list');
    speakerImg.classList.add('speaker-img');
    speakerInfo.classList.add('speaker-info');
    speakerName.classList.add('speaker-name');
    speakerStory.classList.add('speaker-story');
    speakerPosition.classList.add('speaker-position');
    speakerStory.classList.add('speaker-story');

    speakerInfo.appendChild(speakerName);
    speakerInfo.appendChild(speakerPosition);
    speakerInfo.appendChild(speakerStory);
    speakerList.appendChild(speakerImg);
    speakerList.appendChild(speakerInfo);

    speakerImg.setAttribute('src', speaker[i].image);
    speakerImg.setAttribute('alt', speaker[i].imageText);
    speakerName.textContent = speaker[i].name;
    speakerPosition.textContent = speaker[i].title;
    speakerStory.textContent = speaker[i].info;

    speakerContainerSecondHalf.appendChild(speakerList);
    speakerContainer.appendChild(speakerContainerSecondHalf)
}



















