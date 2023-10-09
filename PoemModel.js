// Den här filen ska innehålla
// relevanta funktioner för att
// hantera 'Poems'
// T.ex add, remove, update, show

// Test databas
const db = [
  { id: 1, content: "Rosor är röda.", author: "Henry" },
  { id: 2, content: "Röda är rosor.", author: "Bob" },
];

// DONE: skapa en funktion som returnerar alla Poems
function showAll() {
  return db;
}

// DONE: skapa en funktion som returnerar EN poem givet id
function showOneById(id) {
  // for-loop
  // for (let i = 0; i < db.length; i++) {
  //     const poem = db[i];
  //     if (poem.id === id) {
  //         return poem;
  //     }
  // }

  // return null;

  // filter
  // return db.filter(poem => poem.id === id)[0];

  // find
  return db.find((poem) => poem.id === id);
}

// DONE: Skapa en funktion som editerar en poem angivet id och
// förändringarna
function edit(newPoem) {
  for (let i = 0; i < db.length; i++) {
    const poem = db[i];
    if (poem.id === newPoem.id) {
      // uppdatera poem

      // Kontrollera om det finns ny content
      if (newPoem.content) {
        poem.content = newPoem.content;
      }

      // Kontrollera om det finns ny author
      if (newPoem.author) {
        poem.author = newPoem.author;
      }

      // Om vi har hittat poem för uppdatering så returnerar vi den
      // med uppdateringar
      return poem;
    }
  }

  return null;
}

// DONE: Skapa en funktion som lägger till en Poem i databasen
// Den ska returnera den nya poem som lades till (med id)
function add(newPoem) {
  const poemToAdd = {
    id: db.length + 1,
    author: newPoem.author,
    content: newPoem.content,
  };

  db.push(poemToAdd);

  return poemToAdd;
}

// DONE: skapa en funktion för att ta bort en poem givet id
function remove(id) {
  let idxToRemove = null;

  for (let i = 0; i < db.length; i++) {
    const poem = db[i];

    if (poem.id === id) {
      idxToRemove = i;

      const removedPoem = db.splice(idxToRemove, 1);

      return removedPoem;
    }
  }

  return null;
}

module.exports = {
    showAll,
    showOneById,
    add,
    remove,
    edit
};
