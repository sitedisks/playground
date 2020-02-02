import React, { useState, useRef } from 'react';


function Ref() {

    const inputFN = useRef(null);

    const [firstName, setFirstName] = useState('fn');

    const handle_submit = (e) => {
        e.preventDefault();
        console.log('first name: ' + firstName);
        console.log(inputFN.current);
    }

    return (<>
        <h3>Form:</h3>
        <form onSubmit={handle_submit}>
            <div>
                <span>First Name:</span>
                <input value={firstName} type="text"
                    ref={inputFN}
                    onChange={e => setFirstName(e.target.value)} />
            </div>
            <div>
                <span>Last Name:</span>
                <input type="text" />
            </div>
            <div>
                <span>Age:</span>
                <input type="text" />
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>

    </>)
}

export default Ref;