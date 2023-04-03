import "../../../../../Styles/Landing/Landing.css";
export default function Skill(props: {skill: string}) {
    return (
        <p className="skill">{props.skill}</p>
    )
}