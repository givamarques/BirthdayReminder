import React, { useState } from 'react';
import data from './data'; //vai importar os dados de data.js
import List from './List'; //componente lista
function App() {
  const[people,setPeople] = useState(data)
  return (<main>
    <section className="container">
      <h3>{people.length} birthdays today</h3> {/*people.lenght vai buscar a quantidade de elementos no array dentro de "data". no caso como tem 5 ja apresenta o numero atualizado*/}
      <List people={people}/> {/*componente lista (autoclose)*/}
      <button onClick={()=>setPeople([])}>Clear All</button>
    </section>
  </main>);
}

export default App;
