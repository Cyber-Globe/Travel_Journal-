import data from "./components/data.js";
import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";

function App() {
  const entries = data.map((item) => {
    return <Entry key={item.id} {...item} img={item.img} />;
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
