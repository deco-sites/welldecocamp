import { signal } from "@preact/signals";
import { invoke } from "deco-sites/welldecocamp/runtime.ts";

const THIRTY_SECONDS = 30000;

const votesCount = signal(0);
const productsVoted = signal<string[]>([]);

const state = {
  votesCount,
};

const updateVotes = () => {
  const composeReq = productsVoted.value.map((item) =>
    invoke["deco-sites/welldecocamp"].actions.votes["increment-votes"]({
      productId: item,
    })
  );
  Promise.all(composeReq);
  productsVoted.value = [];
};

setInterval(updateVotes, THIRTY_SECONDS);

export const useVote = () => {
  const incrementVotes = (productId: string) => {
    votesCount.value = votesCount.value + 1;
    productsVoted.value = [...productsVoted.value, productId];
  };

  return { ...state, incrementVotes };
};
