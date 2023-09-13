import { useEffect, useState } from "react";
import { apiClientSide } from "../services/clientSideFetch";

export function useFetch<T = unknown>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        apiClientSide.get(url).then(response => {
            setData(response.data);
        }).catch(err => {
            setError(err);
        }).finally(() => {
            setIsFetching(false);
        })
    }, [url]);

    return { data, error, isFetching }
}