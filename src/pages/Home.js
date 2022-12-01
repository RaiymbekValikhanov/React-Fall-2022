import { Container, Item, Image, Button, Label, Icon } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const paragraph = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    const navigate = useNavigate()

    return (
        // <Container>
        <Item.Group>
            <Item>
                {/* <Item.Image src='https://images.ctfassets.net/uwf0n1j71a7j/32jZ3NAeX28p8voazBOwRQ/46da3f35bf20fbe441c6556227f9d800/traffic-rules-and-fines.png'/> */}

                <Item.Content>
                    <Item.Header>Изучайте ПДД с помощью удобного интерфейса</Item.Header>
                    <Item.Description>{paragraph}</Item.Description>
                    <Item.Extra>
                        <Button primary floated='right' onClick={() => {navigate('/ПДД')}}>
                            Учить ПДД
                            <Icon name='right chevron' />
                        </Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
            <Item>
                <Item.Content>
                    <Item.Header floated='right'>Зарепляйте знания сдавая тесты</Item.Header>
                    <Item.Description>{paragraph}</Item.Description>
                    <Item.Extra>
                        <Button primary floated='left' onClick={() => {navigate('/Экзамены')}}>
                            <Icon name='left chevron' />
                            Сдать экзамен
                        </Button>
                    </Item.Extra>
                </Item.Content>
                {/* <Item.Image src='https://avtoliders.ru/wp-content/uploads/ruki-vytyanuty-v-storony-ili-opucsheny_1.jpg'/> */}
            </Item>
        </Item.Group>
        // </Container>
    )
}

export default Home;

