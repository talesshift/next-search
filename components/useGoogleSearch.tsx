import { useEffect, useState } from "react"
import { test_response } from "../public/response" 
const key = process.env.NEXT_PUBLIC_SEARCH_API_KEY

const GOOGLE_CONTEXT_KEY = "a0d1d7ad50cc04e1e"

const useGoogleSearch = (term: string) => {
    
    const [data, setData] = useState<typeof test_response>()
    
    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${GOOGLE_CONTEXT_KEY}&q=${term}`
            )
            .then((response) => response.json())
            .then(result => {
                setData(result)
            })
        }
        fetchData()
        //console.log(data)
    }, [term])
    
    return (data)
}
export default useGoogleSearch