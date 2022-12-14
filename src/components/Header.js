import React, { useEffect, useState } from 'react'
import { Menu, Segment, Button, Image, Icon } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { useCurrentUser } from '../providers/UserProvider';

const Header = (props) => {
    const { currentUser, fetchCurrentUser } = useCurrentUser()
    const { activeItem } = props;
    const navigate = useNavigate();

    const onClick = (e, { name } ) => {
        navigate(`/${name}`);
    };

    // useEffect(() => fetchCurrentUser(), [])

    return (
        <Segment inverted>
            <Menu inverted secondary pointing>
                <Image 
                src={'https://cdn-icons-png.flaticon.com/512/741/741407.png'} 
                size='tiny' verticalAlign='middle' 
                onClick={() => {navigate('/')}}
                />{' '}
                <Menu.Item
                    name='Главная'
                    active={activeItem === 'Главная'}
                    onClick={onClick}
                />
                <Menu.Item
                    name='ПДД'
                    active={activeItem === 'ПДД'}
                    onClick={onClick}
                />
                <Menu.Item
                    name='Экзамены'
                    active={activeItem === 'Экзамены'}
                    onClick={onClick}
                />
            </Menu>
            {!currentUser ? (
                <Menu inverted secondary pointing>
                    <Menu.Item>
                        <Button primary onClick={() => {navigate('/Вход')}}>Вход</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button onClick={() => {navigate('/Регистрация')}}>Регистрация</Button>
                    </Menu.Item>
                </Menu>
                ) : (
                <Menu inverted secondary pointing>
                    <Menu.Item>
                        <Icon name='user circle' size='big' primary onClick={() => {navigate('/Профиль')}}></Icon>
                    </Menu.Item>

                </Menu>
                )
            }
        </Segment>
    );
};

export default Header;
