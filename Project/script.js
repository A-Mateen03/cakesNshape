var dropdown = document.querySelectorAll('nav ul li a');
 
for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener('click', function(e) {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
    e.stopPropagation();
  });
}
 
document.addEventListener('click', function(e) {
  var dropdowns = document.querySelectorAll('nav ul li ul');
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].style.display = 'none';
  }
});

function toggleCakesItems(event) {
  const cakesItems = document.querySelector('.cakes-items');
  const biscuitItems = document.querySelector('.biscuit-items');

  // Toggle hidden class for cake and biscuit items based on which item was clicked
  if (event.target.textContent === 'Cakes') {
    cakesItems.classList.remove('hidden');
    biscuitItems.classList.add('hidden');
  } else if (event.target.textContent === 'Biscuits') {
    biscuitItems.classList.remove('hidden');
    cakesItems.classList.add('hidden');
  }
}
