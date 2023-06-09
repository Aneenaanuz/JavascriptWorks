var products=[
    {code:1,name:"potatto",price:45,avl_qty:50,category:"veg"},
    {code:2,name:"onion",price:30,avl_qty:150,category:"veg"},
    {code:3,name:"brinjal",price:30,avl_qty:10,category:"veg"},
    {code:4,name:"carrot",price:75,avl_qty:0,category:"veg"},
    {code:5,name:"tomatto",price:34,avl_qty:20,category:"veg"},
    {code:6,name:"apple",price:190,avl_qty:50,category:"veg"},
    {code:7,name:"egg",price:5,avl_qty:250,category:"nonveg"},
    {code:8,name:"chicken",price:145,avl_qty:250,category:"nonveg"},
    {code:9,name:"garlic",price:240,avl_qty:0,category:"veg"},
    {code:10,name:"chilly",price:100,avl_qty:15,category:"veg"},
    
]

// // 1)total number of items
// console.log(products.length); 

// // 2)total number of available items
// var available=products.filter(p=>p.avl_qty>0).length
// console.log(available);

// // 3)out of stock product names
// var outofstock=products.filter(p=>p.avl_qty<=0).map(t=>t.name)
// console.log(outofstock);

// // 4)in stock product names
// var instock=products.filter(p=>p.avl_qty>0).map(t=>t.name)
// console.log(instock);

// // 5) is there any products available under rs:40
// var under_fourty=products.some(p=>p.price<=40)
// console.log(under_fourty);

// // 6) costly product name
// var max_cost=products.reduce((p1,p2)=>p1.price>p2.price?p1:p2).name
// console.log(max_cost);

// //find()
// // 7)print apple product price
// var apple_data=products.find(p=>p.name == "apple").price
// console.log(apple_data);

//foreach()
products.forEach(p=>console.log(p.name))
products.forEach(p=>console.log(p.price))

//Array.from()   --- using to covert array format \


