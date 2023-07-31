import { getComments } from '../api/comments.js';
import commentCounter from '../modules/comment-counter.js';

const modalClasses = 'border border-gray-300 modal-container bg-white w-11/12 md:max-w-lg mx-auto rounded overflow-y-auto shadow-2xl z-50 max-h-[90vh]';
const modalContainerClasses = 'main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster';

const createModal = (item) => {
  getComments(item.id).then((comments) => {
    const commentsList = document.querySelector('#comments-list');
    comments.forEach((comment) => {
      const li = document.createElement('li');
      li.classList.add(
        'flex',
        'flex-col',
        'py-2',
        'border-b',
        'border-gray-300',
      );
      li.innerHTML = `<div class='flex justify-between items-center'>
        <p class='font-bold'>${comment.username}</p>
        <p class='text-sm text-gray-500'>${comment.creation_date}</p>
      </div>
      <p class='text-sm'>${comment.comment}</p>`;

      commentsList.appendChild(li);
    });
    commentCounter();
  });

  const modalContainer = document.createElement('div');
  modalContainer.id = 'modal';
  modalContainer.classList.add(...modalContainerClasses.split(' '));
  const modal = document.createElement('div');
  modal.classList.add(...modalClasses.split(' '));
  const modalContent = document.createElement('div');
  modalContent.classList.add('py-4', 'px-6', 'text-left');
  modalContent.innerHTML = `<div class='flex flex-col'>
  <div class="flex items-center justify-between">
    <p class='text-2xl font-bold'>${item.title}</p>
    <div id='close-modal' class='modal-close cursor-pointer z-50'>
      <svg
        class='fill-current text-black'
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='18'
        viewBox='0 0 18 18'
      >
        <path
          d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'
        ></path>
      </svg>
    </div>
    </div>
    <div class="flex flex-col mt-3 w-full">
    <span class="flex flex-row justify-between items-start">
      <p class="text-base text-gray-700">Dated: <span class="font-semibold">${item.objectDate}</span></p>
      <p class="text-base text-gray-700">Period: <span class="font-semibold">${item.period}</span></p>
    </span>
    <p class="text-base font-bold">${item.repository}</p>
  </div>
  </div>
  <!--Body-->
  <div class='my-5'>
    <div>
      <img
        src='${item.img}'
        class='md:h-60 lg:-h-96 w-full object-cover mx-auto'
        alt='image'
      />
    </div>
    <div class='mt-4'>
      <!-- comments list -->
      <h4 class='text-gray-900 text-xl font-semibold'>Comments
        <span id="comments-count" class='text-gray-400 font-normal'>(0)</span>
      </h4>
      <ul id='comments-list' class='border border-gray-300 p-4 rounded-md shadow-sm mt-2'>

      </ul>
      <form id='form-${item.id}' class='mt-4 shadow-sm'>
        <h4 class='text-gray-900 text-xl font-semibold'>Add Comment</h4>
        <div class='flex flex-col'>
          <label
            for='name'
            class='text-gray-700 font-semibold mb-1'
          >
            Name
          </label>
          <input
            id='name'
            name='name'
            type='text'
            class='border border-gray-300 p-2 rounded'
          />

          <label
            for='comment'
            class='text-gray-700 mt-2 font-semibold mb-1'
          >
            Comment
          </label>
          <textarea
            id='comment'
            name='comment'
            class='border border-gray-300 p-2 rounded resize-none'
            rows='2'
          ></textarea>
        </div>
        <div class='flex justify-end mt-2'>
          <button
            id='comment-btn'
            class='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  `;
  modalContainer.appendChild(modal);
  modal.appendChild(modalContent);
  return modalContainer;
};

export default createModal;
