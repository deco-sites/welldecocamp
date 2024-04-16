import { useSignal } from "@preact/signals";

const Button = () => {

    const state = useSignal("teste");

    return <button onClick={() => state.value = state.value + "2"}>CTO {state.value}</button>
}

export default Button