import { useState } from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  ToastContainer,
} from "react-bootstrap";
import { Confirm } from "./Confirm";

type cartitem = {
  name: string;
  amount: number;
};

interface Prop {
  cart: cartitem[];
  clearCart: () => void;
}

function CartPage({ cart, clearCart }: Prop) {
  let index = 1;
  let temp_array: any[] = [];
  let id = 0;

  for (let i = 0; i < cart.length; i++) {
    for (let j = 0; j < cart[i].amount; j++) {
      temp_array.push(
        <ListGroupItem key={`${cart[i].name}-${index}`}>
          <h6 className="display-6">
            {index}.{cart[i].name}
          </h6>
        </ListGroupItem>,
      );

      id += j + i + j * i;
      index++;
    }
  }

  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <ToastContainer position="top-start" className="p-3">
        {showConfirm && (
          <div className="z-3 position-fixed pt-5">
            <Confirm
              toggle={() => setShowConfirm(false)}
              key={"ordered"}
              id={id * index}
              name="order"
              text="is ready"
            />
          </div>
        )}
      </ToastContainer>

      <ListGroup className="align-center">{temp_array}</ListGroup>

      <Button
        onClick={() => {
          clearCart();
          setShowConfirm(true);
          setTimeout(() => setShowConfirm(false), 3000);
        }}
      >
        order
      </Button>
    </>
  );
}

export default CartPage;
