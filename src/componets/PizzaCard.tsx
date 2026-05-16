import { Badge, Button, Card, Ratio } from "react-bootstrap";
interface Prop {
  data: {
    id: number;
    name: string;
    image: string;
    desc: string;
    price: number;
  };
  setOrdered: any;
}
function PizzaCard({ data, setOrdered }: Prop) {
  return (
    <Card className="h-100 shawdow-sm bg-white rounded">
      <Ratio className="ratio-1x1">
        {data.image ? (
          <Card.Img variant="top" src={data.image} />
        ) : (
          <Card.Img variant="top" src={"pizza.png"} />
        )}
      </Ratio>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex mb-2 justify-content-between">
          <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
          <Badge pill bg="warning" text="black" className="mb-1">
            ${data.price}
          </Badge>
        </div>
        <Card.Text className="text-secondary">{data.desc}</Card.Text>
        <Button
          onClick={() => setOrdered(data.name, data.id)}
          className="mt-auto font-weight-bold"
          variant="primary"
        >
          ADD TO CART
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;
