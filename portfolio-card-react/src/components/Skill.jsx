const Skill = ({ skills, color }) => {
  return (
    <button className="skills1" style={{ backgroundColor: color }}>
      {skills}
    </button>
  );
};

export default Skill;
