let numberCheckedSunday = 0;
let numberCheckedMonday = 0;
let numberCheckedTuesday = 0;
let numberCheckedWednesday = 0;
let numberCheckedThursday = 0;
let numberCheckedFriday = 0;
let numberCheckedSaturday = 0;

let removeCalFromWeek;

let moveBtn = document.querySelector('.move-activities-btn')

let addInputMonday = document.querySelector(".newaddTaskMonday");
let addButtonMonday = document.querySelector(".addButtonMonday");
let todoListMonday = document.querySelector(".todoListMonday");
let mondayCompleted = document.querySelector("#countCompletedMonday");
let mondayCount = document.querySelector("#countMonday");

let addInputTuesday = document.querySelector(".newaddTaskTuesday");
let addButtonTuesday = document.querySelector(".addButtonTuesday");
let todoListTuesday = document.querySelector(".todoListTuesday");
let tuesdayCompleted = document.querySelector("#countCompletedTuesday");
let tuesdayCount = document.querySelector("#countTuesday");

let addInputWednesday= document.querySelector(".newaddTaskWednesday");
let addButtonWednesday= document.querySelector(".addButtonWednesday");
let todoListWednesday = document.querySelector(".todoListWednesday");
let wednesdayCompleted = document.querySelector("#countCompletedWednesday");
let wednesdayCount = document.querySelector("#countWednesday");


let addInputThursday = document.querySelector(".newaddTaskThursday");
let addButtonThursday = document.querySelector(".addButtonThursday");
let todoListThursday= document.querySelector(".todoListThursday");
let thursdayCompleted = document.querySelector("#countCompletedThursday");
let thursdayCount = document.querySelector("#countThursday");


let addInputFriday = document.querySelector(".newaddTaskFriday");
let addButtonFriday = document.querySelector(".addButtonFriday");
let todoListFriday= document.querySelector(".todoListFriday");
let fridayCompleted = document.querySelector("#countCompletedFriday");
let fridayCount = document.querySelector("#countFriday");


let addInputSaturday = document.querySelector(".newaddTaskSaturday");
let addButtonSaturday = document.querySelector(".addButtonSaturday");
let todoListSaturday= document.querySelector(".todoListSaturday");
let saturdayCompleted = document.querySelector("#countCompletedSaturday");
let saturdayCount = document.querySelector("#countSaturday");

let addInputSunday = document.querySelector(".newaddTaskSunday");
let addButtonSunday = document.querySelector(".addButtonSunday");
let todoListSunday= document.querySelector(".todoListSunday");
let sundayCompleted = document.querySelector("#countCompletedSunday");
let sundayCount = document.querySelector("#countSunday");



let todoList = [todoListSunday, todoListMonday, todoListTuesday, todoListWednesday, todoListThursday, todoListFriday, todoListSaturday];
let addInput = [addInputSunday, addInputMonday, addInputTuesday, addInputWednesday, addInputThursday, addInputFriday, addInputSaturday];
let addButton = [addButtonSunday, addButtonMonday, addButtonTuesday, addButtonWednesday, addButtonThursday, addButtonFriday, addButtonSaturday];
let completedCount = [sundayCompleted, mondayCompleted, tuesdayCompleted, wednesdayCompleted, thursdayCompleted, fridayCompleted, saturdayCompleted];
let numberChecked = [0, 0, 0, 0, 0, 0, 0];
let numberActivities = new Array(7);
let numberActivitiesElements = [sundayCount, mondayCount, tuesdayCount, wednesdayCount, thursdayCount, fridayCount, saturdayCount];
let selectedDay = 0;
let incompleteActivities = [];
let incompleteActivitiesList = document.querySelector('.incompleteActivities');

document.getElementById("hm").style.color = "red";

addInput.forEach(function(e){
  let selectedButton = addButton[selectedDay];
  selectedDay++;
  e.addEventListener("keyup", (event)=>{
    if(event.keyCode === 13) {
      // console.log(selectedButton)
      selectedButton.click();
    }
  })
})

function createActivity(day, dNum, dName, todo_counts) {
  let input = addInput[day].value.trim();
  if (input === '') {
    alert("Write down a minimum of five activities")
  } else {
    for(let i = 0; i<=34; i++) {
      if($('#' + i).text() == dNum ) {
        switch(dName){
          case 'Sunday':
            if(i == 0 || i == 7 || i == 14 || i == 21 || i == 28) {
              addID = i;
              addCalTask(input);
            }
            break;
          case 'Monday':
            if(i == 1 || i == 8 || i == 15 || i == 22 || i == 29) {
              addID = i;
              addCalTask(input);
            }
            break;
          case 'Tuesday':
            if(i == 2 || i == 9 || i == 16 || i == 23 || i == 30) {
              addID = i;
              addCalTask(input);
            }
            break;
          case 'Wednesday':
            if(i == 3 || i == 10 || i == 17 || i == 24 || i == 31) {
              addID = i;
              addCalTask(input);
            }
            break;
          case 'Thursday':
            if(i == 4 || i == 11 || i == 18 || i == 25 || i == 32) {
              addID = i;
              addCalTask(input);
            }
            break;
          case 'Friday':
            if(i == 5 || i == 12 || i == 19 || i == 26 || i == 33) {
              addID = i;
              addCalTask(input);
            }
            break;
          case 'Saturday':
            if(i == 6 || i == 13 || i == 20 || i == 27 || i == 34) {
              addID = i;
              addCalTask(input);
            }
            break;
          default:
            break;
        }
      }
    }
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let item = document.createElement("input");
    item.addEventListener('keyup', function(e){
      if(item.value.trim() === ''){
        if(e.target.parentElement.children[0].checked == true){
          numberChecked[day]--;
          completedCount[day].innerText = "You have " + numberChecked[day] + " activities completed";
        }
        syncCalRemoveFromWeek(todo_counts);
        todoList[day].removeChild(li);
        let count = todoList[day].querySelectorAll("li");
        numberActivitiesElements[day].innerText="total number of activites is " + count.length;
      };
      updateTodoName(item.value, todo_counts);
    });
    item.type = "text";
    item.value = input;

    let trashButton = document.createElement("span");
    trashButton.classList.add('glyphicon', 'glyphicon-minus', 'minus-icon');
    todoList[day].appendChild(li)
    li.appendChild(checkBox);
    li.appendChild(item);
    li.appendChild(trashButton);
    addInput[day].value = "";
    trashButton.addEventListener('click', function(e) {
      if(e.target.parentElement.children[0].checked == true){
        numberChecked[day]--;
        completedCount[day].innerText = "You have " + numberChecked[day] + " activities completed";
      }
      removeCalFromWeek = e.target.parentElement.children[1].value;
      syncCalRemoveFromWeek(todo_counts);
      todoList[day].removeChild(li);
      numberActivities[day] = todoList[day].querySelectorAll("li");
      numberActivitiesElements[day].innerText="total number of activites is " + numberActivities[day].length;
      // alert(numberActivitiesElements[day].innerText);
    });
    numberActivities[day] = todoList[day].querySelectorAll("li");
    numberActivitiesElements[day].innerText="total number of activites is " + numberActivities[day].length;
    //alert(numberActivitiesElements[day].innerText);
    checkBox.addEventListener('click', function(e) {
      if(e.target.checked == true){
        numberChecked[day]++;
      } else {
        numberChecked[day]--;
      }
      completedCount[day].innerText = "You have " + numberChecked[day] + " activities completed";
      alert(completedCount[day].innerText);
      if (day === 0) {
        numberCheckedSunday ++;
      }
      // if()
      console.log(numberCheckedSunday);
    })


  }
}

addButtonSunday.addEventListener("click", function() {createActivity(0, document.getElementById('SunNum').innerText, "Sunday", todo_counts)});
addButtonMonday.addEventListener("click", function(){createActivity(1, document.getElementById('MonNum').innerText, "Monday", todo_counts)});
addButtonTuesday.addEventListener("click", function() {createActivity(2, document.getElementById('TueNum').innerText, "Tuesday", todo_counts)});
addButtonWednesday.addEventListener("click", function() {createActivity(3, document.getElementById('WedNum').innerText, 'Wednesday', todo_counts)});
addButtonThursday.addEventListener("click", function(){createActivity(4,document.getElementById('ThuNum').innerText, 'Thursday', todo_counts)});
addButtonFriday.addEventListener("click", function() {createActivity(5, document.getElementById('FriNum').innerText, 'Friday', todo_counts)});
addButtonSaturday.addEventListener("click", function() {createActivity(6, document.getElementById('SatNum').innerText, 'Saturday', todo_counts)});

// Click on a close button to hide the current list item
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
// alert for number of boxes checked
alert(document.querySelectorAll('input[type="checkbox"]:checked').length);
  }
}

document.getElementById("ht").style.color = "orange";

document.getElementById("hwd").style.color = "orange";

document.getElementById("hth").style.color = "coral";

document.getElementById("hf").style.color = "DarkOliveGreen";

document.getElementById("hs").style.color = "DarkViolet";

document.getElementById("hsu").style.color = "crimson";

function moveToTomorrow(i) {
  selectedDay = i;
  incompleteActivities = [];
  incompleteActivitiesList.innerHTML = '';
  todoList[i].querySelectorAll('li').forEach(function(e){
    if(!e.children[0].checked){
      incompleteActivities.push(e);
    }
  });
  if(incompleteActivities.length){
    incompleteActivities.forEach(function(e){
      let li = document.createElement("li");
      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      let item = document.createElement("input");
      item.value = e.children[1].value;
      li.appendChild(checkBox);
      li.appendChild(item);
      incompleteActivitiesList.appendChild(li);
      })
    }
}

moveBtn.addEventListener('click', function() {
  console.log(incompleteActivities);
  let i = 0;
  incompleteActivitiesList.querySelectorAll('li').forEach( function(e){
    console.log(incompleteActivities[i]);
    i++;
    if(e.children[0].checked){
      addInput[(selectedDay+1)%7].value = e.children[1].value;
      addButton[(selectedDay+1)%7].click();
    }
  })
})

function checkGoal(day) {
  console.log(document.querySelector('.goal').value);
  if(day === 0){
    let goalLeft = document.querySelector('.goal').value - numberCheckedSunday;
      alert("sunday works");
  }
  // if(){
  //
  // }
  console.log(numberCheckedSunday);
  console.log(goalLeft);
}
