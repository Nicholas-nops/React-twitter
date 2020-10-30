import React, { useEffect, useState } from 'react';
import NewTweet from './components/NewTweet';
import Tweets from './components/Tweets';
import * as api from './api/apiService';
import { v4 as uuidv4 } from 'uuid';




export default function App() {

  const [characters, setCharacters] = useState(280);
  const [allTweets, setALLTweets] = useState([]);

  const handleData = async (formData) => {
    const { v4: uuidv4 } = require('uuid');
    const { tweet } = formData;
    let id = uuidv4()
    let tweets = {
      id: id,
      value: tweet
    }

    api.insertTweet(tweets)
  }

  useEffect(() => {
    const getTweets = async () => {
      const tweets = await api.getAllTweets();
      setALLTweets(tweets);
    }
    getTweets()
  }, [allTweets,characters]);

  const handleDelete = async (id) => {
    api.deleteTweet(id);
  }

  const howManyCharacters = (textLenght) => {
      let setLength = textLenght;
      let maxLength = 280;
      let actualLength = maxLength - setLength
      setCharacters(actualLength);
  }

  return (
    <div>
      <h1 className="center" style={styles.title}>React Twitter</h1>
      <NewTweet onSave={handleData} Characters={characters}  onCharacters={howManyCharacters} />
      <Tweets onDelete={handleDelete}  allTweets={allTweets} />
    </div>
  );

}
const styles = {
  title: {
    fontWeight: 'bold',
    color: '#55cf4e'
  }
}