
window.onload = function () 
{
    document.getElementById('question').onclick = function (e) {
       var choice = document.getElementById('choice')
       var creatediv = document.getElementById('creatediv')
      if (creatediv != null) {
        choice.removeChild(creatediv)
      }
    }
    document.getElementById('comment').onclick = function (e) {
      var choice = document.getElementById('choice')
    var creatediv = document.getElementById('creatediv')
      if (creatediv != null) {
        choice.removeChild(creatediv)
      }
    }

    document.getElementById('problem').onclick = function (e) {
      choice = document.getElementById('choice')
      creatediv = document.createElement('div')

       creatediv.setAttribute('id', 'creatediv')
 
       label = document.createElement('label')
       labelText = document.createTextNode('Order Number: ')
       label.appendChild(labelText)
       label.setAttribute('for', 'orderno')
       creatediv.appendChild(label)
 
       input = document.createElement('input')
       input.setAttribute('id', 'orderno')
       input.setAttribute('type', 'text')
       input.setAttribute('name', 'orderno')
       input.setAttribute('required', 'true')
       creatediv.appendChild(input)
 
       choice.appendChild(creatediv)
     }
  }
  