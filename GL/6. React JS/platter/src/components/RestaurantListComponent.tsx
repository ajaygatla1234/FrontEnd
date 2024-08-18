import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleRestaurantComponent from "./SingleRestaurantComponent";
import axios from "axios";

interface Restaurant {
    id: number;
    name: string;
    description: string;
    cuisines: string[];
    opens: string;
    closes: string;
    rating: number;
    numRatings: number;
    costForTwo: number;
    imageUrl: string;
}

const RestaurantListComponent: React.FC = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [jsonServer, setJsonServer] = useState("http://localhost:3001/");

    const fetchData = async () => {
        const response = await axios.get<Restaurant[]>("http://localhost:3001/restaurants");
        setRestaurants(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Container>
                <Row>
                    {restaurants.map((temp) => (
                        <Col md={4} key={temp.id}>
                            <SingleRestaurantComponent
                            id={temp.id}
                                name={temp.name}
                                description={temp.description}
                                image={jsonServer + temp.imageUrl}
                            ></SingleRestaurantComponent>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default RestaurantListComponent;
