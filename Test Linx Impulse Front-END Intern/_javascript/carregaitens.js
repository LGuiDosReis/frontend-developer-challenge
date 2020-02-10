//Função de carregar os itens

const injectProjects = ({ products, nextPage }) => {
  let content = "";

  if (products) {
    for (product of products) {
      content += `
                <div class="card">
                    <div class="card-image">
                        <img src="http:${product.image}"/>
                    </div>
                    <h3 class="card-name">${product.name}</h3>
                    <p class="card-description">${product.description}</p>
                    <p class="card-oldPrice">De: R$${product.oldPrice.toFixed(
                      2
                    )}</p>
                    <p class="card-price">Por: R$${product.price.toFixed(2)}</p>
                    <p class="card-installments">ou ${
                      product.installments.count
                    }x de R$${product.installments.value.toFixed(2)}</p>
                    <button class="card-button">Comprar</button>
                </div>
            `;
    }
  }

  const cardContainer = document.querySelector(".products-list");
  cardContainer.innerHTML += content;

  //Função mais itens
  const cardsButton = document.querySelector(".next-products");
  cardsButton.onclick = () => getProductsList(nextPage);
};
