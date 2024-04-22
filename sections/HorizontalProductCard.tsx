import type { Product } from "apps/commerce/types.ts";
import AddToCartButtonVTEX from "deco-sites/welldecocamp/islands/AddToCartButton/vtex.tsx";
import { formatPrice } from "deco-sites/welldecocamp/sdk/format.ts";
import { AppContext } from "deco/mod.ts";
import Component from 'deco-sites/welldecocamp/components/product/HorizontalProductCard.tsx';
import type {Props as HorizontalProductCardProps} from 'deco-sites/welldecocamp/components/product/HorizontalProductCard.tsx';
import { SectionProps } from "deco/types.ts";

export interface Props {
  product: Product;
}

export async function loader(
  props: Props,
  _req: Request,
  ctx: AppContext,
): Promise<HorizontalProductCardProps> {
  const votes = await ctx.invoke["deco-sites/welldecocamp"].loaders.votes
    ["get-product-votes"]({ productId: props.product.productID });
  return { ...props, totalVotes: votes?.product || 0 };
}

const HorizontalProductCard = (props: SectionProps<typeof loader>) => {
  return <Component {...props}/>
};

export function LoadingFallback() {
  return (
    <div>
      <div class="skeleton w-full h-[128px]" />
      <h1 class="bg-gray-500 w-[32px]">{product.name}</h1>
      <p>
        <span class="loading loading-spinner" />
      </p>

      <div>
        <p>{formatPrice(listPrice, product.offers?.priceCurrency)}</p>
        <div>
          <AddToCartButtonVTEX
            productID={product.productID}
            seller={seller}
          />
        </div>
      </div>
    </div>
    // <div style={{ height: "716px" }} class="flex justify-center items-center">
    //   <span class="loading loading-spinner" />
    // </div>
  );
}

export function ErrorFallback({ error }: { error?: Error }) {
  // Sua lógica de tratamento de erro vai aqui
  // Você pode exibir uma mensagem de erro, registrar o erro ou renderizar uma interface de substituição
  return (
    <div>
      <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/04/Fortaleza-Castelao-e1696422421670.jpg?w=1220&h=674&crop=1" />
      <h1>Fortaleza</h1>
      <p>
        O Estádio Governador Plácido Castelo, também conhecido como Arena
        Castelão, ou simplesmente Castelão, é um estádio de futebol brasileiro
        localizado em Fortaleza, Ceará, e inaugurado em 1973.
      </p>
      <a href="/cultura">
        para saber mais
      </a>
    </div>
  );
}

export default HorizontalProductCard;
