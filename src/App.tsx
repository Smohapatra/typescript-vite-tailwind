import { GiphyFetch } from "@giphy/js-fetch-api";
import { useState, useEffect } from "react";
import './App.css';

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await giphyFetch.search("dogs", { limit: 20 });
      setGifs(data);
    }

    fetchData();
  }, [])

  return (
    <div className="gridContainer">
      {gifs.map(gif => {
        const image = gif.images.original;
        return (
          <img src={image.url} alt="gif" key={gif.id} />
        )
      })}
    </div>
  );
}

export default App;
{/* <video autoPlay loop muted>
  <source src={gif?.video.assets['480p'].url} type="video/mp4" />
</video> */}
