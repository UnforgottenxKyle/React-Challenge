import Skills from "./components/Skills";
import Avatar from "./components/Avatar";
import Intro from "./components/Intro";

const App = () => {
  return (
    <main>
      <div className="card">
        <div className="img">
          <Avatar pic="mypic.jpg" />
        </div>
        <div className="text">
          <Intro
            name="GRIFIN KYLE CASIANO ASA"
            about=" Since 2021, I've been learning to code and have developed a strong
            understanding of web development. About a year ago, I started
            freelancing, creating dynamic websites for both the front end and
            back end. Over the past 10 months, I've continuously learned about
            various frameworks and libraries, which has enabled me to work on
            more complex projects. During my internship, I completed 486 hours
            and gained valuable experience in web development from start to
            finish. Now, as a 4th-year college student nearing graduation, I am
            eager to continue growing and contributing to the field."
          />
        </div>
        <div className="skills">
          <Skills />
        </div>
      </div>
    </main>
  );
};

export default App;
