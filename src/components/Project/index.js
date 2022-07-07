import React, {useState} from 'react';
// import foto from './photo.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const Project = ({ name }) => {

const [photos] = useState([
    {
        i: '1',
        title: 'Movie-mania',
        description: 'A website displaying a users like and dislikes of certain films with the ability to chat and have movies recommended to you.',
        linkApp: 'https://murmuring-garden-87864.herokuapp.com/',
        linkGithub: 'https://github.com/MalcDiggs/Movie-mania'
      },
   
]);

const currentPhotos = photos.filter((photo) => photo.name === name);

    return (
      <div id="spacecards">
        <div className="flex-row">
            {currentPhotos.map((image, i) => (
        <Card id="card-projects" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require(`./images/${image.i}.png`).default} alt="portfolio project" />
        <Card.Body>
          <Card.Title><span>{image.title}</span></Card.Title>
          <Card.Text>{image.description}</Card.Text>
          <div id="btns-projects">
          <Button><a href={image.linkApp}>View deployed application</a> </Button><br />
          <Button><a href={image.linkGithub}>View GitHub repository</a> </Button>
          </div>
        </Card.Body>
      </Card>
      ))}
      </div>
      </div>
    );
  };

export default Project;