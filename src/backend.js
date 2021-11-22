const storageName = "favourites";

function changeFavourites(id) {
    if (!localStorage.getItem(storageName)) {
        localStorage.setItem(storageName, JSON.stringify([]));
    }
    const storedFavourites = JSON.parse(localStorage.getItem(storageName));
    const itemIndex = storedFavourites.indexOf(id);
    if (itemIndex !== -1) {
        storedFavourites.splice(itemIndex, 1);
    } else {
        storedFavourites.push(id);
    }
    localStorage.setItem(storageName, JSON.stringify(storedFavourites));
  }

  function isFavourite(id) {
    const storedFavourites = localStorage.getItem(storageName);
    if(!storedFavourites){
        console.error("Fatal error!");
    }
    return  JSON.parse(storedFavourites).indexOf(id) !== -1;
  }

  function getTotalFavourites() {
    const storedFavourites = localStorage.getItem(storageName);
    if(!storedFavourites){
        console.error("Fatal error!");
    }
    return JSON.parse(storedFavourites).length;
  }

  module.exports = { changeFavourites, isFavourite, getTotalFavourites }