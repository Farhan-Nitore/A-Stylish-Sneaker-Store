const wrapper = document.querySelector(".wrapper")
const m_itm = document.querySelectorAll(".menuitems")
const currentproductimg = document.querySelector(".productimg")
const currentproducttitle = document.querySelector(".producttitle")
const currentproductprice = document.querySelector(".productprice")
const currentproductcolor = document.querySelectorAll(".colors .color");
const currentproductsizes = document.querySelectorAll(".size")
const productbutton = document.querySelector(".productbutton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")
const pay1 = document.querySelector(".paybutton")
const paytitle = document.querySelector(".paytitle")
const paybutton = document.querySelector(".paybutton")
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./images/air.png",
        },
        {
          code: "darkblue",
          img: "./images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./images/jordan.png",
        },
        {
          code: "green",
          img: "./images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./images/blazer.png",
        },
        {
          code: "green",
          img: "./images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./images/crater.png",
        },
        {
          code: "lightgray",
          img: "./images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./images/hippie.png",
        },
        {
          code: "black",
          img: "./images/hippie2.png",
        },
      ],
    },
  ];


  let choosenproduct = products[0]


m_itm.forEach((itm,index) => {
    itm.addEventListener("click",()=>{
        wrapper.style.transform = `translateX(${-100*index}vw)`
        wrapper.style.transition = 'transform 1s ease'

        choosenproduct = products[index]

        currentproducttitle.textContent = choosenproduct.title
        currentproductprice.textContent = "$ " + choosenproduct.price
        currentproductimg.src = choosenproduct.colors[0].img

        currentproductcolor.forEach((color , index) => {
            color.style.backgroundColor = choosenproduct.colors[index].code
        })
    })

})

currentproductcolor.forEach((color,index) => {
    color.addEventListener("click", ()=>{
         currentproductimg.src = choosenproduct.colors[index].img
    })
})

currentproductsizes.forEach((size,index) => {
     size.addEventListener("click",()=>{

    currentproductsizes.forEach((size)=>{
         size.style.color = "black"
         size.style.fontSize = "20px"
          size.style.border = "none"
          size.style.backgroundColor = "white"
    })
        size.style.color = "white"
        size.style.fontSize = "25px"
        size.style.border = "1px solid black"
        size.style.borderRadius = "50px"
        size.style.backgroundColor = "black"
     })
})

productbutton.addEventListener("click",()=>{
    payment.style.display = "flex"
    close.style.display = "block"
})

close.addEventListener("click",()=>{
    payment.style.display = "none"
    close.style.display = "none"
})

pay1.addEventListener("click",()=>{
    payment.style.display = "none"
    close.style.display = "none"
})

