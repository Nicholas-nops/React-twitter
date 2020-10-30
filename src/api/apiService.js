import axios from 'axios'

const apiUrl = 'http://localhost:3001/tweets'

async function getAllTweets() {
    const res = await axios.get(apiUrl)
    const tweets = res.data.map(data => {
        const { id, value } = data;
        return {
            ...data,
            id,
            value
        }
    })
    return tweets;
}

async function insertTweet(tweet) {
    const response = await axios.post(apiUrl,tweet);
    return response.data;
}

async function deleteTweet(tweet) {
    const res = await axios.delete(`${apiUrl}/${tweet}`)
    return res;
}

export { getAllTweets , insertTweet, deleteTweet}
