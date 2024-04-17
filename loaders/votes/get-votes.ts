import { SITE_ID } from "deco-sites/welldecocamp/constants.tsx";

export type Res = {
  total: number;
};

const loader = async (): Promise<Res | null> => {
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const res = await fetch("https://camp-api.deco.cx/events", {
      signal,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": SITE_ID,
      },
    });
    const tratedResponse = await res.json();
    console.log(tratedResponse);
    return tratedResponse;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default loader;
