import React from "react";
import "../styles/story.css";
import storyImage from "../../public/FLO08009.jpeg"; // replace with your image path
import storyImage2 from "../../public/FLO07801.jpeg";
const Story: React.FC = () => {
  return (
    <section id="story" className="story-section">
      <div className="story-wrapper">



        <div className="story-content">
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              It all began with a smile. From classmates to soulmates, our journey
              has been filled with laughter, adventures, and love.
            </p>
            <p>
              From our first coffee date to traveling together, every moment has
              been special. We can't wait to share our wedding day with all of you!
            </p>
          </div>

          <div className="story-image">
            <div className="story-bg"></div>
            <img src={storyImage} alt="Our journey" />
          </div>


        </div>

        <div className="story-content">

          <div className="story-image">
             <div className="story-bg"></div>
            <img src={storyImage2} alt="Our journey" />
          </div>

          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              It all began with a smile. From classmates to soulmates, our journey
              has been filled with laughter, adventures, and love.
            </p>
            <p>
              From our first coffee date to traveling together, every moment has
              been special. We can't wait to share our wedding day with all of you!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Story;
