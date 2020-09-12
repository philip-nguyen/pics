import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    // images property  
    state = { images: [] };

    onSearchSubmit = async (term) => {
        // using unsplash api, we can GET 'search photos'
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });
        // sets the state, in this case images = response.data.results
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar submitSearch={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}
    

export default App;