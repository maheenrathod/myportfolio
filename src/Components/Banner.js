import { useEffect, useState } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {

/* animations */
  
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "hi, i'm maheen"];
    const period = 2000;

    useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    }, delta);

    return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
    }

  if (!isDeleting && updatedText === fullText) {
    setIsDeleting(true);
    setIndex(prevIndex => prevIndex - 1);
    setDelta(period);
  } else if (isDeleting && updatedText === '') {
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setIndex(1);
    setDelta(500);
  } else {
    setIndex(prevIndex => prevIndex + 1);
  }
}

  return (
    <section className='banner' id="#home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>
                        LOADING...
                    </span>
                    <h1>
                        {`/* `}<span className='wrap'>{text}</span>{` */`}
                    </h1>
                    <p>welcome to my portfolio! i like gathering, processing, and analyzing data. </p>
                    <a href="https://www.linkedin.com/in/maheen-rathod/"><button>Let's Connect <ArrowRightCircle/></button></a>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src="" alt="Header Image"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
