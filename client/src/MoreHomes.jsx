import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const MoreHomes = (props) => {
  return (
    <div className="otherHomes">
      <Card className="moreHomeCards">
        <CardImg src="https://i.imgur.com/kOiPYrj.png" title="source: imgur.com" />
        <CardBody>
          <CardTitle>Manhattan Chic Loft</CardTitle>
          <CardSubtitle>Entire House 2 Beds</CardSubtitle>
          <CardText>$200 per night</CardText>
        </CardBody>
      </Card>

       <Card className="moreHomeCards">
        <CardImg src="https://i.imgur.com/5bVbuAu.png" title="source: imgur.com" />
        <CardBody>
          <CardTitle>Alphabet City Studio</CardTitle>
          <CardSubtitle>Entire House 1 Bed</CardSubtitle>
          <CardText>$157 per night</CardText>
        </CardBody>
      </Card>

      <Card className="moreHomeCards">
        <CardImg src="https://i.imgur.com/9FVsgNl.png" title="source: imgur.com" />
        <CardBody>
          <CardTitle>Bushwick Bungalow</CardTitle>
          <CardSubtitle>Entire House 3 Beds</CardSubtitle>
          <CardText>$210 per night</CardText>
        </CardBody>
      </Card>
    </div>
  );
};


export default MoreHomes;
