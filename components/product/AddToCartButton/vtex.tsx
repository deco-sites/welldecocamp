import { useCart } from "apps/vtex/hooks/useCart.ts";
import Button, { Props as BtnProps } from "./common.tsx";
import { toast } from "tostfy";
export interface Props extends Omit<BtnProps, "onAddItem"> {
  seller: string;
  productID: string;
}

function AddToCartButton({ seller, productID, eventParams }: Props) {
  const { addItems } = useCart();
  const onAddItem = () => {
    addItems({
      orderItems: [{
        id: productID,
        seller: seller,
        quantity: 1,
      }],
    }).finally(() => {
      toast("Produto adicionado com sucesso!", {
        autoClose: 3000,
        containerId: productID,
        position: "bottom-center",
        hideProgressBar: true,
      });
    });
  };

  return <Button onAddItem={onAddItem} eventParams={eventParams} />;
}

export default AddToCartButton;
