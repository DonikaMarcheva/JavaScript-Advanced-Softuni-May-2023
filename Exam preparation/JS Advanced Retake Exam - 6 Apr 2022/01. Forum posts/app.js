window.addEventListener("load", solve);

function solve() {
  let title = document.getElementById('post-title');
  let category = document.getElementById('post-category');
  let content = document.getElementById('post-content');
  let reviewPosts = document.getElementById('review-list');
  let upoadedPosts = document.getElementById('published-list');
  let publishButton = document.getElementById('publish-btn');
  let clearButton = document.getElementById('clear-btn');
  clearButton.addEventListener('click', clear);
  publishButton.addEventListener('click', publish);

  function publish(e) {
    e.preventDefault();
    if (title.value && category.value && content.value) {
      let liElement = createElements('li');
      liElement.classList.add('rpost');
      let articleEl = createElements('article');
      let h4El = createElements('h4', `${title.value}`);
      let p1El = createElements('p', `Category: ${category.value}`);
      let p2El = createElements('p', `Content: ${content.value}`);
      let editButton = createElements('button', 'Edit');
      editButton.classList.add('action-btn', 'edit');
      editButton.addEventListener('click', edit);
      let approveButton = createElements('button', 'Approve');
      approveButton.classList.add('action-btn', 'approve');
      approveButton.addEventListener('click', approve);
      articleEl.appendChild(h4El);
      articleEl.appendChild(p1El);
      articleEl.appendChild(p2El);
      liElement.appendChild(articleEl);
      liElement.appendChild(approveButton);
      liElement.appendChild(editButton);
      reviewPosts.appendChild(liElement);

      title.value = '';
      category.value = '';
      content.value = '';
    }
  }
  function edit(e) {
    let parent = e.target.parentElement;
    let searchedData = parent.querySelector('article');
    let elementsArr = Array.from(searchedData.children);
    let titleText = elementsArr[0].textContent;
    let categoryText = elementsArr[1].textContent.split('Category: ')[1];
    let contentText = elementsArr[2].textContent.split('Content: ')[1];

    title.value = titleText;
    category.value = categoryText;
    content.value = contentText;
    parent.remove();
  }
  function approve(e) {
    let parent = e.target.parentElement;
    let buttons = parent.querySelectorAll('button');
    upoadedPosts.appendChild(parent);
    e.target.remove();
    parent.querySelector('button').remove();
  }
  function clear() {
    let children = upoadedPosts.children;
    Array.from(children).forEach(element => {
      element.remove();
    });
  }
  function createElements(tagName, content) {
    let element = document.createElement(`${tagName}`);
    if (content) {
      element.textContent = content;
    }
    return element;
  }
}
