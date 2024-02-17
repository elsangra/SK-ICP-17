import React from 'react';

const SearchResult = ({ result }) => {
    return (
        <div>
            <h3>Search Result</h3>
            <p>Detail 1: {result.detail1}</p>
            <p>Detail 2: {result.detail2}</p>
            <p>Detail 3: {result.detail3}</p>
        </div>
    );
};

export default SearchResult;
