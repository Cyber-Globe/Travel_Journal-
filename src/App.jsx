import data from "./components/data.js";
import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";

function App() {
  const entries = data.map((item) => {
    return (
      <Entry
        key={item.id}
        img={item.img}
        title={item.title}
        country={item.country}
        googleMapsLink={item.googleMapsLink}
        dates={item.dates}
        text={item.text}
      />
    );
  });

  return (
    <>
      <div className="app">
        <Header />
        <div className="main-container">{entries}</div>
      </div>
    </>
  );
}

export default App;
