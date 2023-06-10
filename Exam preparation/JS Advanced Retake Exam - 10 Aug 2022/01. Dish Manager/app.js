window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let gender = document.getElementById('genderSelect');
  let dishDescription = document.getElementById('task');
  let submitButton = document.getElementById('form-btn');
  submitButton.addEventListener('click', submit);
  let clearButton=document.getElementById('clear-btn');

  let inProgress = document.getElementById('in-progress');
  let finished = document.getElementById('finished');
  let progressCounter = document.getElementById('progress-count');

  function submit(e) {
    e.preventDefault;
    if (firstName.value && lastName.value && age.value && dishDescription.value) {
      let liElement = document.createElement('li');
      liElement.classList.add('each-line')
      let article = document.createElement('article');
      let h4El = document.createElement('h4');
      h4El.textContent = `${firstName.value} ${lastName.value}`;
      let p1El = document.createElement('p');
      p1El.textContent = `${gender.value}, ${age.value}`;
      let p2El = document.createElement('p');
      p2El.textContent = `Dish description: ${dishDescription.value}`;
      let editButton = document.createElement('button');
      editButton.classList.add('edit-btn');
      editButton.textContent = 'Edit';
      let completeButton = document.createElement('button');
      completeButton.classList.add('complete-btn');
      completeButton.textContent = 'Mark as complete';

      article.appendChild(h4El);
      article.appendChild(p1El);
      article.appendChild(p2El);
      liElement.appendChild(article);
      liElement.appendChild(editButton);
      liElement.appendChild(completeButton);
      inProgress.appendChild(liElement);
      progressCounter.textContent = Number(progressCounter.textContent) + 1;

      let firstNameEdit = firstName.value;
      let lastNameEdit = lastName.value;
      let ageEdit = age.value;
      let genderEdit = gender.value;
      let dishDescriptionEdit = dishDescription.value;

      firstName.value = '';
      lastName.value = '';
      age.value = '';
      // gender.value = '';
      dishDescription.value = '';

      editButton.addEventListener('click', edit);
      completeButton.addEventListener('click', complete);

      function edit() {
        firstName.value = firstNameEdit;
        lastName.value = lastNameEdit;
        age.value = ageEdit;
        gender.value = genderEdit;
        dishDescription.value = dishDescriptionEdit;
        liElement.remove();
        progressCounter.textContent = Number(progressCounter.textContent) - 1;
      }
      function complete() {
        finished.appendChild(liElement);
        editButton.remove();
        completeButton.remove();
        progressCounter.textContent = Number(progressCounter.textContent) - 1;

      }
      clearButton.addEventListener('click',clear);
      function clear(){
        liElement.remove();
      }
    }
  }
}
