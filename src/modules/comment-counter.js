export default function commentCounter() {
  const commentsList = document.getElementById('comments-list');
  const commentsCount = document.getElementById('comments-count');
  commentsCount.innerHTML = '';
  commentsCount.innerHTML = `(${commentsList.childElementCount})`;
}