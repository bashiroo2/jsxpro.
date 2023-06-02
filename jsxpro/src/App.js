  import React from 'react';
  import { Card } from 'react-bootstrap';
  import product from './product';
  import Name from './Name';
  import Price from './Price';
  import Description from './Description';
  import Image from './Image';
  import profilePicture from './profile-picture.jpeg'; 
  import './App.css'; 

  const App = () => {
    const firstName = 'Bechir'; 

    return (
      <div className="container">
        <div className="profile-section">
          {firstName && <img src={profilePicture} alt="Profile" className="profile-picture" />}
          <p className="greeting">Hello, {firstName ? firstName : 'there'}!</p>
        </div>
        <Card className="my-card">
          <Card.Body> 
            <Image image={product.image} />
            <Card.Title>
              <Name name={product.name} />
            </Card.Title>
            <Card.Text>
              <Price price={product.price} />
              <Description description={product.description} />
            
            </Card.Text>
          </Card.Body>
        </Card>
        
      </div>
    );
  };

  export default App;
