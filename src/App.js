import React, {useState} from "react";
import Data from './Data';
import List from './List';


function App() {
  return <main>
    <section className='container'>
      <h3>0 Birthdays Today</h3>
      <List/>
      <button onClick={() => console.log('You Clicked Me')}>Clear All</button>
    </section>
  </main>;
}

export default App;
