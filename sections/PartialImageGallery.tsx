import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  images: ImageWidget[];
  /** @default 3 */
  visibleImages: number;
}

const PartialImageGallery = (props: Props) => {
  const visibleImages = [...props.images].splice(0, props.visibleImages);

  return (
    <div class="flex flex-col mx-auto gap-2 mt-8 max-w-3xl">
      {visibleImages.map((item) => (
        <img class="hover:scale-125 transition" src={item} />
      ))}
      {visibleImages.length !== props.images.length && (
        <button
          {...usePartialSection<Props>({
            props: { visibleImages: props.visibleImages + 1 },
          })}
        >
          +
        </button>
      )}
    </div>
  );
};

export default PartialImageGallery;
