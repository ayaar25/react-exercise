import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  // another way of fetching data (promise)
  // onSearchSubmit(term) {
  //   // console.log(term);
  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //     headers: {
  //       Authorization: 'Client-ID 9b9b77e75687e365eee12675267eb838662bfd6b3a9b273710ea895e99897bcf'
  //     }
  //   }).then((response) => {
  //     console.log(response.data.results)
  //   });
  // }

  onSearchSubmit = async (term) => {
    // console.log(term);
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;