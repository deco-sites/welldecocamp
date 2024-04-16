import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
    images: ImageWidget[]
     /** @default 3 */
    visibleImages: number
}


const PartialImageGallery = (props: Props) => {

    const visibleImages = [...props.images].splice(0, props.visibleImages);

    console.log(visibleImages, props.images, props.visibleImages)

    return <div>
        {visibleImages.map(item => <img src={item}/>)}
        <button {...usePartialSection<Props>({
          props: { visibleImages: 4 },
        })}>+</button>
        

    </div>

}

export default PartialImageGallery