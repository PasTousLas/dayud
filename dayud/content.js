// const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')
//
// for (let i=0; i < text.length; i++) {
//   if (text[i].outerHTML.includes('dad')) {
//     text[i].outerHTML = text[i].outerHTML.replace('dad', 'dayud')
//   } else if (text[i].outerHTML.includes('father')) {
//     text[i].outerHTML.replace('father', 'dayud')
//   }
// }
var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag


//a function that loops through every single item
function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });

  });
}

function replaceText (node) {
  let value = node.nodeValue;
  value = value.replace(/dad/gi, 'dayud');
  value = value.replace(/father/gi, 'dayud');
  node.nodeValue = value;
}

window.onload = findAndReplace();
