import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, withRouter  } from "react-router-dom";
import { userContext } from "../store";

const FarmersCard = props => {
  const [userData, setUserData] = useContext(userContext);
  const { eachFarmerDetails, baseImageUrl, history } = props;
  const image = `${baseImageUrl}${eachFarmerDetails.passport_photo}`;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        FullName:
        <Card.Title>
          {" "}
          {eachFarmerDetails.first_name} {eachFarmerDetails.surname}
        </Card.Title>
        Occupation:<Card.Title> {eachFarmerDetails.occupation}</Card.Title>
       
        <Button
         onClick={ ()=>{
             setUserData(eachFarmerDetails);
             return props.history.push('/profile');
         }}
          variant="primary"
        >
          View More Details
        </Button>
      

      </Card.Body>
    </Card>
  );
};

export default withRouter(FarmersCard);
