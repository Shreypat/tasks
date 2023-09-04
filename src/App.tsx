import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "red" }}>
                UD CISC275 with React Hooks and TypeScript - Shrey Patel, Hello
                World
            </header>
            <h1> Task 3 Header</h1>
            <img src="../images/Funnydog.jpeg" alt="A funny dog" />
            Favorite Food:
            <ul>
                <li>Pizza</li>
                <li>Noodles</li>
                <li>Pasta</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "120px",
                                width: "120px",
                                backgroundColor: "blue"
                            }}
                        >
                            <p>Box</p>
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "240px",
                                width: "240px",
                                backgroundColor: "red"
                            }}
                        >
                            <p>Box</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
