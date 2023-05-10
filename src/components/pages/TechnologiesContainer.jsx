import {
    DiJavascript1,
    DiPython,
    DiJava,
    DiReact,
    DiHtml5,
    DiCss3,
    DiBootstrap,
    DiNodejs,
    DiMysql,
    DiPostgresql,
    DiMongodb,
    DiVisualstudio
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    {id: 'js', name: 'JavaScript', icon: <DiJavascript1 />},
    {id: 'python', name: 'Python', icon: <DiPython />},
    {id: 'java', name: 'Java', icon: <DiJava />},
    {id: 'react', name: 'React', icon: <DiReact />},
    {id: 'html', name: 'HTML5', icon: <DiHtml5 />},
    {id: 'css', name: 'CSS3', icon: <DiCss3 />},
    {id: 'bootstrap', name: 'Bootstrap', icon: <DiBootstrap />},
    {id: 'node', name: 'Node.js', icon: <DiNodejs />},
    {id: 'mysql', name: 'MySQL', icon: <DiMysql />},
    {id: 'postgre', name: 'PostgreSQL', icon: <DiPostgresql />},
    {id: 'mongodb', name: 'MongoDB', icon: <DiMongodb />},
    {id: 'visualstudio', name: 'VisualStudioCode', icon: <DiVisualstudio />}
]

const TechnologiesContainer = () => {
  return (
    <section className='technologies_container'>
        <h2>Tecnologias</h2>
        <div className='technologies_grid'>
            {technologies.map((tech) => (
                <div className='technology_card' id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className='technology_info'>
                        <h3>{tech.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TechnologiesContainer