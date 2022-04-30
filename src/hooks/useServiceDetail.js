import { useEffect, useState } from "react";


const useServiceDetail = (serviceId) => {

    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://pacific-atoll-92625.herokuapp.com/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return [service, setService];
}

export default useServiceDetail;