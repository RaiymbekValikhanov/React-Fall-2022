import { Container, Item, Segment, Button, Label, Icon } from "semantic-ui-react";


const Home = () => {
    const paragraph = "something"

    return (
        <Container>
            <Item>
                <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

                <Item.Content>
                    <Item.Header as='a'>My Neighbor Totoro</Item.Header>
                    <Item.Meta>
                    <span className='cinema'>IFC Cinema</span>
                    </Item.Meta>
                    <Item.Description>{paragraph}</Item.Description>
                    <Item.Extra>
                    <Button primary floated='right'>
                        Buy tickets
                        <Icon name='right chevron' />
                    </Button>
                    <Label>Limited</Label>
                    </Item.Extra>
                </Item.Content>
            </Item>
            <Item>
                <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

                <Item.Content>
                    <Item.Header as='a'>My Neighbor Totoro</Item.Header>
                    <Item.Meta>
                    <span className='cinema'>IFC Cinema</span>
                    </Item.Meta>
                    <Item.Description>{paragraph}</Item.Description>
                    <Item.Extra>
                    <Button primary floated='right'>
                        Buy tickets
                        <Icon name='right chevron' />
                    </Button>
                    <Label>Limited</Label>
                    </Item.Extra>
                </Item.Content>
            </Item>
        </Container>
    )
}

export default Home;

