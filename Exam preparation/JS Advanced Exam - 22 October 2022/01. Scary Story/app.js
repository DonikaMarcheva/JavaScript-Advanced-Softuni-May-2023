window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let storyTitle = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let storyText = document.getElementById('story');
  let publishButton = document.getElementById('form-btn');
  publishButton.addEventListener('click', publish);
  let preview = document.getElementById('preview-list');
  let mainDiv = document.getElementById('main');

  function publish(e) {
    e.preventDefault();
    if (firstName.value && lastName.value && age.value && storyText.value && storyTitle.value) {
      let liElement = document.createElement('li');
      liElement.classList.add('story-info');
      let articleEl = document.createElement('article');
      let h4El = document.createElement('h4');
      let p1El = document.createElement('p');
      let p2El = document.createElement('p');
      let p3El = document.createElement('p');
      let p4El = document.createElement('p');
      h4El.textContent = `Name: ${firstName.value} ${lastName.value}`;
      p1El.textContent = `Age: ${age.value}`;
      p2El.textContent = `Title: ${storyTitle.value}`;
      p3El.textContent = `Genre: ${genre.value}`;
      p4El.textContent = `${storyText.value}`;
      let saveButton = document.createElement('button');
      saveButton.textContent = 'Save Story';
      saveButton.classList.add('save-btn');
      let editButton = document.createElement('button');
      editButton.textContent = 'Edit Story';
      editButton.classList.add('edit-btn');
      let deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete Story';
      deleteButton.classList.add('delete-btn');

      articleEl.appendChild(h4El);
      articleEl.appendChild(p1El);
      articleEl.appendChild(p2El);
      articleEl.appendChild(p3El);
      articleEl.appendChild(p4El);
      liElement.appendChild(articleEl);
      liElement.appendChild(saveButton);
      liElement.appendChild(editButton);
      liElement.appendChild(deleteButton);
      preview.appendChild(liElement);

      let firstNameEdit = firstName.value;
      let lastNameEdit = lastName.value;
      let storyTitleEdit = storyTitle.value;
      let ageEdit = age.value;
      let genreEdit = genre.value;
      let storyTextEdit = storyText.value;

      firstName.value = '';
      lastName.value = '';
      storyTitle.value = '';
      age.value = '';
      genre.value = '';
      storyText.value = '';
      publishButton.disabled = true;

      saveButton.addEventListener('click', save);
      editButton.addEventListener('click', edit);
      deleteButton.addEventListener('click', deleteAll);

      function save() {
        let mainDivChildren = Array.from(mainDiv.children);
        for (const child of mainDivChildren) {
          child.remove();
        }
        let h1El = document.createElement('h1');
        h1El.textContent = 'Your scary story is save';
        mainDiv.appendChild(h1El);
      }
      function edit() {
        firstName.value = firstNameEdit;
        lastName.value = lastNameEdit;
        age.value = ageEdit;
        storyTitle.value = storyTitleEdit;
        genre.value = genreEdit;
        storyText.value = storyTextEdit;
        liElement.remove();
        publishButton.disabled = false;
      }
      function deleteAll() {
        liElement.remove();
        publishButton.disabled = false;
      }
    }
  }
}
