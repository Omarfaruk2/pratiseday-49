import { useEffect, useState } from "react"


const useTshart = () => {
    const [tShirts, setTshirts] = useState([])
    useEffect(() => {
        fetch("tshart.json")
            .then(res => res.json())
            .then(data => setTshirts(data))
    }, [])
    return [tShirts, setTshirts]
}
export default useTshart