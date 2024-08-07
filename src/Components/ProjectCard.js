import { Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const ProjectCard = ({ title, description, skillset, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>{skillset}</p>
        </div>
      </div>
      <div className="learn-btn">
        <button><a href="#">Learn More <ArrowRightCircle/></a></button>
      </div>
    </Col>
  )
}

