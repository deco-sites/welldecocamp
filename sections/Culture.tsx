import type { Temperature } from "apps/weather/loaders/temperature.ts";

interface Props {
   temperature: Temperature | null
}

const Culture = (props: Props) => {
    const {celsius} = props.temperature
    return <div class="fixed h-10 w-10 rounded-full right-[32px] bottom-[32px] z-[23] bg-yellow-400 flex items-center justify-center">
        <p class="text-black">{celsius}</p>
    </div>
}

export default Culture