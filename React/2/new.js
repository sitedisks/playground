'use strict';

const names = {
    first: 'peter',
    second: 'elena'
}

function rename(){
    return names.first + ' xxoo ' + names.second
}

class NameT extends React.Component {
 
    render() {
        return React.createElement(
            'h2',
            { className: 'my-love' },
            rename()
        )
    }
}

ReactDOM.render(
    // React.createElement('span',null,'Peter and Elena'),
    React.createElement(NameT),
    document.getElementById('new')
);
