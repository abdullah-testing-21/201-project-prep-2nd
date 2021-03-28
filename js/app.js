
let form = document.getElementById('form');
let right_section = document.getElementById('right-section');
let submits = [];

function User_submit(to_do, date) {
  this.to_do = to_do;
  this.date = date;
  submits.push(this);
  localStorage.setItem('submits', JSON.stringify(submits));
}

form.addEventListener('submit', FHandler);
right_section.addEventListener('click', DHandler);


function FHandler(event) {
//   console.log(event.target.id);
  event.preventDefault();
  new User_submit(event.target.to_don.value, event.target.daten.value);
  render();
}
function DHandler(event) {
  for (let i = 0; i < submits.length; i++) {
    if (event.target.id == i) {
      console.log(event.target.id);
      submits.splice(event.target.id,1);
      render();
    }
  }
}
function render() {
  right_section.innerHTML = '';
  for (let i = 0; i < submits.length; i++) {
    let p_to_do = document.createElement('p');
    p_to_do.innerHTML = submits[i].to_do;
    right_section.appendChild(p_to_do);
    let p_date = document.createElement('p');
    p_date.innerHTML = submits[i].date;
    right_section.appendChild(p_date);
    let p_delete = document.createElement('p');
    p_delete.innerHTML = 'Delete';
    p_delete.className = 'Delete';
    p_delete.id = i;
    right_section.appendChild(p_delete);
  }
}




