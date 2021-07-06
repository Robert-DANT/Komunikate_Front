import { Card, CardDeck, Row, Badge, CardColumns, Button, Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./UserCard.css";
import React, { useState, useEffect } from "react";



const UserCards = () => {

  let { userr } = useParams();

  const [user, setUser] = useState();

  // const calcDate = (time) => {
  //   const event = new Date(time);
  //   return event.toLocaleDateString({
  //     hour: "numeric",
  //     minute: "numeric",
  //   });
  // };

  const fetchUsers = async () => {
    await axios
      .get("https://stark-fjord-75040.herokuapp.com/users")
      .then((response) => setUser(response.data.users))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container className="cards-container">
      <CardColumns>
        {user &&
          user.map((users) => (
            <Link to={`/users/${users._id}`}>
              <Card>
                <Card.Img
                  variant="top"
                  src={users.userImg || "https://cdn.pixabay.com/photo/2017/08/16/00/59/panorama-2646143_960_720.jpg"}
                />
                <Card.Body>
                  <Card.Title>{users.first_name}</Card.Title>
                  <Card.Text>{users.last_name}</Card.Text>
                </Card.Body>

              </Card>
            </Link>
          ))}
      </CardColumns>
    </Container>
  );
};

export default UserCards;
