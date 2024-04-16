import { useSignal } from "@preact/signals";
import Button from "deco-sites/welldecocamp/islands/button.tsx";

interface Props{
    links: {
        title: string;
        href: string;
    }[]
}

const HeaderCamp = (props: Props) => {
    return <header class="h-9 bg-orange-300">
        {/* <div class="flex items-center justify-between px-4">
            {props.links?.map(item => <a href={item.href} class="text-black">{item.title}</a>)}
        </div> */}
        <Button />
    </header>
}

export default HeaderCamp