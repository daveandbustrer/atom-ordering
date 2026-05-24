import { Toast } from "react-bootstrap";

interface Prop {
  toggle: (id: number) => void;
  name: string;
  id: number;
  text?: string;
}

export function Confirm({
  toggle,
  name,
  id,
  text = "is added to the cart",
}: Prop) {
  return (
    <Toast onClose={() => toggle(id)}>
      <Toast.Header>
        <img src="/pizza.png" alt="Pizza" />
        <strong className="me-auto">Your order is on the way</strong>
        <small>just now</small>
      </Toast.Header>

      <Toast.Body>
        Your {name} {text}
      </Toast.Body>
    </Toast>
  );
}
