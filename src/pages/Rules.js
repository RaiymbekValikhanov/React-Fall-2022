import { useEffect, useState } from "react";
import { Container, Menu, Item, Segment, Button, Label, Icon, Grid, Header } from "semantic-ui-react";
import { getRules, getRuleSection } from "../services/requests";
import './Rules.css'

const SidePanel = (props) => {
    const { items, active, setActive } = props

    return (
        <div className="side-panel">
            <Menu vertical fluid>
                {items.map((item) => (
                    <Menu.Item
                        active={active.id == item.id}
                        onClick={() => setActive(item)}
                    >
                        {item.id}. {item.title}
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    )
}

const Section = (props) => {
    const { section } = props;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        getRuleSection(section.id)
            .then(result => {
                console.log(result)
                setText(result)
            })
    }, [section])

    return (
        <div className="section">
            <Container text>
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </Container>
        </div>
    )
}

const Rules = () => {
    const [sections, setSections] = useState([]);
    const [section, setSection] = useState({ id: 0, title: "" });

    useEffect(() => {
        getRules()
            .then(result => {
                setSections(result);
            })
    }, [])

    return (
        <div className="rules">
            <SidePanel
                items={sections}
                active={section}
                setActive={setSection}
            />
            <Section
                section={section}
            />
        </div>
    )
}

export default Rules;