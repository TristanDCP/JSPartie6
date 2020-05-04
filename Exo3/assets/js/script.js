let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++', 'ruby', 'python'];

myButton.addEventListener('click', function () {

  languages.forEach( element => languages); {
    let myP = document.createElement('li');
    myP.innerText = languages
    myText.appendChild(myP);
  }

})