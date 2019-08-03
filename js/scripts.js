let numberCheckedSunday = 0;
let numberCheckedMonday = 0;
let numberCheckedTuesday = 0;
let numberCheckedWednesday = 0;
let numberCheckedThursday = 0;
let numberCheckedFriday = 0;
let numberCheckedSaturday = 0;

let moveBtn = document.querySelector('.move-activities-btn')

let addInputMonday = document.querySelector(".newaddTaskMonday");
let addButtonMonday = document.querySelector(".addButtonMonday");
let todoListMonday = document.querySelector(".todoListMonday");
let mondayCompleted = document.querySelector("#countCompletedMonday");
let mondayCount = document.querySelector("#countMonday");

<<<<<<< HEAD
addButtonMonday.addEventListener("click", (e)=>{
  //console.log('hit');
  let input = addInputMonday.value.trim();
  //console.log(input)
  if (input === '') {
    alert("Write down a minimum of five activities")
  } else {
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let item = document.createElement("input");
    item.addEventListener('keyup', function(e){
      if(item.value.trim() === ''){
        if(e.target.parentElement.children[0].checked == true){
          numberCheckedMonday--;
          mondayCompleted.innerText = "You have " + numberCheckedMonday + " activities completed";
        }
        todoListMonday.removeChild(li);
        let count = todoListMonday.querySelectorAll("li");
        activityNumber.innerText="total number of activites is " + count.length;
      };
    });
    item.type = "text";
    item.value = input;
    //let editButton = document.createElement("span");
    let trashButton = document.createElement("span");
    //editButton.classList.add('glyphicon', 'glyphicon-pencil');
    trashButton.classList.add('glyphicon', 'glyphicon-minus', 'minus-icon');
    //delete button
  // my input
    //editButton.innerText="Edit"; //inner text encodes special characters
    //trashButton.innerText="trash";
    todoListMonday.appendChild(li)


    li.appendChild(checkBox);
    li.appendChild(item);
    // li.appendChild(editInput);
    //li.appendChild(editButton);
    li.appendChild(trashButton);
    addInputMonday.value = "";
    trashButton.addEventListener('click', function(e) {
      if(e.target.parentElement.children[0].checked == true){
        numberCheckedMonday--;
        mondayCompleted.innerText = "You have " + numberCheckedMonday + " activities completed";
      }
      todoListMonday.removeChild(li);
      let count = todoListMonday.querySelectorAll("li");
      activityNumber.innerText="total number of activites is " + count.length;
    });
// count number of activities
    let countMonday= todoListMonday.querySelectorAll("li");
    //console.log(countMonday);

    let activityNumber = document.querySelector("#countMonday");
    //console.log(countMonday.length);
    activityNumber.innerText="total number of activites is " + countMonday.length;

    checkBox.addEventListener('click', function(e) {
      if(e.target.checked == true){
        numberCheckedMonday++;
      } else {
        numberCheckedMonday--;
      }
      mondayCompleted.innerText = "You have " + numberCheckedMonday + " activities completed";
    })


  }
});

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
//if else count chenk boxes
// FUNCTION check(){
// count = 0;
// str = '';
//     FOR(x=0; x<document.todoListMonday.elements["checkbox[]"].length; x++){
//         IF(document.todoListMonday.elements["checkbox[]"][x].checked==TRUE){
//             str += document.todoListMonday.elements["checkbox[]"][x].value + ',';
//             count++;
//         }
//     }
//
//     IF(count==0){
//         ALERT("You must choose at least 1");
//         RETURN FALSE;
//     }
//     ELSE IF(count>3){
//         ALERT("You can choose a maximum of 3");
//         RETURN FALSE;
//     }
//     ELSE {
//     ALERT("You chose " + count + ": " + str.substring(0,str.length-1));
//     document.todoListMonday.submit();
//     }
// }
//add up value of the sum of the items

// var f = this.getField("OtherField");
// if (event.target.value=="Off") {
//      f.display = display.hidden;
//      f.value = "";
// } else {
//      f.display = display.visible;
//      f.value = "123";

// start tuesday
=======
>>>>>>> cc8ce17a89e4cb98e785930567181488c262aea3
let addInputTuesday = document.querySelector(".newaddTaskTuesday");
let addButtonTuesday = document.querySelector(".addButtonTuesday");
let todoListTuesday = document.querySelector(".todoListTuesday");
let tuesdayCompleted = document.querySelector("#countCompletedTuesday");
<<<<<<< HEAD

addButtonTuesday.addEventListener("click", (e)=>{
  //console.log('hit');
  let input = addInputTuesday.value.trim();

  if (input === '') {
    alert("Write down a minimum of five activities")
  } else {
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let item = document.createElement("input");
    item.addEventListener('keyup', function(e){
      if(item.value.trim() === ''){
        if(e.target.parentElement.children[0].checked == true){
          numberCheckedTuesday--;
          tuesdayCompleted.innerText = "You have " + numberCheckedTuesday + " activities completed";
        }
        todoListTuesday.removeChild(li);
        let count = todoListTuesday.querySelectorAll("li");
        activityNumber.innerText="total number of activites is " + count.length;
      };
    });
    item.type = "text";
    item.value = input;
    //let editButton = document.createElement("span");
    let trashButton = document.createElement("span");
    //editButton.classList.add('glyphicon', 'glyphicon-pencil');
    trashButton.classList.add('glyphicon', 'glyphicon-minus', 'minus-icon');
    //delete button
  // my input
    //editButton.innerText="Edit"; //inner text encodes special characters
    //trashButton.innerText="trash";
    todoListTuesday.appendChild(li)


    li.appendChild(checkBox);
    li.appendChild(item);
    // li.appendChild(editInput);
    //li.appendChild(editButton);
    li.appendChild(trashButton);
    addInputTuesday.value = "";
    trashButton.addEventListener('click', function(e) {
      if(e.target.parentElement.children[0].checked == true){
        numberCheckedTuesday--;
        tuesdayCompleted.innerText = "You have " + numberCheckedTuesday + " activities completed";
      }
      todoListTuesday.removeChild(li);
      let count = todoListTuesday.querySelectorAll("li");
      activityNumber.innerText="total number of activites is " + count.length;
    });
    // count number of activities
        let countTuesday= todoListTuesday.querySelectorAll("li");
        //console.log(countTuesday);

        let activityNumber = document.querySelector("#countTuesday");
        activityNumber.innerText="total number of activites is " + countTuesday.length;
        checkBox.addEventListener('click', function(e) {
          if(e.target.checked == true){
            numberCheckedTuesday++;
          } else {
            numberCheckedTuesday--;
          }
          tuesdayCompleted.innerText = "You have " + numberCheckedTuesday + " activities completed";
        })

  }
});//start Wednesday
=======
let tuesdayCount = document.querySelector("#countTuesday");
>>>>>>> cc8ce17a89e4cb98e785930567181488c262aea3

let addInputWednesday= document.querySelector(".newaddTaskWednesday");
let addButtonWednesday= document.querySelector(".addButtonWednesday");
let todoListWednesday = document.querySelector(".todoListWednesday");
let wednesdayCompleted = document.querySelector("#countCompletedWednesday");
<<<<<<< HEAD

addButtonWednesday.addEventListener("click", (e)=>{
  //console.log('hit');
  let input = addInputWednesday.value.trim();

  if (input === '') {
    alert("Write down a minimum of five activities")
  } else {
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let item = document.createElement("input");
    item.addEventListener('keyup', function(e){
      if(item.value.trim() === ''){
        if(e.target.parentElement.children[0].checked == true){
          numberCheckedWednesday--;
          wednesdayCompleted.innerText = "You have " + numberCheckedWednesday + " activities completed";
        }
        todoListWednesday.removeChild(li);
        let count = todoListWednesday.querySelectorAll("li");
        activityNumber.innerText="total number of activites is " + count.length;
      };
    });
    item.type = "text";
    item.value = input;
    //let editButton = document.createElement("span");
    let trashButton = document.createElement("span");
    //editButton.classList.add('glyphicon', 'glyphicon-pencil');
    trashButton.classList.add('glyphicon', 'glyphicon-minus', 'minus-icon');
    //delete button
  // my input
    //editButton.innerText="Edit"; //inner text encodes special characters
    //trashButton.innerText="trash";
    todoListWednesday.appendChild(li)


    li.appendChild(checkBox);
    li.appendChild(item);
    // li.appendChild(editInput);
    //li.appendChild(editButton);
    li.appendChild(trashButton);
    addInputWednesday.value = "";
    trashButton.addEventListener('click', function(e) {
      if(e.target.parentElement.children[0].checked == true){
        numberCheckedWednesday--;
        wednesdayCompleted.innerText = "You have " + numberCheckedWednesday + " activities completed";
      }
      todoListWednesday.removeChild(li);
      let count = todoListWednesday.querySelectorAll("li");
      activityNumber.innerText="total number of activites is " + count.length;
    });
    // count number of activities
        let countWednesday= todoListWednesday.querySelectorAll("li");
        //console.log(countWednesday);

        let activityNumber = document.querySelector("#countWednesday");
        activityNumber.innerText="total number of activites is " + countWednesday.length;
        checkBox.addEventListener('click', function(e) {
          if(e.target.checked == true){
            numberCheckedWednesday++;
          } else {
            numberCheckedWednesday--;
          }
          wednesdayCompleted.innerText = "You have " + numberCheckedWednesday + " activities completed";
        })


  }
});

// start Thursday
=======
let wednesdayCount = document.querySelector("#countWednesday");
>>>>>>> cc8ce17a89e4cb98e785930567181488c262aea3

let addInputThursday = document.querySelector(".newaddTaskThursday");
let addButtonThursday = document.querySelector(".addButtonThursday");
let todoListThursday= document.querySelector(".todoListThursday");
let thursdayCompleted = document.querySelector("#countCompletedThursday");
<<<<<<< HEAD

addButtonThursday.addEventListener("click", (e)=>{
  //console.log('hit');
  let input = addInputThursday.value.trim();

  if (input === '') {
    alert("Write down a minimum of five activities")
  } else {
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let item = document.createElement("input");
    item.addEventListener('keyup', function(e){
      if(item.value.trim() === ''){
        if(e.target.parentElement.children[0].checked == true){
          numberCheckedThursday--;
          thursdayCompleted.innerText = "You have " + numberCheckedThursday + " activities completed";
        }
        todoListThursday.removeChild(li);
        let count = todoListThursday.querySelectorAll("li");
        activityNumber.innerText="total number of activites is " + count.length;
      };
    });
    item.type = "text";
    item.value = input;
    //let editButton = document.createElement("span");
    let trashButton = document.createElement("span");
    //editButton.classList.add('glyphicon', 'glyphicon-pencil');
    trashButton.classList.add('glyphicon', 'glyphicon-minus', 'minus-icon');
    //delete button
  // my input
    //editButton.innerText="Edit"; //inner text encodes special characters
    //trashButton.innerText="trash";
    todoListThursday.appendChild(li)


    li.appendChild(checkBox);
    li.appendChild(item);
    // li.appendChild(editInput);
    //li.appendChild(editButton);
    li.appendChild(trashButton);
    addInputThursday.value = "";
    trashButton.addEventListener('click', function(e) {
      if(e.target.parentElement.children[0].checked == true){
        numberCheckedThursday--;
        thursdayCompleted.innerText = "You have " + numberCheckedThursday + " activities completed";
      }
      todoListThursday.removeChild(li);
      let count = todoListThursday.querySelectorAll("li");
      activityNumber.innerText="total number of activites is " + count.length;
    });
    // count number of activities
        let countThursday= todoListThursday.querySelectorAll("li");
        //console.log(countThursday);

        let activityNumber = document.querySelector("#countThursday");
        activityNumber.innerText="total number of activites is " + countThursday.length;

        checkBox.addEventListener('click', function(e) {
          if(e.target.checked == true){
            numberCheckedThursday++;
          } else {
            numberCheckedThursday--;
          }
          thursdayCompleted.innerText = "You have " + numberCheckedThursday + " activities completed";
        })
  }
});//Thursdayend

// start Friday
=======
let thursdayCount = document.querySelector("#countThursday");
>>>>>>> cc8ce17a89e4cb98e785930567181488c262aea3

let addInputFriday = document.querySelector(".newaddTaskFriday");
let addButtonFriday = document.querySelector(".addButtonFriday");
let todoListFriday= document.querySelector(".todoListFriday");
let fridayCompleted = document.querySelector("#countCompletedFriday");
let fridayCount = document.querySelector("#countFriday");

<<<<<<< HEAD
addButtonFriday.addEventListener("click", (e)=>{
  //console.log('hit');
  let input = addInputFriday.value.trim();

  if (input === '') {
    alert("Write down a minimum of five activities")
  } else {
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let item = document.createElement("input");
    item.addEventListener('keyup', function(e){
      if(item.value.trim() === ''){
        if(e.target.parentElement.children[0].checked == true){
          numberCheckedFriday--;
          fridayCompleted.innerText = "You have " + numberCheckedFriday + " activities completed";
        }
        todoListFriday.removeChild(li);
        let count = todoListFriday.querySelectorAll("li");
        activityNumber.innerText="total number of activites is " + count.length;
      };
    });
    item.type = "text";
    item.value = input;
    //let editButton = document.createElement("span");
    let trashButton = document.createElement("span");
    //editButton.classList.add('glyphicon', 'glyphicon-pencil');
    trashButton.classList.add('glyphicon', 'glyphicon-minus', 'minus-icon');
    //delete button
  // my input
   // editButton.innerText="Edit"; //inner text encodes special characters
    //trashButton.innerText="trash";
    todoListFriday.appendChild(li)


    li.appendChild(checkBox);
    li.appendChild(item);
    // li.appendChild(editInput);
    //li.appendChild(editButton);
    li.appendChild(trashButton);
    addInputFriday.value = "";
    trashButton.addEventListener('click', function(e) {
      if(e.target.parentElement.children[0].checked == true){
        numberCheckedFriday--;
        fridayCompleted.innerText = "You have " + numberCheckedFriday + " activities completed";
      }
      todoListFriday.removeChild(li);
      let count = todoListFriday.querySelectorAll("li");
      activityNumber.innerText="total number of activites is " + count.length;
    });
    // count number of activities Friday
        let countFriday= todoListFriday.querySelectorAll("li");
        //console.log(countFriday);
=======
let addInputSaturday = document.querySelector(".newaddTaskSaturday");
let addButtonSaturday = document.querySelector(".addButtonSaturday");
let todoListSaturday= document.querySelector(".todoListSaturday");
let saturdayCompleted = document.querySelector("#countCompletedSaturday");
let saturdayCount = document.querySelector("#countSaturday");
>>>>>>> cc8ce17a89e4cb98e785930567181488c262aea3

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
      console.log(selectedButton)
      selectedButton.click();
    }
  })
})

function createActivity(day) {
  console.log(day);
  let input = addInput[day].value.trim();
  if (input === '') {
    alert("Write down a minimum of five activities")
  } else {
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
        todoList[day].removeChild(li);
        let count = todoList[day].querySelectorAll("li");
        activityNumber.innerText="total number of activites is " + count.length;
      };
    });
    item.type = "text";
    item.value = input;
<<<<<<< HEAD
    //let editButton = document.createElement("span");
=======
>>>>>>> cc8ce17a89e4cb98e785930567181488c262aea3
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
      todoList[day].removeChild(li);
      numberActivities[day] = todoList[day].querySelectorAll("li");
      numberActivitiesElements[day].innerText="total number of activites is " + numberActivities[day].length;
    });
    numberActivities[day] = todoList[day].querySelectorAll("li");
    numberActivitiesElements[day].innerText="total number of activites is " + numberActivities[day].length;

    checkBox.addEventListener('click', function(e) {
      if(e.target.checked == true){
        numberChecked[day]++;
      } else {
        numberChecked[day]--;
      }
      completedCount[day].innerText = "You have " + numberChecked[day] + " activities completed";
    })


  }
}

addButtonSunday.addEventListener("click", function() {createActivity(0)});
addButtonMonday.addEventListener("click", function(){createActivity(1)});
addButtonTuesday.addEventListener("click", function() {createActivity(2)});
addButtonWednesday.addEventListener("click", function() {createActivity(3)});
addButtonThursday.addEventListener("click", function(){createActivity(4)});
addButtonFriday.addEventListener("click", function() {createActivity(5)});
addButtonSaturday.addEventListener("click", function() {createActivity(6)});

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

<<<<<<< HEAD
  if (input === '') {
    alert("Write down a minimum of five activities")
  } else {
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let item = document.createElement("input");
    item.addEventListener('keyup', function(e){
      if(item.value.trim() === ''){
        if(e.target.parentElement.children[0].checked == true){
          numberCheckedSunday--;
          sundayCompleted.innerText = "You have " + numberCheckedSunday + " activities completed";
        }
        todoListSunday.removeChild(li);
        let count = todoListSunday.querySelectorAll("li");
        activityNumber.innerText="total number of activites is " + count.length;
      };
    });
    item.type = "text";
    item.value = input;
    //let editButton = document.createElement("span");
    let trashButton = document.createElement("span");
    //editButton.classList.add('glyphicon', 'glyphicon-pencil');
    trashButton.classList.add('glyphicon', 'glyphicon-minus', 'minus-icon');
    //delete button
  // my input
    //editButton.innerText="Edit"; //inner text encodes special characters
    //trashButton.innerText="trash";
    todoListSunday.appendChild(li)
=======
document.getElementById("hwd").style.color = "orange";
>>>>>>> cc8ce17a89e4cb98e785930567181488c262aea3

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

function checkGoal() {
  console.log(document.querySelector('.goal').value);
  let goalLeft = document.querySelector('.goal').value - numberCheckedSunday;
  console.log(goalLeft);
}