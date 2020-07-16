import DelveNYC from './DelveNYC-logo.jpg'
import fennel from './fennel.png'
import drugCheck from './drugCheck.jpg'

// const placeholderAddress = 'https://via.placeholder.com/350x150'

const projects = [{
    name: 'Delve.NYC',
    link: 'http://www.delve.nyc/',
    imgSource: DelveNYC,
    description: 'A site for your next apartment hunt: Visualizing NYC quality-of-life data to help you pick a neighborhood before picking an apartment',
    technologies: ['Javascript', 'React', 'D3', 'Express', 'Mongodb', 'NYC Open Data api'],
    githubLink: 'https://github.com/super-smash-brothers/delve-nyc'
},
{
    name: `Fennel's Fresh Flowers`,
    link: 'https://github.com/Fennnel-s-Fresh-Flowers/grace-shopper',
    imgSource: fennel,
    description: 'A single-page, e-commerce site, selling fresh flowers. Featured user profiles, an all-products and a single-product page, a guest and user cart, order history, and checkout',
    technologies: ['Javascript', 'React', 'Redux', 'Express', 'Express-Session', 'Sequelize', 'PostgreSQL'],
    githubLink: 'https://github.com/Fennnel-s-Fresh-Flowers/grace-shopper'
},
{
    name: 'Drug Check',
    link: 'https://github.com/PeterCrosta/Stackathon',
    imgSource: drugCheck,
    description: `A consumer-facing site where users can create a profile that tracks what allergies the person has and what prescriptions the user is taking, and informs him or her of possible interactions scraped from medical websites.
    All technology was learned specifically for this project.`,
    technologies: ['Python', 'Django', 'SQLite', 'Beautiful Soup', 'Requests'],
    githubLink: 'https://github.com/PeterCrosta/Stackathon'
}]

export default projects