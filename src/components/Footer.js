import React, { useState } from 'react'
import { Menu, Segment, Header, List, Container, Grid, GridRow } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <Segment inverted vertical className='footer'>
            <Container>
                <Grid inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header inverted as='h4' content='Страницы' />
                            <List link inverted>
                                <List.Item as='a' onClick={() => {navigate("/ПДД")}}>ПДД</List.Item>
                                <List.Item as='a' onClick={() => {navigate("/Экзамены")}}>Экзамены</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header inverted as='h4' content='Контакты' />
                            <List link inverted>
                                <List.Item as='div'>a_razak@kbtu.kz</List.Item>
                                <List.Item as='div'>a_rustemov@kbtu.kz</List.Item>
                                <List.Item as='div'>e_turgunbek@kbtu.kz</List.Item>
                                <List.Item as='div'>k_asylbek@kbtu.kz</List.Item>
                                <List.Item as='div'>s_kuttymurat@kbtu.kz</List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}

export default Footer;