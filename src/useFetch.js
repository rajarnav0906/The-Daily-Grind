import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        console.log("Fetching URL:", url);

        setTimeout(() => {
            fetch(url, { signal : abortCont.signal})
            .then((res) => {
                if(!res.ok){
                    throw Error("Unable to fetch data!");
                }
                return res.json();
            })
            .then((data) => {
                console.log("Fetched Data:", data);
                setData(data);
                setLoading(false);
                setError(null);
            })
            .catch((error) => {
                if(error.name === "AbortError"){
                    console.log("fetching aborted");
                }
                else{
                    console.error("Fetch error:", error);
                    setError(error.message);
                    setLoading(false);
                }
                
            });
        }, 1000)

        return () => {
            abortCont.abort();
        }
        
    }, [url])

    return {data, loading, error};
}

export default useFetch;