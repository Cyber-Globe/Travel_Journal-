import Rectangle1 from "../assets/Rectangle 77.png";
import marker from "../assets/marker.png";
function Entry({ img, title, country, googleMapsLink, dates, text }) {
  return (
    <>
      <div className="entry-section">
        <section className="section">
          <div className="first-section">
            <img src={img.src} alt={img.alt} className="img-sec" />
          </div>
          <div className="second-section">
            <div className="marker">
              <img src={marker} alt="location-img" />
              <span>{country}</span>
              <p>
                <a href={googleMapsLink}>View on Google Maps</a>
              </p>
            </div>
            <h2>{title}</h2>
            <p className="date">
              <strong>{dates}</strong>
            </p>
            <p className="description">{text}</p>
          </div>
        </section>
      </div>
    </>
  );
}
export default Entry;
