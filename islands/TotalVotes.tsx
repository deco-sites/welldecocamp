import { useEffect } from "preact/hooks";
import { useVote } from "../sdk/useVote.ts";

interface Props {
  votesCount: number;
}
const TotalVotes = ({ votesCount }: Props) => {
  const { votesCount: votesCountState } = useVote();

  useEffect(() => {
    votesCountState.value = votesCount;
  }, []);

  const count = votesCount > votesCountState.value
    ? votesCount
    : votesCountState.value;
  return (
    <div class="flex gap-2 items-center">
      <img class="w-8 h-8" src="/image/friends.png" />
      <span>{count}</span>
    </div>
  );
};

export default TotalVotes;
