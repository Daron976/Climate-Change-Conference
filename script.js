// conference speakers
const speaker = [
    {
        name: 'Yvonne Aki-Sawyerr',
        title: 'Mayor of Freetown',
        info: 'Yvonne Denise Aki-Sawyerr, OBE is a Sierra Leonean politician and finance professional, who is serving as the current mayor of Freetown, Sierra Leone\'s capital and largest city; she assumed office on 11 May 2018',
        image: 'images/speaker1.jpg',
        imageText: 'Yvonne Aki-Sawyerr'
    },
    {
        name: 'Brodie Boland',
        title: 'Partner, McKinsey & Company',
        info: 'Helps leading real-estate organizations, infrastructure investors, and city governments prepare for the future, including by identifying and mitigating the risks from climate change',
        image: 'images/speaker2.jpg',
        imageText: 'Brodie Boland'
    },
    {
        name: 'Nathalie Palladitcheff',
        title: 'President and CEO, Ivanhoé Cambridge',
        info: 'President and the first female Chief Executive Officer of Ivanhoé Cambridge, the real estate subsidiary of the Caisse de dépôt et placement du Québec, which owns C$60 billion in real estate assets.',
        image: 'images/speaker3',
        imageText: 'Nathalie Palladitcheff'
    },
    {
        name: 'Bill Winters',
        title: 'Chief Executive Officer of Standard Chartered',
        info: 'William Thomas Winters, CBE is an American banker who is the chief executive of Standard Chartered, and was formerly co-head of JPMorgan Chase\'s investment bank',
        image: 'images/speaker4',
        imageText: 'Bill Winters'
    },
    {
        name: 'Divya Seshamani',
        title: 'Managing Partner, Greensphere',
        info: 'As Founder and Managing Partner of Greensphere Capital, she manages funds that invest in sustainable technology, companies and projects in areas such as sustainable forestry, agriculture, renewable energy, resilient infrastructure, water, resource and energy efficiency.',
        image: 'images/speaker5',
        imageText: 'Divya Seshamani'
    },
    {
        name: 'Virginia Simmons',
        title: 'Managing Partner, UK and Ireland, McKinsey & Company',
        info: 'Virginia brings deep experience in supporting retailers, banks, and other customer-facing firms to drive growth, harness new technologies, and transform marketing and service operations',
        image: 'images/speaker6',
        imageText: 'Virginia Simmons'
    }
]

const speakerImg = document.querySelectorAll('speaker-img');
const speakerName = document.querySelectorAll('speaker-name');
const speakerPosition = document.querySelectorAll('speaker-position');
const speakerStory = document.querySelectorAll('speaker-story');

for (let i = 0; i < 6; i += 1) {
    speakerImg[i].setAttribute('src', speaker[i].image);
    speakerImg[i].setAttribute('alt', speaker[i].imageText);
    speakerName[i].textContent = speaker[i].name;
    speakerPosition[i].textContent = speaker[i].title;
    speakerStory[i].textContent = speaker[i].info;
}