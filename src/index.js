import './style.css';
import './tailwind.css';
import { item } from './views/item.js';
import { getItems } from './api/getItems.js';
import { getLikes } from './api/getLikes.js';
import { addLike } from './api/addLike.js';
import createModal from './views/modal.js';
import { postComment } from './api/comments.js';
import { itemsCounter } from './modules/itemsCounter.js';
import commentCounter from './modules/comment-counter';

const modalClose = () => {
  const modal = document.querySelector('#modal');
  modal.classList.remove('fadeIn');
  modal.classList.add('fadeOut');
  setTimeout(() => {
    modal.style.display = 'none';
    modal.parentElement.removeChild(modal);
  }, 500);
};

const handleSubmit = (e, id) => {
  e.preventDefault();
  const form = e.target;
  const name = document.querySelector('#name').value;
  const comment = document.querySelector('#comment').value;
  postComment(id, name, comment);
  const commentsList = document.querySelector('#comments-list');
  const commentObj = {
    username: name,
    comment,
    creation_date: new Date().toLocaleString(),
  };
  const li = document.createElement('li');
  li.classList.add('flex', 'flex-col', 'py-2', 'border-b', 'border-gray-300');
  li.innerHTML = `<div class='flex justify-between items-center'>
    <p class='font-bold'>${commentObj.username}</p>
    <p class='text-sm text-gray-500'>${commentObj.creation_date}</p>
  </div>
  <p class='text-sm'>${commentObj.comment}</p>`;

  commentsList.appendChild(li);
  const span = document.createElement('span');
  span.classList.add('font-light', 'text-sm', 'text-green-600');
  span.innerHTML = 'Comment added successfully';
  form.appendChild(span);
  form.reset();
  setTimeout(() => {
    span.parentElement.removeChild(span);
  }, 3000);
  commentCounter();
};

const openModal = (title, img, id, objectDate, period, repository) => {
  const modal = createModal({
    title, img, id, objectDate, period, repository,
  });
  document.body.appendChild(modal);
  const closeButton = document.querySelector('#close-modal');
  const form = document.querySelector(`#form-${id}`);
  form.addEventListener('submit', (e) => handleSubmit(e, id));
  closeButton.addEventListener('click', modalClose);
  modal.classList.remove('fadeOut');
  modal.classList.add('fadeIn');
  modal.style.display = 'flex';
};

if (!window.customElements.get('item-card')) {
  window.customElements.define('item-card', item);
}

const main = async () => {
  const items = await getItems();
  const likes = await getLikes();
  const likesObj = {};
  likes.forEach(({ likes, item_id }) => {
    likesObj[item_id] = likes;
  });
  const itemsContainer = document.querySelector('.items-container');
  items.forEach(({
    title, primaryImageSmall, objectID, objectDate, period, repository,
  }) => {
    const likes = likesObj[objectID] ? likesObj[objectID] : 0;
    const itemDiv = document.createElement('div');
    itemDiv.classList.add(
      'flex',
      'flex-col',
      'w-full',
      'py-4',
    );
    itemDiv.innerHTML = `<item-card
    imgSrc="${primaryImageSmall}"
    objectID="${objectID}"
    title="${title}"
    likes="${likes}"
    >
    </item-card>`;
    const commentBtn = document.createElement('button');
    const commentBtnClasses = 'comment-btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded';
    commentBtn.classList.add(...commentBtnClasses.split(' '));
    commentBtn.innerHTML = 'Comment';
    commentBtn.addEventListener('click', () => {
      openModal(title, primaryImageSmall, objectID, objectDate, period, repository);
    });
    itemDiv.appendChild(commentBtn);
    itemsContainer.appendChild(itemDiv);
  });

  const likeBtns = document.querySelectorAll('.like-btn');
  likeBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const objectID = e.currentTarget.id.split('-')[2];
      addLike(objectID);
      const svg = e.currentTarget.querySelector('.svg-img');
      svg.classList.remove('text-gray-300');

      if (!svg.classList.contains('text-red-400')) {
        const likesCount = document.getElementById(`likes-count-${objectID}`);
        const num = parseInt(likesCount.innerHTML);
        likesCount.innerHTML = '';
        likesCount.innerHTML = `${num + 1}`;
      }
      svg.classList.add('text-red-400');
    });
  });

  itemsCounter();
};

main();
