import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  import styled from 'styled-components'



const NasaCard = ({title, date, url, explanation, copyright}) => {

    const Header = styled.h1`
        font-size: 1.7rem;
        font-weight: bold;`

    const Wrapper = styled.div`
        background-color: #BFB5B3;
        border: 20px double black;`

    const Date = styled.p`
        font-size: .2 rem;
        `


    

    return (
        <Wrapper>
            <CardBody>
                <Header>{title}</Header>
                <Date>{date}</Date>
            </CardBody>
            <img className="img-of-the-day" src={url} />
            <CardBody>
                <CardText className="explanation">{explanation} </CardText>
                <CardText>© {copyright} </CardText>
            </CardBody>
        </Wrapper>
    )
}

export default NasaCard
