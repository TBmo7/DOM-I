const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.getElementsByTagName('a');//updates a tags with function
function updateLinks(inArr){
  for(let i = 1; i<=inArr.length;i++){
    inArr[i-1].setAttribute('href',siteContent['nav']['nav-item-'+i])
    inArr[i-1].textContent = siteContent['nav']['nav-item-'+i];
  }
  return inArr;
}
updateLinks(navLinks);
let newLink = document.createElement('a');
newLink.innerHTML = "I'm new!";
document.querySelector('.container header nav').appendChild(newLink);
let newerLink = document.createElement('a');
newerLink.innerHTML = "I'm newer";
document.querySelector('.container header nav').prepend(newerLink);



let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

let ctaH1 = document.querySelector('.cta-text h1');
let ctaBut = document.querySelector('.cta-text button')
ctaH1.textContent = siteContent['cta']['h1'];
ctaBut.textContent = siteContent['cta']['button'];

  let topText = document.querySelectorAll('.main-content .top-content .text-content');
  //topTexth4.textContent = siteContent['main-content']['features-h4'];
  //let topTextp = document.querySelector('.main-content .top-content .text-content p');
  //topTextp.textContent = siteContent['main-content']['features-content'];
  //let topBotTexth4 = document.querySelector('.main-content .top-content .text-content h4:last-child');
  //topBotTexth4.textContent = siteContent['main-content']['about-h4'];
  topText[0].childNodes.item(1).textContent = siteContent['main-content']['features-h4'];
  topText[0].childNodes.item(2).textContent = siteContent['main-content']['features-content'];
  topText[1].childNodes.item(1).textContent = siteContent['main-content']['about-h4'];
  topText[1].childNodes.item(2).textContent = siteContent['main-content']['about-content'];

  let midImg = document.getElementById('middle-img');
  midImg.setAttribute('src',siteContent['main-content']['middle-img-src']);

  let botText = document.querySelectorAll('.main-content .bottom-content .text-content');
  botText[0].childNodes.item(1).textContent = siteContent['main-content']['services-h4'];
  botText[0].childNodes.item(2).textContent = siteContent['main-content']['services-content'];
  botText[1].childNodes.item(1).textContent = siteContent['main-content']['product-h4'];
  botText[1].childNodes.item(2).textContent = siteContent['main-content']['product-content'];
  botText[2].childNodes.item(1).textContent = siteContent['main-content']['vision-h4'];
  botText[2].childNodes.item(2).textContent = siteContent['main-content']['vision-content'];


  let contact = document.querySelector('.contact');//html array
  //console.log(contact.childNodes.item(1));
  let siteContactArr = Object.values(siteContent['contact']);//values to go into array

  contact.childNodes.item(1).textContent = siteContactArr[0];
  contact.childNodes.item(2).textContent = siteContactArr[1];
  contact.childNodes.item(3).textContent = siteContactArr[2];
  contact.childNodes.item(4).textContent = siteContactArr[3];

  let footText = document.querySelector('footer p');
  footText.textContent = siteContent['footer']['copyright'];


  //document.getElementsByTagName('a').style.color = ':red';
  Array.from(document.getElementsByTagName('a')).forEach(element=>{
    element.style.color = 'blue';
  })