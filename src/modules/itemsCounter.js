export const itemsCounter = () => {
  const itemsContainer = document.querySelector('.items-container');
  const len = itemsContainer.getElementsByTagName('item-card').length;

  const counter = document.getElementById('counter');
  counter.innerHTML = `(${len})`;
  // return len;
};