import { JSDOM } from 'jsdom';

const document = new JSDOM().window.document;

const itemsContainer = document.createElement('div');
document.body.appendChild(itemsContainer);

// mock get items
const getItems = () => Array(24).fill(0);

const displayItems = () => {
  const itemsEl = getItems()
    .map((_, i) => `<item-card class='item'>item-${i}</item-card>`)
    .join('');
  itemsContainer.innerHTML = itemsEl;
};

const itemsCounter = () => itemsContainer.getElementsByTagName('item-card').length;

describe('items-counter-tests', () => {
  it('should be equal to fetched items length', () => {
    const items = getItems();
    displayItems();

    expect(itemsCounter()).toBe(items.length);
  });
});