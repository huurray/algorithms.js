function getSearchHistory() {
  const searchHistory = localStorage.getItem("searchHistory");
  const keywords = searchHistory.split(",");
  return keywords;
}

function setSearchHistory(newKeyword) {
  const searchHistory = localStorage.getItem("searchHistory");
  let newSearchHistory = "";
  if (searchHistory) {
    const keywords = searchHistory.split(",");
    if (keywords.length === 5) {
      keywords.shift();
      keywords.push(newKeyword);
      newSearchHistory = keywords.join(",");
    } else {
      newSearchHistory = `${searchHistory},${newKeyword}`;
    }
  } else {
    newSearchHistory = newKeyword;
  }

  localStorage.setItem("searchHistory", newSearchHistory);
}

export { getSearchHistory, setSearchHistory };
