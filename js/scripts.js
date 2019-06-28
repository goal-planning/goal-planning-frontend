// function createRow() {
//   const row = document.createElement('div');
//   row.classList.add('row');
//   for(let i = 5; i > 0; i--) {
//     let column = document.createElement('div')
//     column.classList.add('col-md-2');
//     column.classList.add('column');
//user input element
// dom manipulation
//  net ninja
// traversy media add item lister changing style individual li's
//     row.appendChild(column);
//   }
//   return row;
// }
//
// let bob = createRow();
// console.log(bob);
//
//
//
// document.getElementById("myBtn").addEventListener("click", displayDate);
//
// function displayDate() {
//     document.getElementById("demo").innerHTML = Date();
// }
//
// var i;

// for (i=0; i<10; i++) {
// 	if (i > 5)
let addInputMonday = document.querySelector(".newaddTaskMonday");
let addButtonMonday = document.querySelector(".addButtonMonday"); //<button class = "addButton">Activity</button>
let todoListMonday = document.querySelector(".todoListMonday"); //<ul class="todoList">
let todoListTues = document.querySelector(".todoListTuesday");
document.getElementById("hm").style.color = "red";
addInputMonday.addEventListener("keyup", (e)=>{
  if(e.keyCode === 13) {
    addButtonMonday.click();
  };
});

addButtonMonday.addEventListener("click", (e)=>{
  console.log('hit');
  let input = addInputMonday.value.trim();
  console.log(input)
  if (input === '') {
    alert("Write down a minimum of five activities")
  } else {
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let item = document.createElement("input");
    item.type = "text";
    item.value = input;
    let editButton = document.createElement("span"); 
    let trashButton = document.createElement("span");
    editButton.classList.add('glyphicon', 'glyphicon-pencil');
    trashButton.classList.add('glyphicon', 'glyphicon-trash');
    //delete button
  // my input
    //editButton.innerText="Edit"; //inner text encodes special characters
    //trashButton.innerText="trash";
    todoListMonday.appendChild(li)


    li.appendChild(checkBox);
    li.appendChild(item);
    // li.appendChild(editInput);
    li.appendChild(editButton);
    li.appendChild(trashButton);
    addInputMonday.value = "";
    trashButton.addEventListener('click', function(e) {
      todoListMonday.removeChild(li);
      let count = todoListMonday.querySelectorAll("li");
      activityNumber.innerText="total number of activites is " + count.length;
    });
// count number of activities
    let countMonday= todoListMonday.querySelectorAll("li");
    console.log(countMonday);

    let activityNumber = document.querySelector("#countMonday");
    console.log(countMonday.length);
    activityNumber.innerText="total number of activites is " + countMonday.length;


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
let addInputTuesday = document.querySelector(".newaddTaskTuesday");
let addButtonTuesday = document.querySelector(".addButtonTuesday"); //<button class = "addButton">Activity</button>
let todoListTuesday = document.querySelector(".todoListTuesday");
document.getElementById("ht").style.color = "orange";


addButtonTuesday.addEventListener("click", (e)=>{
  console.log('hit');
  let input = addInputTuesday.value;

  if (input === '') {
    alert("Write down a minimum of five activities")
  } else {
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let item = document.createElement("input");
    item.type = "text";
    item.value = input;
    let editButton = document.createElement("span"); 
    let trashButton = document.createElement("span");
    editButton.classList.add('glyphicon', 'glyphicon-pencil');
    trashButton.classList.add('glyphicon', 'glyphicon-trash');
    //delete button
  // my input
    //editButton.innerText="Edit"; //inner text encodes special characters
    //trashButton.innerText="trash";
    todoListTuesday.appendChild(li)


    li.appendChild(checkBox);
    li.appendChild(item);
    // li.appendChild(editInput);
    li.appendChild(editButton);
    li.appendChild(trashButton);
    addInputTuesday.value = "";
    trashButton.addEventListener('click', function(e) {
      todoListTuesday.removeChild(li);
      let count = todoListTuesday.querySelectorAll("li");
      activityNumber.innerText="total number of activites is " + count.length;
    });
    // count number of activities
        let countTuesday= todoListTuesday.querySelectorAll("li");
        console.log(countTuesday);

        let activityNumber = document.querySelector("#countTuesday");
        activityNumber.innerText="total number of activites is " + countTuesday.length;


  }
});//start Wednesday

let addInputWednesday= document.querySelector(".newaddTaskWednesday");
let addButtonWednesday= document.querySelector(".addButtonWednesday"); //<button class = "addButton">Activity</button>
let todoListWednesday = document.querySelector(".todoListWednesday");
document.getElementById("ht").style.color = "orange";


addButtonWednesday.addEventListener("click", (e)=>{
  console.log('hit');
  let input = addInputWednesday.value;

  if (input === '') {
    alert("Write down a minimum of five activities")
  } else {
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let item = document.createElement("input");
    item.type = "text";
    item.value = input;
    let editButton = document.createElement("span"); 
    let trashButton = document.createElement("span");
    editButton.classList.add('glyphicon', 'glyphicon-pencil');
    trashButton.classList.add('glyphicon', 'glyphicon-trash');
    //delete button
  // my input
    //editButton.innerText="Edit"; //inner text encodes special characters
    //trashButton.innerText="trash";
    todoListWednesday.appendChild(li)


    li.appendChild(checkBox);
    li.appendChild(item);
    // li.appendChild(editInput);
    li.appendChild(editButton);
    li.appendChild(trashButton);
    addInputWednesday.value = "";
    trashButton.addEventListener('click', function(e) {
      todoListWednesday.removeChild(li);
      let count = todoListWednesday.querySelectorAll("li");
      activityNumber.innerText="total number of activites is " + count.length;
    });
    // count number of activities
        let countWednesday= todoListWednesday.querySelectorAll("li");
        console.log(countWednesday);

        let activityNumber = document.querySelector("#countWednesday");
        activityNumber.innerText="total number of activites is " + countWednesday.length;


  }
});

// start Thursday

let addInputThursday = document.querySelector(".newaddTaskThursday");
let addButtonThursday = document.querySelector(".addButtonThursday"); //<button class = "addButton">Activity</button>
let todoListThursday= document.querySelector(".todoListThursday");
document.getElementById("hth").style.color = "coral";

addButtonThursday.addEventListener("click", (e)=>{
  console.log('hit');
  let input = addInputThursday.value;

  if (input === '') {
    alert("Write down a minimum of five activities")
  } else {
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let item = document.createElement("input");
    item.type = "text";
    item.value = input;
    let editButton = document.createElement("span"); 
    let trashButton = document.createElement("span");
    editButton.classList.add('glyphicon', 'glyphicon-pencil');
    trashButton.classList.add('glyphicon', 'glyphicon-trash');
    //delete button
  // my input
    //editButton.innerText="Edit"; //inner text encodes special characters
    //trashButton.innerText="trash";
    todoListThursday.appendChild(li)


    li.appendChild(checkBox);
    li.appendChild(item);
    // li.appendChild(editInput);
    li.appendChild(editButton);
    li.appendChild(trashButton);
    addInputThursday.value = "";
    trashButton.addEventListener('click', function(e) {
      todoListThursday.removeChild(li);
      let count = todoListThursday.querySelectorAll("li");
      activityNumber.innerText="total number of activites is " + count.length;
    });
    // count number of activities
        let countThursday= todoListThursday.querySelectorAll("li");
        console.log(countThursday);

        let activityNumber = document.querySelector("#countThursday");
        activityNumber.innerText="total number of activites is " + countThursday.length;
  }
});//Thursdayend

// start Friday

let addInputFriday = document.querySelector(".newaddTaskFriday");
let addButtonFriday = document.querySelector(".addButtonFriday"); //<button class = "addButton">Activity</button>
let todoListFriday= document.querySelector(".todoListFriday");
document.getElementById("hf").style.color = "DarkOliveGreen";


addButtonFriday.addEventListener("click", (e)=>{
  console.log('hit');
  let input = addInputFriday.value;

  if (input === '') {
    alert("Write down a minimum of five activities")
  } else {
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let item = document.createElement("input");
    item.type = "text";
    item.value = input;
    let editButton = document.createElement("span"); 
    let trashButton = document.createElement("span");
    editButton.classList.add('glyphicon', 'glyphicon-pencil');
    trashButton.classList.add('glyphicon', 'glyphicon-trash');
    //delete button
  // my input
   // editButton.innerText="Edit"; //inner text encodes special characters
    //trashButton.innerText="trash";
    todoListFriday.appendChild(li)


    li.appendChild(checkBox);
    li.appendChild(item);
    // li.appendChild(editInput);
    li.appendChild(editButton);
    li.appendChild(trashButton);
    addInputFriday.value = "";
    trashButton.addEventListener('click', function(e) {
      todoListFriday.removeChild(li);
      let count = todoListFriday.querySelectorAll("li");
      activityNumber.innerText="total number of activites is " + count.length;
    });
    // count number of activities Friday
        let countFriday= todoListFriday.querySelectorAll("li");
        console.log(countFriday);

        let activityNumber = document.querySelector("#countFriday");
        activityNumber.innerText="total number of activites is " + countFriday.length;
  }
});//Fridayend

// Start Saturday

let addInputSaturday = document.querySelector(".newaddTaskSaturday");
let addButtonSaturday = document.querySelector(".addButtonSaturday"); //<button class = "addButton">Activity</button>
let todoListSaturday= document.querySelector(".todoListSaturday");
document.getElementById("hs").style.color = "DarkViolet";


addButtonSaturday.addEventListener("click", (e)=>{
  console.log('hit');
  let input = addInputSaturday.value;

  if (input === '') {
    alert("Write down a minimum of five activities")
  } else {
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let item = document.createElement("input");
    item.type = "text";
    item.value = input;
    let editButton = document.createElement("span"); 
    let trashButton = document.createElement("span");
    editButton.classList.add('glyphicon', 'glyphicon-pencil');
    trashButton.classList.add('glyphicon', 'glyphicon-trash');
    //delete button
  // my input
    //editButton.innerText="Edit"; //inner text encodes special characters
    //trashButton.innerText="trash";
    todoListSaturday.appendChild(li)


    li.appendChild(checkBox);
    li.appendChild(item);
    // li.appendChild(editInput);
    li.appendChild(editButton);
    li.appendChild(trashButton);
    addInputSaturday.value = "";
    trashButton.addEventListener('click', function(e) {
      todoListSaturday.removeChild(li);
      let count = todoListSaturday.querySelectorAll("li");
      activityNumber.innerText="total number of activites is " + count.length;
    });
    // count number of activities Saturday
     let countSaturday= todoListSaturday.querySelectorAll("li");
     console.log(countSaturday);

     let activityNumber = document.querySelector("#countSaturday");
     activityNumber.innerText="total number of activites is " + countSaturday.length;
  }
});



//Saturday end

// Start Sunday

let addInputSunday = document.querySelector(".newaddTaskSunday");
let addButtonSunday = document.querySelector(".addButtonSunday"); //<button class = "addButton">Activity</button>
let todoListSunday= document.querySelector(".todoListSunday");
document.getElementById("hsu").style.color = "crimson";


addButtonSunday.addEventListener("click", (e)=>{
  console.log('hit');
  let input = addInputSunday.value;

  if (input === '') {
    alert("Write down a minimum of five activities")
  } else {
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let item = document.createElement("input");
    item.type = "text";
    item.value = input;
    let editButton = document.createElement("span"); 
    let trashButton = document.createElement("span");
    editButton.classList.add('glyphicon', 'glyphicon-pencil');
    trashButton.classList.add('glyphicon', 'glyphicon-trash');
    //delete button
  // my input
    //editButton.innerText="Edit"; //inner text encodes special characters
    //trashButton.innerText="trash";
    todoListSunday.appendChild(li)


    li.appendChild(checkBox);
    li.appendChild(item);
    // li.appendChild(editInput);
    li.appendChild(editButton);
    li.appendChild(trashButton);
    addInputSunday.value = "";
    trashButton.addEventListener('click', function(e) {
      todoListSunday.removeChild(li);
      let count = todoListSunday.querySelectorAll("li");
      activityNumber.innerText="total number of activites is " + count.length;
    });
    // count number of activities Saturday
     let countSunday= todoListSunday.querySelectorAll("li");
     console.log(countSunday);

     let activityNumber = document.querySelector("#countSunday");
     activityNumber.innerText="total number of activites is " + countSunday.length;
  }
});



//Sunday end
