import React from 'react'

export default function NewTweet({ onSave, onCharacters, Characters }) {
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target[0].value === "") {
            return;
        } else {
            let FormData = {
                tweet: `${e.target[0].value}`
            }
            onSave(FormData)
            e.target[0].value = ""
        }
    }

    const handleCharacters = (e) => {
        var textLength = e.target.textLength;
        onCharacters(textLength)
        console.log(Characters)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className='container'>
                <div className="input-field col s12 center">
                    <textarea rows='12' id="text-area" cols='12' onKeyUp={handleCharacters} style={styles.textarea} placeholder='Type anything' data-length="280"></textarea>
                </div>
                <label style={Characters < 0 ? {color: 'red'} : {color: 'green'}}>{Characters} caracter(res) restante(s)</label>
                <button style={styles.btn} className="waves-effect green lighten-1 btn right" href=' '>Tweet</button>
            </div>
        </form>
    )
}
const styles = {
    textarea: {
        resize: 'none',
        width: '100%',
        height: '150px',
        borderRadius: '9px',
        borderColor: '#66bb6a '
    },
    btn: {
        background: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer'
    }

}
