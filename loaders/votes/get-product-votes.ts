import { SITE_ID } from "deco-sites/welldecocamp/constants.tsx";

export type Res = {
  product: number;
};

export interface Props {
  productId: string;
}

const loader = async (props: Props): Promise<Res | null> => {
  const { productId } = props;

  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const res = await fetch(`https://camp-api.deco.cx/event/${productId}`, {
      signal,
      headers: {
        "x-api-key": SITE_ID,
      },
    });
    const tratedResponse = await res.json();
    return tratedResponse;
  } catch (err) {
    console.error(err, "seee error");
    return null;
  }
};

export default loader;
