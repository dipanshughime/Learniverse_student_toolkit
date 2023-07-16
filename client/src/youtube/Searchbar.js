import React from 'react';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
              <h2 className="text-center">
                <img
                  className="w-56 h-28 mx-auto"
                  src="https://www.thatitguy.net/wp-content/uploads/2018/08/1280px-Logo_of_YouTube_2015-2017.svg.png"
                  alt="youtube logo"
                />
              </h2>
              <div className="search-bar bg-gray-100 p-4">
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="flex items-center">
                        <label htmlFor="video-search" className="mr-4">Video Search</label>
                        <input
                          onChange={this.handleChange}
                          name="video-search"
                          type="text"
                          placeholder="Search.."
                          className="border border-gray-300 px-4 py-2 rounded"
                        />
                    </div>
                </form>
              </div>
            </>
        )
    }
}

export default Searchbar;
