import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand to="/">Reactjs basico</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
                <NavDropdown title="Actions" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/task">Task</NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/task2">Task 2</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* 
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav> */}

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/task">
            <Task />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return (
    <Container>
      <div className="App container bg-white border ">
        <header className="App-header">
          <img src={logo} className="App-logo border" alt="logo" />
          <p className="border">
            Ejemplo#01 <code>React js basico</code>, create task.
          </p>
          <a
            className="App-link border"
            href="/task"
            target="_self"
            rel="noopener noreferrer"
          >
            Task
          </a>
        </header>
      </div>{" "}
    </Container>
  );
}

function About() {
  return (
    <Container>
      <div className="App bg-white border ">
        <h2 className="border">About</h2>
      </div>
    </Container>
  );
}

function Users() {
  return (
    <Container>
      <div className="App bg-white border ">
        <h2 className="border">Users</h2>
      </div>
    </Container>
  );
}

function Task() {
  return (
    <Container>
      <div className="App bg-white border ">
        <h2 className="border">Tasks</h2>
      </div>
    </Container>
  );
}

// const [task, setTask] = useState({
//   name: "",
//   description: "",
//   id: 0,
//   state: 0,
// });
