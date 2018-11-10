import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const MoreThings = (props) => {
  return (
    <div className="otherThings">
      <Card className="moreThings">
        <CardImg src="https://i.imgur.com/KoTzUU3.png" title="source: imgur.com" />
        <CardBody>
          <CardTitle>Art Walk</CardTitle>
          <CardSubtitle>Street art scene with insider</CardSubtitle>
          <CardText>$30 per person</CardText>
        </CardBody>
      </Card>

       <Card className="moreThings">
        <CardImg src="https://i.imgur.com/W19a6Qb.png" title="source: imgur.com" />
        <CardBody>
          <CardTitle>Pop Culture Walk</CardTitle>
          <CardSubtitle>David Bowie Walking Tour</CardSubtitle>
          <CardText>$50 per night</CardText>
        </CardBody>
      </Card>

      <Card className="moreThings">
        <CardImg src="https://i.imgur.com/ZukacGg.png" title="source: imgur.com" />
        <CardBody>
          <CardTitle>Craft Class</CardTitle>
          <CardSubtitle>A Potter's Wheel in SoHo</CardSubtitle>
          <CardText>$45 per person</CardText>
        </CardBody>
      </Card>
    </div>
  );
};


export default MoreThings;
