import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    // Using an arrow function automatically binds 'this'
    onFormSubmit = event => {
        event.preventDefault(); // prevents the page from refreshing
        
        // pass a callback from PARENT to CHILD
        // for the child to call the callback function
        this.props.submitSearch(this.state.term); //use this._ if in a class component
    };
    
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type='text' 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                    
                </form>
            </div>
        );
        
    };
}

export default SearchBar;