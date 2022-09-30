const AboutMe = () => {
  return (
    <div className="about-section">
      <h2 className="title">About Me</h2>
      <div className="about-img-wrap">
        <img src="/icons/me.webp" className="me"></img>
      </div>
      <div className="about-paragraph">
        <h4 className="thanks">Thank you for visiting my page!</h4>I'm a
        Software dev, graduate from General Assembly's Software Engineering
        Immersive bootcamp, and lifelong learner with a passion to merge
        creativity with the art of problem-solving.
        <div className="blurb">
          While my initial career trajectory saw me flying jets for an Airline,
          The Tech world has always piqued my interest. I grew up with a
          software engineer father (who likes to tell me about how much harder
          it is to work in Perl / cold fusion than JavaScript...) & spent
          countless hours as a teenager modding video games!
        </div>
        My background as an airline pilot and flight instructor fostered a
        rigorous appetite for all sorts of things that move and the ways in
        which they work.
        <br></br>In my spare time you’ll find me ripping the guitar in a live
        setting, riding in a bike lane, or competitively racing on the weekends!
        <br></br>Let's build something together :)
      </div>
    </div>
  )
}

export default AboutMe
