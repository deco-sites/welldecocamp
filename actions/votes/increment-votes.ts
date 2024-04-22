import { SITE_ID } from "deco-sites/welldecocamp/constants.tsx";

export interface Props {
  productId: string;
}

export type Res = {
  total: number;
  product: number;
};

const action = async (
  props: Props,
  _req: Request,
): Promise<Res | null> => {
  const { productId } = props;

  try {
    const res = await fetch("https://camp-api.deco.cx/event", {
      body: JSON.stringify({ productId }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": SITE_ID,
      },
    });
    const tratedResponse = await res.json();
    return tratedResponse;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default action;
