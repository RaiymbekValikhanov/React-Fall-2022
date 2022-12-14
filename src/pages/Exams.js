import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Placeholder, Segment, Button, Divider, Image, Card, Message } from "semantic-ui-react";
import { useCurrentUser } from "../providers/UserProvider";
import { getExams } from "../services/requests";
import './Exams.css'


const Exam = (props) => {
    const { item } = props;
    const navigate = useNavigate();
    const location = useLocation();

    const [style, setStyle] = useState({
        'position': 'absolute',
        'height': '100%',
        'padding-top': '40%',
        'font-size': '20px',
        'bottom': 0,
        'display': 'none'
    });

    return (
        <Card
            onMouseEnter={() => setStyle({ ...style, 'display': 'block' })}
            onMouseLeave={() => setStyle({ ...style, 'display': 'none' })}
        >
            <Card.Content>
                <Card.Header>{item.id}. {item.title}</Card.Header>
            </Card.Content>
            <Image
                src={item.image}
                ui={false}
                style={{ 'height': '250px' }}
            />
            <Button
                style={style}
                attached='bottom'
                positive
                onClick={() => {
                    console.log(location.pathname)
                    navigate(`${location.pathname}/${item.id}`)
                }}
            >
                Сдать
            </Button>
        </Card>
    )
}

const Exams = () => {
    const { currentUser, fetchCurrentUser } = useCurrentUser()
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchCurrentUser()
        getExams().
            then(result => {
                setItems(result);
                console.log(result);
            })
    }, [])

    return (
        <Container>
            {currentUser ? (
                <Card.Group itemsPerRow={3}>
                    {items.map(item => (
                        <Exam item={item} />
                    ))}
                </Card.Group>
            ) : (
                <Message negative size="large">Выполните вход или регистрацию</Message>
            )}
        </Container>
    )
}

export default Exams