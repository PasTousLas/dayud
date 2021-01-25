
var elementsInsideBody = [...document.body.getElementsByTagName('*')];
/
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
