import Rectangle1 from "../assets/Rectangle 77.png";
import marker from "../assets/marker.png";
function Entry(props) {
  return (
    <>
      <div className="entry-section">
        <section className="section">
          <div className="first-section">
            <img src={props.img.src} alt={props.img.alt} className="img-sec" />
          </div>
          <div className="second-section">
            <div className="marker">
              <img src={marker} alt="location-img" />
              <span>{props.entry.country}</span>
              <p>
                <a href={props.entry.googleMapsLink}>View on Google Maps</a>
              </p>
            </div>
            <h2>{props.entry.title}</h2>
            <p className="date">
              <strong>{props.entry.dates}</strong>
            </p>
            <p className="description">{props.entry.text}</p>
          </div>
        </section>
      </div>
    </>
  );
}
export default Entry;
