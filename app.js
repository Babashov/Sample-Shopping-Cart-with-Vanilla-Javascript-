let products = [];

document.querySelectorAll('#select').forEach((element)=>{  
element.addEventListener('click',test)  
});

function test(e)
{    
    const productname = e.target.previousSibling.previousElementSibling.innerHTML;    
    products.push({title:`${productname}`})
    localStorage.setItem('products',JSON.stringify(products));
    e.preventDefault();
    showPosts();
}

  function showPosts()
  {
    if(localStorage.getItem('products') !== null)
    {
      products = JSON.parse(localStorage.getItem('products'));
      document.getElementById('output').innerHTML = '';
      products.forEach((element)=>{
        
        document.getElementById('output').innerHTML += `
        <li>${element.title}</li>        
        `
    });      
    }else{
      console.log("There is no item in shopping cart")
    }
  }
  showPosts();
 