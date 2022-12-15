import { Container, Item, Image, Button, Label, Icon } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import './Home.css'

const Home = (props) => {
    const paragraph = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    const navigate = useNavigate()

    return (
        <div>
        <Item.Group className="home-page">
            <Item className="item-2">
                {/* <Item.Image src='https://images.ctfassets.net/uwf0n1j71a7j/32jZ3NAeX28p8voazBOwRQ/46da3f35bf20fbe441c6556227f9d800/traffic-rules-and-fines.png'/> */}

                <Item.Content>
                    <Item.Header>Изучайте ПДД с помощью удобного интерфейса</Item.Header>
                    <Item.Description>
                    На нашем сайте вы найдете все самые актуальные и полезные материалы по ПДД, включая последние изменения и дополнения к законодательству.
                    Мы стремимся помочь вам успешно сдать экзамен на водительское удостоверение и безопасно начать свою дорожную жизнь.
                    </Item.Description>
                    <Item.Extra>
                        <Button primary floated='right' onClick={() => {navigate('/ПДД')}}>
                            Учить ПДД
                            <Icon name='right chevron' />
                        </Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
            <Item className="item-1">
                <Item.Content>
                    <Item.Header floated='right'>Зарепляйте знания сдавая тесты</Item.Header>
                    <Item.Description>
                    На нашем сайте вы также найдете различные тесты и интерактивные упражнения, которые помогут вам освоить и закрепить знания по ПДД.
                    Не упустите шанс обеспечить себе безопасность на дороге и присоединяйтесь к нашей команде успешных водителей!
                    </Item.Description>
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
        <Footer />
        </div>
    )
}

export default Home;

