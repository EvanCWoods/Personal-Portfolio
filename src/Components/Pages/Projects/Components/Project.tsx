import "../../../../Styles/Projects/Project.css";

export default function Project() {
    return (
    <div className="project">
        <div className="image-container">
        <img className="project-image" src={""} alt="some project" />
        </div>
        <h1>title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta ipsam ab sequi necessitatibus cum reprehenderit optio, deleniti neque temporibus veniam illo commodi similique, repudiandae voluptatum pariatur modi voluptates assumenda!</p>
        <a href="/">See The Site!</a>
        <a href="/">See The Code!</a>
    </div>
    )
}