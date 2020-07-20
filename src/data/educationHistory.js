import columbia from '/Users/petercrosta/Desktop/personal-work/portfolio/src/data/columbia-logo.jpg'
import fullstack from './fullstack-logo.png'
import nyu from './NYU.gif'

const educationHistory = [{
    name: 'Fullstack Academy',
    degree: 'Fullstack Software Engineering Immersive',
    honors: '',
    gpa: '',
    gradDate: 'February 2020', 
    description: 'Fullstack Academy is a software engineering immersive. Junior Phase includes six weeks of lectures, hands-on labs, and pair-programming workshops. Senior Phase is made up of three projects: a group, e-commerce, CRUD app, a solo hack-a-thon, and a group capstone project. For greater detail, see Projects.',
    coursework: ['Javascript', 'Node.js', 'Express', 'SQL', 'Sequelize', 'React', 'Redux', 'HTML', 'CSS', 'Algorithms'],
    image: fullstack
},
    {
    name: 'Columbia University',
    degree: 'Premedical Postbaccalaureate',
    honors: 'magna cum laude',
    gpa: '3.6',
    gradDate: 'May 2018',
    description: 'The Columbia Premedical Postbaccalaureate',
    coursework: ['Calculus', 'Chemistry', 'Physics', 'Organic Chemistry', 'Biology', 'Neuropsychology'],
    image: columbia
},
{
    name: 'New York University',
    degree: 'B.S. Media, Culture, and Communications',
    honors: 'magna cum laude',
    gpa: '3.8',
    gradDate: 'May 2011',
    description: 'My focus in Media, Culture, and Communications was geared towards a career in political communications. Though that is no longer my career goal, I still use many of the skills I developed, like detail-oriented copy- and code-writing, media literacy, public speaking, and conflict resolution.',
    coursework: ['Intellectual Property Law', 'International Development', 'Political Rhetoric', 'Public Relations', 'Ethics and Media', 'Mass Persuasion and Propaganda'],
    image: nyu
}]

export default educationHistory