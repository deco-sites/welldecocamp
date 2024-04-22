import { MatchContext } from "deco/blocks/matcher.ts";

export interface Props {
  campaignName: string;
}

function extractQueryParameters(url: string) {
  const searchParams = new URLSearchParams(url.split("?")[1]);
  const queryParams = {};
  for (const param of searchParams.entries()) {
    queryParams[param[0]] = param[1];
  }
  return queryParams;
}

export default function Utm(props: Props, ctx: MatchContext) {
  const parameters = extractQueryParameters(ctx.request.url);
  return parameters?.utmcampaign &&
      parameters.utmcampaign === props.campaignName
    ? true
    : false;
}
