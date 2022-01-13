import logo from "./logo.svg";
// import './App.css';
import data from "./data";
import List from "./List";
import { useState } from "react";
// list of data of birthdays

function App() {
  const [people, setPeople] = useState(data);
  // here we passed the data thats why our initialdata is data people=data


  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {/* people. length gives us a how long is our list its now 5 */}
        {/* we should have to pass people ass passs in Link cmponent */}
        <List people={people} />
        {/* here we pass people as props */}
        <button onClick={() => setPeople([])}>Clear all</button>
        {/* sepeople([]) clears the values*/}
      </section>
    </main>
  );
}

export default App;
