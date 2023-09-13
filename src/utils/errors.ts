import axios from "axios";

export function getErrors(e: any) {
    if (axios.isAxiosError(e)) {
        if (e.response) {
            console.log("AXIOS_ERROR_RESPONSE_STATUS: " + e.response.status);
            console.log("AXIOS_ERROR_RESPONSE_DATA_ERROR: " + e.response.data.error);
            console.log("AXIOS_ERROR_MESSAGE: " + e.message);
            console.error("AXIOS_ERROR_RESPONSE: " + e.response);
        } else {
            console.error("AXIOS_ERROR: " + e);
        }
    } else {
        console.error("GENERIC_ERROR: " + e);
    }
}