var product = [
    { name: 'Oishi', quantity: 11, price: 4000, category:'food'},
    { name: 'Mirinda', quantity: 14, price: 6000, category:'food' },
    { name: 'CocaCola', quantity: 13, price: 7000, category:'food'},
    { name: 'Socola', quantity: 16, price: 10000, category:'food'},
    { name: 'Coffe', quantity: 4, price: 12000, category:'food'},
    { name: 'TeaMilk', quantity: 5, price: 20000, category:'food'},
    { name: 'Sausage', quantity: 10, price: 10000, category:'food'},
    { name: 'Book', quantity: 6, price: 3000, category:'edu'},
    { name: 'Pen', quantity: 5, price: 5000, category:'edu'},
    { name: 'Clear', quantity: 1, price: 2000, category:'edu'},
  ];
  var a=product.filter(function(pro) {
      return pro.category==='food';
  }).map(function(pro){
        return pro.name;
  }).join();
  console.log('List all product is food:'+a);
  // var c=product.filter(product=>product.category==='food').map(product=>product.name).join(', ');
  // console.log(c);
  var b=product.reduce((total,pro)=>total+pro.price*pro.quantity,0);
  console.log('Total price:'+b);

  var c=product.filter(product=>product.quantity*product.price>=100000).map(product=>product.name);
  console.log('Product inventory more 100000 is:'+c);

  var d=product.sort((pro1,pro2)=>pro2.price-pro1.price).map(product=>product.name).shift();
  console.log('Product have most price is:'+d);
