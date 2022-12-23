import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Item, Icon, Segment, Message, Button } from "semantic-ui-react";
import { useCurrentUser } from "../providers/UserProvider";
import { logout } from "../services/requests";
import './Profile.css'

const Profile = () => {
    const { currentUser, fetchCurrentUser } = useCurrentUser()
    const [scores, setScores] = useState({})
    const navigate = useNavigate()

    useEffect(() => fetchCurrentUser(), [])
    console.log(currentUser)

    return (
        <Container>
            {currentUser ? (
            <Segment size="big" >
                <Item.Group>
                    <Item style={{"min-height": "150px"}}>
                        <Item.Image
                            src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'
                            fluid
                         />
                        <Item.Content>
                            <Item.Header>{currentUser?.username}</Item.Header>
                            <Item.Extra>{currentUser?.email}</Item.Extra>
                            <Button negative floated="right" onClick={(e) => {
                                logout()
                                navigate(0)
                            }}
                            >Выйти</Button>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            ) : (
                <Message negative size="large">Not authorized</Message>
            )
            }
        </Container>
    )
}

export default Profile;