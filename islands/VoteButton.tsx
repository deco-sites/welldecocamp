import { useSignal } from "@preact/signals";
import { useVote } from "../sdk/useVote.ts";
import { toast, ToastContainer } from "tostfy";
import { SendEventOnClick } from "deco-sites/welldecocamp/components/Analytics.tsx";

interface Props {
  productId: string;
  votesCount: number;
}
const VoteButton = ({ productId, votesCount }: Props) => {
  const { incrementVotes } = useVote();
  const userAlreadyVoted = useSignal(false);
  const incrementDefaultVote = useSignal(votesCount);

  const handleUserVote = () => {
    userAlreadyVoted.value = true;
    incrementDefaultVote.value = incrementDefaultVote.value + 1;
    incrementVotes(productId);

    toast("Produto adicionado com sucesso!", {
      autoClose: 3000,
      containerId: productId,
      position: "bottom-center",
      hideProgressBar: true,
    });


  };

  const id = `product-horizontal-card-${productId}`;

  return (
    <>
      <div class="flex flex-col gap-2 items-center" id={id}>
        {userAlreadyVoted.value
          ? <img class="w-8 h-8" src="/image/mood-check.png" />
          : (
            <button
              onClick={handleUserVote}
              class="w-8 h-8"
            >
              <img src="/image/mood-smile.png" />
              <SendEventOnClick
              id={id}
              event={{
                name: "post_score" as const,
                params: {
                  score: incrementDefaultVote + 1,
                  character: 'user'
                },
              }}
            />
            </button>
          )}
        <span>{incrementDefaultVote.value}</span>
        <ToastContainer containerId={productId} />
      </div>
    </>
  );
};

export default VoteButton;
