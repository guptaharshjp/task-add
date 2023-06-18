const cardContainer = document.querySelector(".task__container");
console.log(cardContainer);

const globalStore = [];

const generateNewCard = (taskData) =>`
<div class="col-sm-12 col-md-6 col-lg-4 id=${taskData.id}">
    <div class="card-header d-flex justify-content-end gap-2">
      <button type="button" class="btn btn-success"><i class="fas fa-pencil-alt"></i></button>
      <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="card">
      <div class="card-body">
        <img class="card-img-top" src=${taskData.imageUrl} alt="https://t4.ftcdn.net/jpg/04/06/91/91/240_F_406919161_J0pGxe1sewqnk5dnvyRS77MKmEd6SVac.jpg">
        <h5 class="card-title pt-3 fw-bolder text-primary">${taskData.taskTitle}</h5>
        <p class="card-text">${taskData.taskDescription}</p>
        <a href="#" class="btn btn-primary">${taskData.taskType}</a>
      </div>
    </div>
`;


const loadInitialCardData = () =>{
  //get data
  const getCardData = localStorage.getItem("tasky");
  //convert data from json to object
  const {cards} = JSON.parse(getCardData);

  console.log(cards);
  //load data loop
  cards.map((cardObject) => {
    cardContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));

  //update to global store
    globalStore.push(cardObject);
  })

  
} 

const saveChanges = () =>{
    const taskData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value 
    };
    
    cardContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));

    globalStore.push(taskData)
    localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));

    var getValue= document.getElementById("imageurl");
        if (getValue.value !="") {
            getValue.value = "";
        }
        var getValue= document.getElementById("tasktitle");
        if (getValue.value !="") {
            getValue.value = "";
        }var getValue= document.getElementById("tasktype");
        if (getValue.value !="") {
            getValue.value = "";
        }var getValue= document.getElementById("taskdescription");
        if (getValue.value !="") {
            getValue.value = "";
        }
    }


// }
// const deleteCard = (event) => {
//   let targetID = event.target.getAttribute("name");
//   let elementType = event.target.tagName;

//   let removeTask = globalTaskData.filter((task)=> task.id!==targetID);
//   globalTaskData = removeTask;

//   saveToLocalStorage();

//   if(elementType==="BUTTON") {
//     return taskContainer.removeChild(
//       event.target.parentNode.parentNode.parentNode
//     );
//   } else {
//     return taskContainer.removeChild(
//       event.target.parentNode.parentNode.parentNode.parentNode
//     );
//   }
// };