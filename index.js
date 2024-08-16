//Document Object Model


//Part 1
//Q1.Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");
//Q2.Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor='var(--main-bg)'
//Q3.Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML='<h1>DOM Manipulation</h1>'
mainEl.style.textAlign='center'

//Q4.Add a class of flex-ctr to mainEl.
//Hint: Use the Element.classList API.
const mainElAdd=mainEl.appendChild(document.createElement("flex-ctr"))


//Part 2
//Q1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl=document.getElementById("top-menu");
//Q2.Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height="100%"
//Q3.Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor='var(--top-menu-bg)'

//Q4.Add a class of flex-around to topMenuEl.
const topMenuElAdd=topMenuEl.appendChild(document.createElement("flex-around"))

//Part 3: Adding Menu Buttons
// Menu data structure

var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

for (i=0;i<menuLinks.length; i++) {
    let alink=menuLinks[i]['href'];
    let topMenuLink=topMenuEl.appendChild(document.createElement('a')).href=alink
    let text=menuLinks[i]['text'];
    let topMenuText=topMenuEl.appendChild(document.createElement('a')).textContent=text
    
}
    
