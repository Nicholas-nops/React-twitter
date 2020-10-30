import React from 'react'






export default function Tweets({ onDelete, allTweets }) {

    const handleTweet = (e) => {
        let id = e.target.childNodes[0].id;
        onDelete(id)
    }


    return (
        <div className="container">
            <div className="collection" style={{ marginTop: '70px' }}>

                {allTweets.map(item => {
                    return (
                        <form onSubmit={handleTweet} key={item.id}>
                            <a href="#!" className="collection-item" id={item.id} key={item.id} style={{ margin: '10px', color: 'black' }}>
                                {item.value}
                                <button style={styles.btn} id="buttons" className="material-icons right">delete</button>
                            </a>
                        </form>
                    );
                })}

            </div>
        </div>
    )
}

const styles = {
    btn: {
        background: 'none',
        color: '#66bb6a',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
    },

}