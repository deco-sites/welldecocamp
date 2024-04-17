import { useSignal } from "@preact/signals";
import { useVote } from "../sdk/useVote.ts";

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
  };

  return (
    <div class="flex flex-col gap-2 items-center">
      {userAlreadyVoted.value
        ? <img class="w-8 h-8" src="/image/mood-check.png" />
        : (
          <button
            onClick={handleUserVote}
            class="w-8 h-8"
          >
            <img src="/image/mood-smile.png" />
          </button>
        )}
      <span>{incrementDefaultVote.value}</span>
    </div>
  );
};

export default VoteButton;
