let categorias = [
    {id: 1, nome: "Gelatos Tradicionais"},
    {id: 2, nome: "Gelatos Especiais"},
    {id: 3, nome: "Bebidas"},
    {id: 4, nome: "Sobremesas"}
];

let produtos = [
    {
        categoriaId: 1,
        nome: "Gelato de Chocolate",
        descricao: "gelato cremoso de chocolate intenso, feito com ingredientes selecionados para um sabor marcante e irresistível.",
        preco: 18.00,
        imagem: "https://cdn-productdbimages.barry-callebaut.com/sites/default/files/styles/web_gm_cacaobarry-detail/public/externals/00b4f165e4c0aa15773926a9f431d925.jpg?itok=CqDd-nVB"
    },
    {
        categoriaId: 2,
        nome: "Gelato Pistache Premium",
        descricao: "gelato artesanal de pistache importado, textura aveludada e sabor sofisticado.",
        preco: 24.00,
        imagem: "https://www.specialita.com/wp-content/uploads/2019/06/gelato-pistache.jpeg"
    },
    {
        categoriaId: 3,
        nome: "Milkshake de Morango",
        descricao: "milkshake cremoso preparado com gelato de morango e leite gelado, perfeito para refrescar seu dia.",
        preco: 16.00,
        imagem: "https://atibaia.tudoem.com.br/assets/img/anuncio/milk_shake_morango_1.webp"
    },
    {
        categoriaId: 4,
        nome: "Brownie com Gelato",
        descricao: "brownie quentinho servido com uma bola de gelato artesanal por cima, combinação perfeita de quente e frio.",
        preco: 28.00,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlnbwe07vM0neJFqokLo2Fa65FMveBXJ6Zw&s"
    }
];

module.exports = { categorias, produtos };