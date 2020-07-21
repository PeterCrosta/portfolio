import DelveNYC from './DelveNYC-logo.jpg'
import fennel from './fennel.png'
import drugCheck from './drugCheck.jpeg'

// const placeholderAddress = 'https://via.placeholder.com/350x150'

const projects = [{
    name: 'Delve.NYC',
    role: 'Frontend Engineer',
    link: 'http://www.delve.nyc/',
    imgSource: DelveNYC,
    description: ['A site for your next apartment hunt: Visualizing NYC quality-of-life data to help you pick a neighborhood before picking an apartment', 
        'Spearheaded implementation of D3 and SVG as the core, frontend technologies',
        'Led design of concept, minimum viable product, stretch goals, and wireframes'],
    technologies: ['Javascript', 'React', 'D3', 'SVG', 'SASS', 'Express', 'Mongodb', 'NYC Open Data api'],
    githubLink: 'https://github.com/super-smash-brothers/delve-nyc'
},
{
    name: `Fennel's Fresh Flowers`,
    role: 'Fullstack Engineer',
    link: '',
    imgSource: fennel,
    description: ['A single-page, e-commerce site, selling fresh flowers',
        'Designed and implemented vertical slices, including wireframes, React components, Redux state management, Axios calls to RESTful Express routes, and database model design',
        'Featured user profiles, an all-products and a single-product page, a guest and user cart, order history, and checkout feature',
        'Implemented persistent guest cart using Passport and merging guest cart with user cart when signing in'],
    technologies: ['Javascript', 'React', 'Redux', 'Express', 'Express-Session', 'Sequelize', 'PostgreSQL'],
    githubLink: 'https://github.com/Fennnel-s-Fresh-Flowers/grace-shopper'
},
{
    name: 'Drug Check',
    role: 'Sole Developer',
    link: '',
    imgSource: drugCheck,
    description: ['An application that scrapes medical websites in search of possible interactions between prescriptions and allergies',
        'All technology was learned specifically for this project.'],
    technologies: ['Python', 'Django', 'SQLite', 'Beautiful Soup', 'Requests'],
    githubLink: 'https://github.com/PeterCrosta/Stackathon'
}]

export default projects