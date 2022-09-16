// conference speakers data

const speaker = [
  {
    name: 'Yvonne Aki-Sawyerr',
    title: 'Mayor of Freetown',
    info: 'OBE is a Sierra Leonean politician, who is serving as the current mayor of Freetown',
    image: 'images/speaker1.jpg',
    imageText: 'Yvonne Aki-Sawyerr',
  },
  {
    name: 'Brodie Boland',
    title: 'Partner, McKinsey & Company',
    info: 'Brodie is a leader of McKinsey\'s work on climate risk in the real-estate and infrastructure sectors',
    image: 'images/speaker2.jpg',
    imageText: 'Brodie Boland',
  },
  {
    name: 'Nathalie Palladitcheff',
    title: 'President and CEO, Ivanhoé Cambridge',
    info: 'President of Ivanhoé Cambridge, the real estate subsidiary of the Caisse de dépôt et placement du Québec',
    image: 'images/speaker3.jpg',
    imageText: 'Nathalie Palladitcheff',
  },
  {
    name: 'Bill Winters',
    title: 'Chief Executive Officer of Standard Chartered',
    info: 'CBE is an American banker who is the chief executive of Standard Chartered, and was formerly co-head of JPMorgan Chase\'s investment bank',
    image: 'images/speaker4.jpg',
    imageText: 'Bill Winters',
  },
  {
    name: 'Divya Seshamani',
    title: 'Managing Partner, Greensphere',
    info: 'She manages funds that invest in sustainable technology and projects in areas such as sustainable forestry, and energy efficiency',
    image: 'images/speaker5.jpg',
    imageText: 'Divya Seshamani',
  },
  {
    name: 'Virginia Simmons',
    title: 'Managing Partner, UK and Ireland, McKinsey & Company',
    info: 'Virginia brings experience in supporting retailers and banks to drive growth and harness new technologies',
    image: 'images/speaker6.jpg',
    imageText: 'Virginia Simmons',
  },
];

// conference speakers dynamic html

const speakerContainerFirstHalf = document.createElement('ul');
const speakerContainerSecondHalf = document.createElement('ul');
const speakerUlistContainer = document.createElement('div');

const moreBtn = document.createElement('button');
const arrowDown = document.createElement('i');
arrowDown.classList.add('fa-solid', 'fa-angle-down');
moreBtn.style.color = '#ec5242';
moreBtn.setAttribute('type', 'button');
moreBtn.textContent = 'More ';
moreBtn.classList.add('speaker-btn');
moreBtn.appendChild(arrowDown);

speakerContainerFirstHalf.classList.add('speaker-half-one-container');
speakerContainerSecondHalf.classList.add('speaker-half-one-container', 'display-none', 'second-half');
speakerUlistContainer.classList.add('ulist-container');

for (let i = 0; i < 3; i += 1) {
  const speakerContainer = document.querySelector('.speakers');
  const speakerList = document.createElement('li');
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
  speakerUlistContainer.appendChild(speakerContainerFirstHalf);
  speakerContainer.appendChild(speakerUlistContainer);
  speakerContainer.appendChild(moreBtn);
}

for (let i = 3; i < 6; i += 1) {
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
  speakerUlistContainer.appendChild(speakerContainerSecondHalf);
  speakerContainer.appendChild(speakerUlistContainer);
  speakerContainer.appendChild(moreBtn);
}

const menuBtn = document.querySelector('.open-mobile-menu');
const mobileBtn = document.querySelector('.mobile-menu');

function openMenu() {// eslint-disable-line
  mobileBtn.style.display = 'flex';
  menuBtn.style.display = 'none';
}

function closeMenu() {// eslint-disable-line
  mobileBtn.style.display = 'none';
  menuBtn.style.display = 'block';
}

menuBtn.setAttribute('onclick', 'openMenu()');
mobileBtn.setAttribute('onclick', 'closeMenu()');

function showMoreSpeakers() {// eslint-disable-line
  moreBtn.textContent = 'Less ';
  speakerContainerSecondHalf.classList.remove('display-none');
  arrowDown.classList.add('fa-solid', 'fa-angle-up');
  arrowDown.style.color = '#ec5242';
  moreBtn.appendChild(arrowDown);
  moreBtn.setAttribute('onclick', 'showLessSpeakers()'); // eslint-disable-line
}

function showLessSpeakers() {// eslint-disable-line
  moreBtn.textContent = 'More ';
  speakerContainerSecondHalf.classList.add('display-none');
  arrowDown.classList.remove('fa-solid', 'fa-angle-up');
  arrowDown.classList.add('fa-solid', 'fa-angle-down');
  arrowDown.style.color = '#ec5242';
  moreBtn.appendChild(arrowDown);
  moreBtn.setAttribute('onclick', 'showMoreSpeakers()');
}

moreBtn.setAttribute('onclick', 'showMoreSpeakers()');

const programBtn = document.querySelector('.program-reveal-btn');
const programContainer = document.querySelector('.program-list-container');

function showFullProgram() {// eslint-disable-line
  programContainer.style.maxHeight = 'fit-content';
  programBtn.textContent = 'See Less';
  programBtn.setAttribute('onclick', 'SeeLess()'); // eslint-disable-line
}

function SeeLess() { // eslint-disable-line
  programContainer.style.removeProperty('max-height');
  programBtn.textContent = 'See Entire Program';
  programBtn.setAttribute('onclick', 'showFullProgram()');
}

programBtn.setAttribute('onclick', 'showFullProgram()');
