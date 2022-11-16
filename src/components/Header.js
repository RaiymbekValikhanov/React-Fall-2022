import React, { useState } from 'react'
import { Menu, Segment, Button, Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [activeItem, setActiveItem] = useState('Главная');
    const navigate = useNavigate();

    const onClick = (e, { name } ) => {
        setActiveItem(name);
        navigate(`/${name}`);
    };

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
            <Menu inverted secondary pointing>
                <Menu.Item>
                    <Button>Вход</Button>
                </Menu.Item>
                <Menu.Item>
                    <Button>Регистрация</Button>
                </Menu.Item>
            </Menu>
        </Segment>
    );
};

export default Header;
