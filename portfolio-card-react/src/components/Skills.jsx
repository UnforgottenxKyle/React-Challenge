import Skill from "../components/Skill";
import MySkills from "../MySkills";

const Skills = () => {
  return (
    <>
      {MySkills.map((mySkill) => (
        <Skill
          skills={mySkill.skill}
          color={mySkill.color}
          level={mySkill.level}
        />
      ))}
      {/* <Skill skills="REACTJS 👍" color="skyblue" />
      <Skill skills="LARAVEL 🤝" color="darkred" />
      <Skill skills="ASP.NET 🫶" color="mediumorchid" />
      <Skill skills="PYTHON 🫰" color="darkgoldenrod" /> */}
    </>
  );
};

export default Skills;
