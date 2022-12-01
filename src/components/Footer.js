import React, { useState } from 'react'
import { Menu, Segment, Button, Image, Container, Grid, GridRow } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <Segment inverted vertical className='footer'>
            <Container>
                <Grid inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            something
                        </Grid.Column>
                        <Grid.Column width={5}>
                            something
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}

export default Footer;