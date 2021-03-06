
import "./Hero.css"

export const Hero=()=>{
    return <div className="hero-container">
    <div className="hero-content">
      <h1>{`UFC T-SHIRTS, JERSEYS & APPAREL FOR MEN`}</h1>
      <p>
        If you’re an athlete or a fan looking for some new UFC merchandise,
        then you’ve come to the right place. Get your hands on the very latest
        UFC men's apparel, including officially licensed t-shirts, jerseys,
        and much more. All of the latest merchandise comes in a variety of
        sizes, comfortable fits, and durable materials.
      </p>
    </div>
    <div className="hero-img">
      <img src={require(`../../images/Hero.jpg`)} alt="loading..." />
    </div>
  </div>
}