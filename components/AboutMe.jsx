const AboutMe = () => {
  return (
    <div className="about-section">
      <h2 className="title">About Me</h2>
      <div className="about-img-wrap">
        <img src="/icons/me.webp" className="me"></img>
      </div>
      <div className="about-paragraph">
        <h4 className="thanks">Thank you for visiting my page!</h4>I'm a
        Software dev who's recently graduated from General Assembly's Software
        Engineering Immersive bootcamp with a passion to merge creativity with
        the art of problem-solving.{' '}
        <div className="blurb">
          Although not the route I originally embarked down with primary school
          & college, the world of tech has always piqued my interest, as I grew
          up with a software engineer father (who always likes to tell me about
          how much harder it is to work in Perl / cold fusion than
          JavaScript...)
        </div>
        My background as an airline pilot and flight instructor fostered a
        rigorous appetite for all sorts of things that move and the ways in
        which they work. I am currently applying the skills I've gained in my
        journey to build challenging & fulfilling projects.
        <br></br>In my spare time you’ll find me ripping the guitar in a live
        setting, riding in a bike lane, or competitively racing on the weekends.
        <br></br>Let's build something together :)
      </div>
    </div>
  )
}

export default AboutMe
