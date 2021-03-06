import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Loading from './components/Loading';
import PicOfTheDay from './components/PicOfTheDay';


function App() {
  // set useState and pull in data from API
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [explanation, setExplanation] = useState();

  // axious request to the API
  // grab specific data
  useEffect (() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.nasa.gov/planetary/apod?api_key=OYB9iH2UyhXcplnYm1eMwAi6CRMi30yyTEKOpd99`)
      .then (response => {
        console.log(response.data);
        setDate(response.data.date);
        setTitle(response.data.title);
        setUrl(response.data.url);
        setExplanation(response.data.explanation);
      })
      .catch(err => console.log(err));
  }, []);

    if (!url) return <Loading />;
  return (

    // Display component on page
    <div className="App">
      <p>
        {/* {<Loading />} */}
        <PicOfTheDay
        date={date}
        title={title}
        url={url}
        explanation={explanation}
        />
      </p>
    </div>
  );
}

export default App;
