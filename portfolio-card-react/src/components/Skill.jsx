const Skill = ({ skills, color, level }) => {
  // if (level === "advanced") {
  //   level = "💪";
  // } else if (level === "intermediate") {
  //   level = "👍";
  // } else {
  //   level = "👶";
  // }
  return (
    <button className="skills1" style={{ backgroundColor: color }}>
      {skills}
      {level === "advanced" && "💪"}
      {level === "intermediate" && "👍"}
      {level === "beginner" && "👶"}
    </button>
  );
};

export default Skill;
