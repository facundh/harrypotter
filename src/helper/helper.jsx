

export const isInFavorites = (id, favourites) => {
    // El some devuele un booleano
   return favourites.some( e => e.id === id)
}

export const getHouse = (tipo) => {
    if (tipo === "Griffindor") {
      return [];
    } else if (tipo === "Hufflepuff") {
      return [];
    } else if (tipo === 'Ravenclaw') {
      return [];
    } else {
      return []
    }
  };