import React from 'react'
import prod1 from './assets/prod1.png';
import prod2 from './assets/prod2.png';
import reject from './assets/Reject.png';
import rework from './assets/Rework.png';
import {Grid, Row, Col} from "react-bootstrap"

function home() {

    return (
        <div style = 
        {{margin : '20px',
          alignContent : 'center',
          textAlign : 'center',
          }}>
               
                <Row float="center">
                    <Col sx={3} md ={6} lg = {6}>
                        <img class = "port_pic" src={prod2}/>
                    </Col>

                    <Col sx={3} md ={6} lg = {6}> 
                        <img class = "port_pic" src={prod1}/>
                    </Col>

                    <Col sx={3} md ={6} lg = {6}> 
                        <img class = "port_pic" src={rework}/>
                    </Col>
                    
                    <Col sx={3} md ={6} lg = {6}>
                        <img class = "port_pic" src={reject}/>
                    </Col>
                </Row>
         </div>
    )   
}

export default home