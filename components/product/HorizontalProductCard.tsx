import { Product } from "apps/commerce/types.ts";
import { useOffer } from "deco-sites/welldecocamp/sdk/useOffer.ts";
import { formatPrice } from "deco-sites/welldecocamp/sdk/format.ts";

import AddToCartButtonVTEX from "deco-sites/welldecocamp/islands/AddToCartButton/vtex.tsx";
import VoteButton from "deco-sites/welldecocamp/islands/VoteButton.tsx";

export interface Props {
    product: Product;
    totalVotes: number;
  }

const HorizontalProductCard = (props: Props) => {
    const { product, totalVotes } = props;
  
    const { listPrice, seller } = useOffer(product.offers);
  
    return (
      <div class="flex gap-2 items-center justify-center max-w-5xl mx-auto">
        <div class="max-w-32 overflow-hidden">
          <img src={product.image[0].url} class="hover:scale-125 transition" />
        </div>
  
        <div class="flex flex-col gap-2">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
  
        <div>
          <p>{formatPrice(listPrice, product.offers?.priceCurrency)}</p>
          <div>
            <AddToCartButtonVTEX
              productID={product.productID}
              seller={seller}
            />
          </div>
        </div>
        <div>
          <VoteButton productId={product.productID} votesCount={totalVotes} />
        </div>
      </div>
    );
  };

export default HorizontalProductCard