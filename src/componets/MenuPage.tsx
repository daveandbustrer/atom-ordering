import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import { Col, Container, Row, ToastContainer } from "react-bootstrap";
import { Confirm } from "./Confirm";
import { PizzaCard } from "./PizzaCard";
import pizzas from "./data.json";

interface Prop {
  cartFunc: (arg0: string) => void;
}
function MenuPage({ cartFunc }: Prop) {
  const initialState = pizzas.map(() => ({
    name: "",
    visible: false,
  }));
  const [ordered, setOrdered] = useState(initialState);

  let amount_of_things = useRef(0);

  function display_confirm(name: string, id: number) {
    cartFunc(name);
    setOrdered((prev) => {
      amount_of_things.current++;
      const copy = [...prev];
      copy[id - 1] = { name, visible: true };
      return copy;
    });

    setTimeout(() => {
      amount_of_things.current--;
      setOrdered((prev) => {
        const copy = [...prev];
        copy[id - 1].visible = false;
        return copy;
      });
    }, 3000);
  }

  return (
    <>
      <ToastContainer position="top-start" className="p-3">
        <div className="z-3 position-fixed pt-5">
          {ordered.map(
            (item, index) =>
              item.visible && (
                <Confirm
                  key={item["name"] + String(index)}
                  id={index + amount_of_things.current}
                  name={item.name}
                  toggle={() => {
                    setOrdered((prev) => {
                      const copy = [...prev];
                      copy[index].visible = false;
                      return copy;
                    });
                  }}
                />
              ),
          )}
        </div>
      </ToastContainer>

      <Container className="z-1 position-absolute pt-5 start-50 translate-middle-x w-100">
        <Row className="justify-content-evenly">
          {pizzas.map((data) => (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-5" key={data.id}>
              <PizzaCard data={data} setOrdered={display_confirm} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default MenuPage;
