//Document Object Model


//Part 1
//Q1.Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");
//Q2.Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
//The var() CSS function can be used to insert the value of a custom property (sometimes called a "CSS variable") instead of any part of a value of another property.
mainEl.style.backgroundColor='var(--main-bg)'
//Q3.Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML='<h1>DOM Manipulation</h1>'
mainEl.style.textAlign='center'

//Q4.Add a class of flex-ctr to mainEl.
//Hint: Use the Element.classList API.
mainEl.setAttribute('class','flex-ctr')



//Part 2
//Q1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl=document.getElementById("top-menu");
//Q2.Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height="100%"
//Q3.Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor='var(--top-menu-bg)'

//Q4.Add a class of flex-around to topMenuEl.
topMenuEl.setAttribute('class','flex-around')


const subMenuEl=document.getElementById("sub-menu")
subMenuEl.style.height="100%"
subMenuEl.style.backgroundColor='var(--sub-menu-bg)'
subMenuEl.setAttribute('class','flex-around')
subMenuEl.style.position='absolute'
subMenuEl.style.top=0

//In HTML, the href=# attribute is used to link to the top of the current page. The # symbol is a "fragment identifier separator" that precedes a string of text that identifies a fragment on the page. This fragment can be a named anchor or an ID on the page. 

//Part 4: Update menuLinks
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', 
    subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]
},
  {text: 'orders', href: '#' , 
    subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]
},
  {text: 'account', href: '#', 
    subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]
},
];
//adding the menuLink to the navBar
console.log(menuLinks)

menuLinks.forEach((link)=>{
      const a=document.createElement('a')
      a.setAttribute('href', link.href)
      a.textContent=link.text
      topMenuEl.appendChild(a)
      //create topMenu Element
  });
console.log(topMenuEl)

// Grabbing all topMenuEl <a> elements
const topMenuLinks = document.querySelectorAll("a");
//Add EventListener to top menu ut need to prevent default
//Attach a delegated 'click' event listener to topMenuEl.
//The first line of code of the event listener function should call the event object's preventDefault() method.

topMenuEl.addEventListener("click", function (e) {
  e.preventDefault();
//Common targets are Element, or its children, Document, and Window
  //The second line of code of the function should immediately return if the element clicked was not an <a> element.
  if (!e.target.matches("a")) {
    return;
  }

  //The target attribute of 'a' tag atttibute specifies where to open the linked document:

  //The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
  e.target.classList.toggle("active");
  //The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
  topMenuLinks.forEach((link) => {
    if (link !== e.target) {
      link.classList.remove("active");
    }
    const linkText=e.target.textContent
    mainEl.innerHTML = `<h1>${linkText.toUpperCase()}</h1>`;
      // Hide sub menu since "about" does not have subLinks
      // Update mainEl with "About" content

});

//The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list. Using classList is a convenient alternative to accessing an element's list of classes as a space-delimited string via element.className.
  console.log(topMenuLinks)
  //===Part 5 - Adding Submenu Interaction===
  //Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
  //If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
  //Otherwise, set the CSS top property of subMenuEl to 0.
  //Hint: Caching the "link" object will come in handy for passing its subLinks array later.

  const clickedLink = menuLinks.find(
    (link) => link.text === e.target.textContent
  );
  if (e.target.classList.contains("active") && clickedLink.subLinks) {
    subMenuEl.style.top = "100%";
    buildSubMenu(clickedLink.subLinks);
  } else {
    if (!clickedLink.subLinks) {
      subMenuEl.style.top = 0;
    }
  }

  function buildSubMenu(subLinks) {
    //Clear the current contents of subMenuEl.
    subMenuEl.innerHTML = "";
    //Iterate over the subLinks array, passed as an argument, and for each "link" object:
    subLinks.forEach((link) => {
      //Create an <a> element.
      const a = document.createElement("a");
      //Add an href attribute to the <a>, with the value set by the href property of the "link" object.
      a.setAttribute("href", link.href);
      //Set the element's content to the value of the text property of the "link" object.
      a.textContent = link.text;
      //Append the new element to the subMenuEl.
      subMenuEl.appendChild(a);
    });
  }
});
console.log(subMenuEl)
//Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener('click', function(event){
  // The first line of code of the event listener function should call the event object's preventDefault() method.
  event.preventDefault();
  // The second line of code within the function should immediately return if the element clicked was not an <a> element.
  if (!event.target.matches('a')){return}

  // Log the content of the <a> to verify the handler is working.
  console.log(event.target.textContent);

// Next, the event listener should set the CSS top property of subMenuEl to 0.
  subMenuEl.style.top='0';
// Remove the active class from each <a> element in topMenuLinks.
document.querySelectorAll('#top-menu a').forEach(link => link.classList.remove('active'));
// Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
const linkClicked=event.target.textContent
console.log(event.target)
mainEl.innerHTML = `<h1>${linkClicked.toUpperCase()}</h1>`;
console.log(linkClicked)
});









