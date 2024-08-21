import axios from "axios";

const url = "https://fp-ardrecruiting-prod-001-func.azurewebsites.net/api";

const api = {
    getConcreteList: () => {
        return axios
            .get(url + "/concretepurpose")
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                throw error;
            });
    },

    getConcreteDetial: (name) => {
        return axios
            .get(url + `/concretedetails?designatedConcrete=${name}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                throw error;
            });
    },
};

export default api;
