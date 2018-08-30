
const getUser = () => {
    var user = '';
    if (sessionStorage.getItem('user')) {
        user = sessionStorage.getItem('user');
    } else {
        user = 'user-' + new Date().getTime();
        sessionStorage.setItem('user', user);
    }
    return user;
}
const getDBCart = () => {
    const dataKey = getUser();
    const data = localStorage.getItem(dataKey) || "{}";
    return JSON.parse(data);
}

const addToLocalStorage = (orderKey) => {
    const cart = getDBCart();
    const dataKey = getUser();
    if (isEmptyObject(cart)) {
        localStorage.setItem(dataKey, JSON.stringify({ [orderKey] : 1 }));
    } else {
        let selected = false;
        for (var c in cart) {
            if (cart.hasOwnProperty(c) && c === orderKey) {
                cart[c] += 1;
                selected = true;
            }
        }
        if (!selected) {
            const newCart = {...cart, [orderKey] : 1 };
            localStorage.setItem(dataKey, JSON.stringify(newCart));
        } else {
            localStorage.setItem(dataKey, JSON.stringify(cart));
        }
    }
}

const removeToLocalStorage = (key) => {
    var cart = getDBCart();
    const dataKey = getUser();
    for (var propKey in cart) {
        if (cart.hasOwnProperty(propKey) && propKey === key) {
            delete cart[propKey];
        } 
    }
    localStorage.setItem(dataKey, JSON.stringify(cart));
    console.log(cart);
}

const clearAll = () => {
    const dataKey = getUser();
    localStorage.clear(dataKey);
}

function isEmptyObject(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return true;
}

export { getDBCart, addToLocalStorage, removeToLocalStorage, clearAll };