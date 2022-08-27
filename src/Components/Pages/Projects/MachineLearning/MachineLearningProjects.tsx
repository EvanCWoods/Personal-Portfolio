import Project from "../Components/Project";
import Mushroom from "../../../../Assets/ProjectImages/Mushroom.jpeg"

export default function MachineLearningProjects() {
  return (
    <div className="machine-learning projects">
      <div className="section-header">
        <h1>
          My <span className="underline-title">Machine Learning Work</span>
        </h1>
      </div>
      <div className="project-cards">
          <Project image={Mushroom} title="Mushroom Classifier" description="This project was built using TensorFlow in Python. The aim was to be able to take in alphaNumeric values as input and train a nerual network on those inputs to accurately classify a mushroom as being either poisonous or safe to eat." codeLink="https://github.com/EvanCWoods/Mushroom-Classifier"/>
      </div>
    </div>
  );
}
