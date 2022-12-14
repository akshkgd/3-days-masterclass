let items = document.querySelectorAll('#btn')
console.log(items)
items.forEach((item)=>{
    item.addEventListener('click', orderFood)
})


function orderFood(e){
    let foodItems = document.getElementById('foodItems');
    let orderSuccessfull = document.getElementById('orderSuccessful');
    foodItems.style.display = 'none';
    orderSuccessfull.style.display = 'block';
    
    // manage order details
    let GST_PERCENTAGE = .18;
    let name =  e.target.dataset.name;
    let price = parseInt(e.target.dataset.price) ;
    let gst = price*GST_PERCENTAGE;
    let deliveryCharge = price < 140 ? 40 : 0;
    let total = price + gst + deliveryCharge;
    document.getElementById('name').innerText = name;
    document.getElementById('price').innerText = price;
    document.getElementById('gst').innerText = gst;
    document.getElementById('deliveryCharge').innerText = deliveryCharge;

    document.getElementById('total').innerText = total;
    
}
