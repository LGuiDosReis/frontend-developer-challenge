//Função que retorna dados da API no formato json

async function getProductsAsync(url) {
  let response = await fetch(`https://${url}`);
  let data = await response.json();
  return data;
}

//Passando dados no formato jason para o script que alimenta a lista de produtos
const getProductsList = (
  url = "frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"
) => {
  getProductsAsync(url).then(data => injectProjects(data));
};

getProductsList();
