import './App.css';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from './images/profile1.png';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

function App() {
  return (
    <div className='col d-flex justify-content-center vh-100 align-items-center'>
      <Card style={{ width: '18rem', border: 'none', backgroundColor: '#1A1B21'}}>
        <Card.Img variant='top' src={profile} />
        <Card.Body style={{backgroundColor: '#1A1B21'}}>
          <Card.Title className='text-center name'>
            John Allen Salapayne
          </Card.Title>
          <h6 className='text-center' style={{fontSize: '12px', color: '#F3BF99'}}>Frontend Developer</h6>
          <div className='d-grid gap-2'>
            <Button href='https://www.linkedin.com/in/john-allen-salapayne' size='sm' style={{backgroundColor: '#5093E2'}}><FaLinkedin /> Linkedin</Button>
          </div>
          <Card.Text>
            <p className="hd-text">About</p>
            <p className="text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <p className="hd-text" >Interest</p>
            <p className="text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{backgroundColor: '#161619'}}>
          <div className="d-flex gap-4 justify-content-center">
            <a className='icon' href='https://www.facebook.com/allen.spayne'><FaFacebook /></a>
            <a className='icon' href='https://www.instagram.com/allen.spayne'><FaInstagram /></a>
            <a className='icon' href='https://www.twitter.com/payne17_'><FaTwitter /></a>
            <a className='icon' href='https://www.github.com/AllenPayne17'><FaGithub /></a>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default App;
