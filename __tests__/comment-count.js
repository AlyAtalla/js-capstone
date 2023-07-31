import { JSDOM } from 'jsdom';

const document = new JSDOM().window.document;

function commentCounter() {
  const commentsList = document.getElementById('comments-list');
  const commentsCount = document.getElementById('comments-count');
  commentsCount.innerHTML = `(${commentsList.childElementCount})`;
}

const comments = document.createElement('div');
comments.innerHTML = `
<h4 class='text-gray-900 text-xl font-semibold'>Comments
<span id="comments-count" class='text-gray-400 font-normal'>(0)</span>
</h4>
<ul id='comments-list' class='border border-gray-300 p-4 rounded-md shadow-sm mt-2'>

</ul>`;
document.body.appendChild(comments);
const commentsList = comments.querySelector('#comments-list');

const commentsArray = [
  {
    username: 'test',
    comment: 'test comment',
    creation_date: '2021-09-01',
  },
  {
    username: 'test',
    comment: 'test comment',
    creation_date: '2021-09-01',
  },
];

// mock fetch comments

const getComments = () => commentsArray;

// mock post comment

const postComment = () => {
  commentsArray.push({
    username: 'test',
    comment: 'test comment',
    creation_date: '2021-09-01',
  });
};

function appendComments(comments) {
  commentsList.innerHTML = '';
  comments.forEach((comment) => {
    const li = document.createElement('li');
    li.classList.add('flex', 'flex-col', 'py-2', 'border-b', 'border-gray-300');
    li.innerHTML = `<div class='flex justify-between items-center'>
            <p class='font-bold'>${comment.username}</p>
            <p class='text-sm text-gray-500'>${comment.creation_date}</p>
        </div>
        <p class='text-sm'>${comment.comment}</p>`;
    commentsList.appendChild(li);
  });
}

// get comments
describe('test comment count', () => {
  it('should return 2', () => {
    appendComments(getComments());
    commentCounter();
    expect(comments.querySelector('#comments-count').textContent).toBe('(2)');
  });
  it('should return 3', () => {
    postComment();
    appendComments(getComments());
    commentCounter();
    expect(comments.querySelector('#comments-count').textContent).toBe('(3)');
  });
});
