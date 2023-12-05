const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // validation
  if (newItem === '') {
    alert('Please add an item.');
    return;
  }

  const li = document.createElement('li');

  const itemName = document.createTextNode(newItem);

  li.appendChild(itemName);

  const button = newButton('remove-item btn-link text-red');
  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = '';
}

function newButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = newIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function newIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

// Event Listeners
document.addEventListener('submit', addItem);
