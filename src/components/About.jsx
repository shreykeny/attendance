import React, { Component } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';




let Header = () => {
    return (
        <div>

            <Jumbotron fluid>
                <Container>
                    <h1>Attendance system by Excalibur</h1>
                    <p>
                        This is a simple MVP of an employee attendance system
                  </p>
                </Container>
            </Jumbotron>

        </div>
    )
}

export default Header; 