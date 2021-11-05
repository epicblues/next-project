function Search() {
    return (
      <div className="search">
          <input type="search" id="search" placeholder="요리명을 검색해보세요!(예: 감바스)"/>
          <input type="submit" value="검색" />          
      </div>  
    );
}

export default Search;