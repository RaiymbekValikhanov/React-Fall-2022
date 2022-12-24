import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Item, Grid, Segment, Message, Button, List, Header, Divider, Label } from "semantic-ui-react";
import { useCurrentUser } from "../providers/UserProvider";
import { getScores, logout } from "../services/requests";
import './Profile.css'

const Profile = () => {
    const { currentUser, fetchCurrentUser } = useCurrentUser()
    const [scores, setScores] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchCurrentUser()
        getScores().then(res => setScores(res))
    }, [])
    console.log(currentUser)

    return (
        <Container>
            {currentUser ? (
                <>
                    <Segment size="big" >
                        <Item.Group>
                            <Item style={{ "min-height": "150px" }}>
                                <Item.Image
                                    src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'
                                    fluid
                                />
                                <Item.Content>
                                    <Item.Header>{currentUser?.username}</Item.Header>
                                    <Item.Extra>{currentUser?.email}</Item.Extra>
                                    <Button negative floated="right" onClick={(e) => {
                                        logout()
                                        navigate("/")
                                        navigate(0)
                                    }}
                                    >Выйти</Button>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Segment>

                    <Scores scores={scores} />
                </>
            ) : (
                <Message negative size="large">Not authorized</Message>
            )
            }
        </Container>
    )
}

const Scores = ({ scores }) => (
    <Segment>
    <Label attached='top' inverted size="large">
        Результаты
    </Label> 
        {scores.length > 0 
        ? (<Grid divided="vertically" padded stretched style={{ "padding-top": "0.5em" }}>
            {scores.map(score => {
                if (score.exam != "") {
                    return (<Grid.Row divided verticalAlign="middle">
                        <Grid.Column width={15}>
                            <Header as="h3">{score.exam}</Header>
                        </Grid.Column>
                        <Grid.Column width={1}><Header>{score.result}/{score.total}</Header></Grid.Column>
                    </Grid.Row>)
                }
            })}
        </Grid>
        )
        : (<div style={{ "padding-top": "0.5em" }}>Вы еще не сдали ни один экзамен...</div>)
        }
    </Segment>
)

export default Profile;