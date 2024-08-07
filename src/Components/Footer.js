import { Container, Col, Row } from 'react-bootstrap';
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";


export const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center'>
                    <Col sm={6}>
                        <img src="" />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon' id="nav-text">
                            <a href="https://www.linkedin.com/in/maheen-rathod/"><FaLinkedinIn className='icon' /></a>
                            <a href="https://github.com/typerror"><BsGithub className='icon' /></a>
                            <a href="mailto: maheenrath@gmail.com"><MdEmail className='icon' /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}