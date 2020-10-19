function getItems(item) {
    if(localStorage.getItem(item)){
        const items = localStorage.getItem(item);
        return JSON.parse(items);
    } return [];
}

export default getItems;