import React from 'react';
import './App.css';
import Card from './Card';
import faker from 'faker';
function App() {
  const buttonsMarkup = (
    <>
      <button className="button button2">YES</button>
      <button className="button button3">NO</button>
    </>
  );
  return (
    <div className="App">
      <Card
        avatar={faker.image.people()}
        name={`${faker.name.firstName()} ${faker.name.firstName()}`}
        title={faker.name.jobTitle()}
      >
        {buttonsMarkup}
      </Card>
      <Card
        avatar={faker.image.people()}
        name={`${faker.name.firstName()} ${faker.name.firstName()}`}
        title={faker.name.jobTitle()}
      >
        {buttonsMarkup}
      </Card>
      <Card
        avatar={faker.image.people()}
        name={`${faker.name.firstName()} ${faker.name.firstName()}`}
        title={faker.name.jobTitle()}
      >
        {buttonsMarkup}
      </Card>
    </div>
  );
}

export default App;
