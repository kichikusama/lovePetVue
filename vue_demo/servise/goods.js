const addGoodsImage = async () => await fetch(`/goods/`).then(response => response.json());
export default {
    addGoodsImage
}