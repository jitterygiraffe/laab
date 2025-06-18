import React from 'react';
import './ourStoryCard.css'; 


const OurStoryCard = () => {

  return (
    <div id="our-story-card">
      <h2 className="card-title">
        Every child deserves a safe, inspiring place to play.
      </h2>
      <p className="card-text">
        The playground at Sidi Bou Said park is the hub for our community's children.
        It is a crossroads for hundreds of families every week, a place for kids of all
        ages to come run, ride bikes and scooters, climb, swing and play — the crucial
        work of childhood — regardless of their means. That's because it is one of the
        only free to play playgrounds in the Banlieue Nord.
      </p>
      <p className="card-text">
        But the playground equipment, which was installed in 2021, is in dire disrepair.
        The ladder on the main play structure was missing all its rungs; wood planks were
        pried free from its roof leaving nails exposed; the spring toys were all broken
        and covered; the swing frames had no swings in them.
      </p>
      <button className="read-more-button">Read more</button>
    </div>
  );
};

export default OurStoryCard;
