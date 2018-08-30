import data from '../data';

var fetchData = () => {
    return new Promise((resolve, reject) => {
        const result = data.slice(0, 9);
        resolve(result);
    })
}

export default {
    fetchData
}
