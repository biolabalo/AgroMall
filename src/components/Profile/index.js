import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userContext } from "../../store";


const Profile = () => {
    const [userData, setUserData] = useContext(userContext);
    const image = `https://s3-eu-west-1.amazonaws.com/agromall-storage/${userData.passport_photo}`;
    const image2 = `https://s3-eu-west-1.amazonaws.com/agromall-storage/${userData.id_image}`;
  return (
 <div style={{ marginTop: "10rem" }} className="profile-div">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        FullName:
        <Card.Title>
          {" "}
          {userData.first_name} {userData.surname}
        </Card.Title>
        Occupation:<Card.Title> {userData.occupation}</Card.Title>
        Phone:<Card.Title> {userData.mobile_no}</Card.Title>
        D.O.B: <Card.Title> {userData.dob}</Card.Title>
        BVN:: <Card.Title> {userData.bvn}</Card.Title>
      </Card.Body>
    </Card>
 </div>
  );
};

export default Profile;
