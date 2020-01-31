import React, {useState} from 'react';

const NewSongForm=({addit, prefix})=>{

    const [title, setTitle] =  useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(title);
        addit(prefix + title);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Add song: </label>
            <input type="text" value={title}  onChange={(e)=>{setTitle(e.target.value); }}/>
            <input type="submit" value="add song" />
        </form>
    )

}

export default NewSongForm;