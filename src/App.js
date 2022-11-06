import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'


function App() {
  const [gitHubName, setGitHubName] = useState('')
  const [gitHubUser, setGitHubUser] = useState('')
  const [gitHubURL, setGitHubURL] = useState('')
  const [gitHubBlog, setGitHubBlog] = useState('')
  const [gitHubImageURL, setGitHubImageURL] = useState('')


  useEffect(() => {
    fetch('https://api.github.com/users/DantheCodeRaider')
      .then(res => res.json())
      .then(data => {
        setGitHubName(data.name)
        setGitHubUser(data.login)
        setGitHubURL(data.html_url)
        setGitHubBlog(data.blog)
        setGitHubImageURL(data.avatar_url)
      })
  }, [])

  return (
    <div className="App">
      <div>
        <h1>Github Profile Info:</h1>
      </div>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={gitHubImageURL} alt='Github profile image' />
          <Card.Body>
            <Card.Title>{gitHubUser}</Card.Title>
            <Card.Text>
              Check out {gitHubName}'s GitHub below or his protfolio site at <a href={gitHubBlog}>{gitHubBlog}</a>
            </Card.Text>
            <a href={gitHubURL}><Button variant="primary">Link to GitHub profile</Button></a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App


//curl https://api.github.com/users/DantheCodeRaider
