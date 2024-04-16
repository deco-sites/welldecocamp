export interface Props {
    code: string;
    description: string
}


const Component = (props: Props) => {

    C
    return <div class="flex flex-col items-center justify-center gap-2 bg-red-600 rounded-lg p-2 w-max mx-auto mb-4">
                <p class="text-[white]">{props.code}</p>
                <p class="text-[white]">{props.description}</p>
            </div>
}

export default Component