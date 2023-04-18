const apiKey = '8652831efa470fe5d2620059a0a467bb';
const appId = '3fdb2aea';
const query = 'frutas';

fetch(`https://api.nutritionix.com/v1_1/search/${query}?results=0:10&appId=${appId}&appKey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data.hits)
   /* data.hits.forEach(hit => {
      console.log(`Nome: ${hit.fields.item_name}`);
      console.log(`Preço: ${hit.fields.nf_price}`);
      console.log(`Descrição: ${hit.fields.item_description}`);
      console.log(`URL da imagem: ${hit.fields.nf_image_url}`);
      console.log('---');
    });
    */
  })
  .catch(error => console.log(error));
