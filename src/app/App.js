import React from 'react';
import Custom from './components/Custom';

const data = [
  {
    title: 'Item 1',
    description: 'Descripción del Item 1',
    image: 'https://via.placeholder.com/600x400',
    characteristics: ['Característica 1', 'Característica 2', 'Característica 3']
  },
  {
    title: 'Item 2',
    description: 'Descripción del Item 2',
    image: 'https://via.placeholder.com/600x400',
    characteristics: ['Característica A', 'Característica B']
  }
];

function App() {
  return (
    <div className="container">
      {data.map((item, index) => (
        <Custom
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          characteristics={item.characteristics}
        />
      ))}
    </div>
  );
}

export default App;