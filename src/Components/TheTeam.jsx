import React from "react";
import Layout from "./Layout";

function TheTeam() {
  return (
    <div className="meal-log">
      <Layout>
        <h2>Meet the Team: </h2>
        <div className="team-Member">
          <h3>Shaina Earle</h3>
          <img
            src="https://live.staticflickr.com/65535/50137852917_7c3da581fc_n.jpg"
            alt="shaina-headshot"
          />
          <p>
            My name is Shaina Earle and my passion is in Web Design. I love
            being able to see exactly what I’m creating in real time. I enjoy
            watching my ideas as well as other people’s ideas come to fruition.
            My part in this project is styling the Eatr.y app and creating a ton
            of data for the users to choose from. To see more of my work, please
            visit{" "}
            <a
              href="https://searle927.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              searle927.github.io
            </a>
            .
          </p>
        </div>
        <div className="team-Member">
          <h3>Brock Podgurski</h3>
          <img
            src="https://live.staticflickr.com/65535/50137855237_a4389175a7_o.png"
            alt="brock-headshot"
          />
          <p>
            My name is Brock Podgurski and I enjoy backend programming. As for
            my role in EATR.Y, my primary responsibility was building and
            updating the backend server. I was also responsible for doing
            extensive research on user authentication using passport and bcrypt
            so that we could implement it as a feature in this application. To
            see more of my work, please visit{" "}
            <a
              href="https://mbpod10.github.io/Project-1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              mbpod10.github.io/Project-1/
            </a>
            .
          </p>
        </div>
        <div className="team-Member">
          <h3>Annie Davis</h3>
          <img
            src="https://live.staticflickr.com/65535/50137621591_10bba972fe_o.jpg"
            alt="annie-headshot"
          />
          <p>
            My name is Annie Davis, and I am a Full Stack Engineer and full-time
            react nerd. I have a passion for design and user interfaces, because
            I love creating products that are both an intuitive and
            aesthetically pleasing experience for the user. For EATR.Y, I
            was responsible for creating the wireframes, building out all of the
            react architecture, and overseeing the git workflow. To see more of
            my work, please visit{" "}
            <a
              href="http://www.anniechasedavis.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.anniechasedavis.com
            </a>
            .
          </p>
        </div>
      </Layout>
    </div>
  );
}

export default TheTeam;
