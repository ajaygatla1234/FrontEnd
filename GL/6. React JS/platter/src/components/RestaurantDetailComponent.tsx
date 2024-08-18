import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

type RouteParams={
    id:string
}

interface Restaurant{
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

interface Item{
    id:number,
    restaurantId:number,
    name:string,
    price:number,
    description:string,
    imageUrl:string
}

const RestaurantDetailComponent:React.FC=()=>{

    const [jsonServer, setJsonServer] = useState("http://localhost:3001/");

    //reading the router param - url
    const {id}=useParams<RouteParams>();

    const [myRestaurant, setMyRestaurant]=useState<Restaurant>();

    const [myItems, setMyItems]=useState<Item[]>([]);

    //itemName, itemDescription, itemPrice
    const [itemName, setItemName]=useState("");
    const [itemDescription, setItemDescription]=useState("");
    const [itemPrice, setItemPrice]=useState(0);
    const [itemImage, setItemImage]=useState("");


    const fetchRestaurantInfo = async () => {
        const response = await axios.get<Restaurant>("http://localhost:3001/restaurants/" + id); // Added a slash before id
        setMyRestaurant(response.data);
        console.log(response);
    };
    
    const fetchItemInfo = async () => {
        const response = await axios.get<Item[]>("http://localhost:3001/items?restaurantId=" + id); // Added a slash before id
        setMyItems(response.data);
        console.log(response);
    };

    const addItem=async()=>{
        const newItem={
            
    "restaurantId": id,
    "name": itemName,
    "price": itemPrice,
    "description": itemDescription,
    "imageUrl": itemImage
        };
        await axios.post("http://localhost:3001/items", newItem);
        alert("New Item Added");
    }
    

    useEffect(()=>{
        fetchRestaurantInfo();
        fetchItemInfo();
    },[]);

    return(
        <>
        <Container>
            <div className="rest-header">
                <Row>
                    <Col md={3}>
                        <img src={jsonServer+myRestaurant?.imageUrl}/>
                    </Col>
                    <Col md={9}>
                        <h3>{myRestaurant?.name}</h3>
                        <p>{myRestaurant?.description}</p>
                        {
                            myRestaurant?.cuisines.map(temp=>(
                                // <span>{temp} </span>
                                <Badge style={{marginRight:"10px"}} bg="secondary">{temp}</Badge>
                            ))
                        }
                        <p> <b>Timing : {myRestaurant?.opens} to {myRestaurant?.closes}</b></p>
                        <p> <b>Timing : {myRestaurant?.rating} from {myRestaurant?.numRatings} persons</b></p>
                        <p>For Two People : Rs. {myRestaurant?.costForTwo}</p>
                    </Col>
                </Row>
            </div>
            <div className="rest-header">
                <Row>
                    {
                        myItems.map(temp=>
                            (
                                <Col md={4}>
                                    <Card>
      <Card.Img variant="top" src={jsonServer+temp.imageUrl} />
      <Card.Body>
        <Card.Title>{temp.name} - Rs. {temp.price}</Card.Title>
        <Card.Text>
          {temp.description}
        </Card.Text>
      </Card.Body>
    </Card>
                                </Col>
                            )
                        )
                    }
                </Row>
            </div>
            <div className="rest-form">
                    <Row>
                        <Col md={3}>
                        <Form onSubmit={addItem}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control required={true} type="text" onChange={(e)=>setItemName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Item Description</Form.Label>
                        <Form.Control required={true} as="textarea" rows={3}  onChange={(e)=>setItemDescription(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Item price</Form.Label>
                        <Form.Control required={true} type="number" onChange={(e)=>setItemPrice(parseInt(e.target.value))}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Item Image</Form.Label>
                        <Form.Control required={true} type="text" onChange={(e)=>setItemImage(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Button type="submit" variant="secondary">Submit</Button>
                    </Form.Group>
                    </Form>
                        </Col>
                    </Row>
            </div>
        </Container>
        </>
    )
}

export default RestaurantDetailComponent;