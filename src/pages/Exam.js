import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Header, Segment, List, Container, Label, Image, Progress, Icon, Message } from 'semantic-ui-react';
import { useCurrentUser } from "../providers/UserProvider";
import { getExamSection, saveScore } from "../services/requests";

const Question = ({ question, onAnswer }) => (
    <Segment raised size="huge" textAlign='center'>
        <Header as="h3">{question.title}</Header>
        {
            question.image
                ? <Image src={question.image} style={{
                    'border-radius': '5px',
                }} ui={false} />
                : null
        }
        <Form style={{ 'padding-top': '15px' }}>
            {question.choices.map((choice, id) => (
                <Form.Field key={id}>
                    <Button
                        fluid
                        onClick={() => onAnswer(id)}
                    >
                        {choice.text}
                    </Button>
                </Form.Field>
            ))}
        </Form>
    </Segment>
);

const Result = ({ all, correct }) => {
    const navigate = useNavigate();

    return (
        <Segment textAlign="center">
            <Header as='h1'>
                Правильных ответов: {correct} из {all}
            </Header>
            {
                correct >= all * 0.8
                    ?
                    <>
                        <Icon name='smile outline' size="massive" color="green" />
                        <Header as='h2' color="green">
                            Экзамен сдан!
                        </Header>
                    </>
                    :
                    <>
                        <Icon name='frown outline' size="massive" color="red" />
                        <Header as='h2' color="red">
                            Экзамен не сдан...
                        </Header>
                    </>
            }
            <Button size="big" onClick={() => window.location.reload()}>Сдать повторно</Button>
            <Button size="big" onClick={() => navigate('/Экзамены')} primary>Другой экзамен</Button>
        </Segment>
    )
}

const Exam = () => {
    const { currentUser, fetchCurrentUser } = useCurrentUser();
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [correct, setCorrect] = useState(0);

    const handleAnswer = choiceId => {
        if (questions[currentQuestion].choices[choiceId].correct) {
            setCorrect(correct + 1);
        }
        setAnswers([...answers, choiceId]);
        setCurrentQuestion(currentQuestion + 1);
    };

    useEffect(() => {
        fetchCurrentUser()
        getExamSection(id)
            .then(result => {
                setQuestions(result.questions)
                setTitle(result.title)
                console.log(result)
            })
    }, [])

    useEffect(() => {
        if (currentQuestion == questions.length && questions.length > 0) {
            saveScore(title, correct, questions.length).then(s => console.log(s))
        }
    }, [currentQuestion])

    return (
        <Container>
            {currentUser ? (
                <Container>
                    <Header></Header>
                    <List horizontal>
                        {questions.map((question, index) => (
                            <List.Item key={index + 1}>
                                <Label
                                    size='big'
                                    color={
                                        currentQuestion == questions.length
                                            ? (question.choices[answers[index]].correct
                                                ? 'green'
                                                : 'red')
                                            : (index == currentQuestion 
                                                ? 'black' 
                                                :'gray'
                                            )
                                    }
                                >
                                    {index + 1}
                                </Label>
                            </List.Item>
                        ))}
                    </List>
                    {currentQuestion < questions.length ? (
                        <Question
                            question={questions[currentQuestion]}
                            onAnswer={handleAnswer}
                        />
                    ) : (
                        questions.length > 0 && <Result all={questions.length} correct={correct} />
                    )}
                </Container>
            ) : (
                <Message negative size="large">Выполните вход или регистрацию</Message>
            )}
        </Container>
    );
}

export default Exam;

