window.onload = function ready(){
    var d = new Date();
    var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var month = d.getMonth();   //0-11
    var year = d.getFullYear(); //2014
    var first_date = month_name[month] + " " + 1 + " " + year;
    //September 1 2014
    var tmp = new Date(first_date).toDateString();
    //Mon Sep 01 2014 ...
    var first_day = tmp.substring(0, 3);    //Mon
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);   //1
    var days = new Date(year, month+1, 0).getDate();    //30, 31, 28, 29
    //Tue Sep 30 2014 ...

    get_calendar(day_no, days);

    append_month(month_name[month], year);
}
function append_month(month_name, year){
    document.getElementById("calendar-month-year").innerHTML = month_name+" "+year;
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var box;
    var count = 1;
    for(let i=28; i<=34; i++){
        box = document.getElementById(i);
        if(box.innerText == ""){
            box.innerText = count;
            box.classList.add("non_current_month_num");
            count++;
        }
    }
    var track = months.indexOf(month_name);
    var last_month = new Date();
    last_month.setFullYear(year, track, 0);
    var last_month_day = last_month.getDate();
    track = 0;
    for(let i=0; i<=6; i++){
        box = document.getElementById(i);
        if(box.innerText == ""){
            track++;
        }
    }
    var j = 0;
    while(track > 0){
        box = document.getElementById(j);
        box.innerText = last_month_day - track + 1;
        box.classList.add("non_current_month_num");
        track--;
        j++;
    }
    var table = document.getElementById("cal_table");
    count = 0;
    for (let i = 0; i<= 4; i++) {
        for (let j=0; j<=6; j++) {
            table.rows[i].cells[j].setAttribute('id', 'td'+count);
            count++;
        }
}
}

function get_calendar(day_no, days){
    var Ftd;
    var Ftd_count = 0;
    var c;
    for(c=0; c<=6; c++){
        if(c == day_no){
            break;
        }
        Ftd = Ftd_count;
        var td = document.getElementById("td"+Ftd);
        var p = document.createElement('p');
        p.setAttribute("id", Ftd);
        p.className += 'calBoxNum';
        p.innerText = "";
        td.appendChild(p);
        Ftd_count++;
    }

    var count = 1;
    for(; c<=6; c++){
        Ftd = Ftd_count;
        var td = document.getElementById('td'+Ftd);
        p = document.createElement('p');
        p.setAttribute("id", Ftd);
        p.className += 'calBoxNum';
        p.innerText = count.toString();
        td.appendChild(p);
        count++;
        Ftd_count++;
    }
    //rest of the date rows
    for(var r=3; r<=6; r++){
        for(var c=0; c<=6; c++){
            if(count > days){
                Ftd = Ftd_count;
                var td = document.getElementById('td'+Ftd);
                var p = document.createElement('p');
                p.setAttribute("id", Ftd);
                p.className += 'calBoxNum';
                p.innerText = "";
                td.appendChild(p);
                Ftd_count++;
            }else if(r == 6){
                Ftd = Ftd_count;
                var td = document.getElementById('td'+Ftd);
                p = document.createElement('p');
                p.setAttribute("id", Ftd);
                p.className += 'calBoxNum';
                p.innerText = count.toString();
                td.appendChild(p);
                count++;
                Ftd_count++;
            }else{
                Ftd = Ftd_count;
                var td = document.getElementById('td'+Ftd);
                p = document.createElement('p');
                p.setAttribute("id", Ftd);
                p.className += 'calBoxNum';
                p.innerText = count.toString();
                td.appendChild(p);
                count++;
                Ftd_count++;
                }

        }
        td_count = 0;
    }
}

var cal_arrow_left = document.querySelector("#cal_left_arrow");
var cal_arrow_right = document.querySelector("#cal_right_arrow")
var year_tracker;
var month_tracker;

var d = new Date();
var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var m = d.getMonth();   //0-11
var y = d.getFullYear(); //2014

cal_arrow_left.addEventListener("click", (e)=>{
    // Set month
    m = m - 1;
    if(m == -1){
        m = 11;
        y = y - 1;
    }
    d.setFullYear(y, m, 1);
    let day_no = d.getDay();
    let days = new Date(y, m+1, 0).getDate();
    for(let i=0; i<=34; i++){
        var cntnt = document.getElementById("td"+i);
        var holder = document.getElementById("hold"+i);
        while (cntnt.lastChild.className !== 'hold') {
            cntnt.removeChild(cntnt.lastChild);
        }
        while (holder.firstChild) {
            holder.removeChild(holder.firstChild);
        }
    }
    let calendar = get_calendar(day_no, days);
    append_month(month_name[m], y, calendar);
});

cal_arrow_right.addEventListener("click", (e)=>{
    // Set month
    m = m + 1;
    if(m == 12){
        m = 0;
        y = y + 1;
    }
    d.setFullYear(y, m, 1);
    let day_no = d.getDay();
    let days = new Date(y, m+1, 0).getDate();
    for(let i=0; i<=34; i++){
        var cntnt = document.getElementById("td"+i);
        var holder = document.getElementById("hold"+i);
        while (cntnt.lastChild.className !== 'hold') {
            cntnt.removeChild(cntnt.lastChild);
        }
        // TBD --> Removes todo from calendar
        while (holder.firstChild) {
            holder.removeChild(holder.firstChild);
        }
    }
    let calendar = get_calendar(day_no, days);
    append_month(month_name[m], y, calendar);
});

var td0 = document.getElementById('td0');
var td1 = document.getElementById('td1');
var td2 = document.getElementById('td2');
var td3 = document.getElementById('td3');
var td4 = document.getElementById('td4');
var td5 = document.getElementById('td5');
var td6 = document.getElementById('td6');
var td7 = document.getElementById('td7');
var td8 = document.getElementById('td8');
var td9 = document.getElementById('td9');
var td10 = document.getElementById('td10');
var td11 = document.getElementById('td11');
var td12 = document.getElementById('td12');
var td13 = document.getElementById('td13');
var td14 = document.getElementById('td14');
var td15 = document.getElementById('td15');
var td16 = document.getElementById('td16');
var td17 = document.getElementById('td17');
var td18 = document.getElementById('td18');
var td19 = document.getElementById('td19');
var td20 = document.getElementById('td20');
var td21 = document.getElementById('td21');
var td22 = document.getElementById('td22');
var td23 = document.getElementById('td23');
var td24 = document.getElementById('td24');
var td25 = document.getElementById('td25');
var td26 = document.getElementById('td26');
var td27 = document.getElementById('td27');
var td28 = document.getElementById('td28');
var td29 = document.getElementById('td29');
var td30 = document.getElementById('td30');
var td31 = document.getElementById('td31');
var td32 = document.getElementById('td32');
var td33 = document.getElementById('td33');
var td34 = document.getElementById('td34');
var td35 = document.getElementById('td35');

let addID;
let calAddIn = document.querySelector(".calAddIn");
let calAddButton = document.querySelector("#calAddButton");

var add0 = document.querySelector("#add0");
var add1 = document.querySelector("#add1");
var add2 = document.querySelector("#add2");
var add3 = document.querySelector("#add3");
var add4 = document.querySelector("#add4");
var add5 = document.querySelector("#add5");
var add6 = document.querySelector("#add6");
var add7 = document.querySelector("#add7");
var add8 = document.querySelector("#add8");
var add9 = document.querySelector("#add9");
var add10 = document.querySelector("#add10");
var add11 = document.querySelector("#add11");
var add12 = document.querySelector("#add12");
var add13 = document.querySelector("#add13");
var add14 = document.querySelector("#add14");
var add15 = document.querySelector("#add15");
var add16 = document.querySelector("#add16");
var add17 = document.querySelector("#add17");
var add18 = document.querySelector("#add18");
var add19 = document.querySelector("#add19");
var add20 = document.querySelector("#add20");
var add21 = document.querySelector("#add21");
var add22 = document.querySelector("#add22");
var add23 = document.querySelector("#add23");
var add24 = document.querySelector("#add24");
var add25 = document.querySelector("#add25");
var add26 = document.querySelector("#add26");
var add27 = document.querySelector("#add27");
var add28 = document.querySelector("#add28");
var add29 = document.querySelector("#add29");
var add30 = document.querySelector("#add30");
var add31 = document.querySelector("#add31");
var add32 = document.querySelector("#add32");
var add33 = document.querySelector("#add33");
var add34 = document.querySelector("#add34");

add0.addEventListener("click", (e)=>{
    addID = 0;
});
add1.addEventListener("click", (e)=>{
    addID = 1;
});
add2.addEventListener("click", (e)=>{
    addID = 2;
});
add3.addEventListener("click", (e)=>{
    addID = 3;
});
add4.addEventListener("click", (e)=>{
    addID = 4;
});
add5.addEventListener("click", (e)=>{
    addID = 5;
});
add6.addEventListener("click", (e)=>{
    addID = 6;
});
add7.addEventListener("click", (e)=>{
    addID = 7;
});
add8.addEventListener("click", (e)=>{
    addID = 8;
});
add9.addEventListener("click", (e)=>{
    addID = 9;
});
add10.addEventListener("click", (e)=>{
    addID = 10;
});
add11.addEventListener("click", (e)=>{
    addID = 11;
});
add12.addEventListener("click", (e)=>{
    addID = 12;
});
add13.addEventListener("click", (e)=>{
    addID = 13;
});
add14.addEventListener("click", (e)=>{
    addID = 14;
});
add15.addEventListener("click", (e)=>{
    addID = 15;
});
add16.addEventListener("click", (e)=>{
    addID = 16;
});
add17.addEventListener("click", (e)=>{
    addID = 17;
});
add18.addEventListener("click", (e)=>{
    addID = 18;
});
add19.addEventListener("click", (e)=>{
    addID = 19;
});
add20.addEventListener("click", (e)=>{
    addID = 20;
});
add21.addEventListener("click", (e)=>{
    addID = 21;
});
add22.addEventListener("click", (e)=>{
    addID = 22;
});
add23.addEventListener("click", (e)=>{
    addID = 23;
});
add24.addEventListener("click", (e)=>{
    addID = 24;
});
add25.addEventListener("click", (e)=>{
    addID = 25;
});
add26.addEventListener("click", (e)=>{
    addID = 26;
});
add27.addEventListener("click", (e)=>{
    addID = 27;
});
add28.addEventListener("click", (e)=>{
    addID = 28;
});
add29.addEventListener("click", (e)=>{
    addID = 29;
});
add30.addEventListener("click", (e)=>{
    addID = 30;
});
add31.addEventListener("click", (e)=>{
    addID = 31;
});
add32.addEventListener("click", (e)=>{
    addID = 32;
});
add33.addEventListener("click", (e)=>{
    addID = 33;
});
add34.addEventListener("click", (e)=>{
    addID = 34;
});

calAddIn.addEventListener("keyup", (e)=>{
    if(e.keyCode === 13) {
        calAddButton.click();
    };
});

let todo_counts = 1;
let calToWeekLabel;

calAddButton.addEventListener("click", function(e) {
    let input = calAddIn.value.trim();
    if (input === '') {
      alert("Cannot add an empty todo")
    } else {
      addCalTask(input);
      // Add task from calendar to current Week
      let findBoxDay = document.getElementById(addID);
      let SunNumCheck = document.getElementById("SunNum")
      let MonNumCheck = document.getElementById("MonNum")
      let TueNumCheck = document.getElementById("TueNum")
      let WedNumCheck = document.getElementById("WedNum")
      let ThuNumCheck = document.getElementById("ThuNum")
      let FriNumCheck = document.getElementById("FriNum")
      let SatNumCheck = document.getElementById("SatNum")
      console.log(MonNumCheck);
      if (findBoxDay.innerText === SunNumCheck.innerText){
        let textCount = todo_counts-1;
        let toDoText = document.getElementById("todo" + textCount);
        calToWeek(toDoText.childNodes[0].nodeValue, 0, textCount);
      }
      else if (findBoxDay.innerText === MonNumCheck.innerText) {
        let textCount = todo_counts-1;
        let toDoText = document.getElementById("todo" + textCount);
        calToWeek(toDoText.childNodes[0].nodeValue, 1, textCount);
      }
      else if (findBoxDay.innerText === TueNumCheck.innerText) {
        let textCount = todo_counts-1;
        let toDoText = document.getElementById("todo" + textCount);
        calToWeek(toDoText.childNodes[0].nodeValue, 2, textCount);
      }
      else if (findBoxDay.innerText === WedNumCheck.innerText) {
        let textCount = todo_counts-1;
        let toDoText = document.getElementById("todo" + textCount);
        calToWeek(toDoText.childNodes[0].nodeValue, 3, textCount);
      }
      else if (findBoxDay.innerText === ThuNumCheck.innerText) {
        let textCount = todo_counts-1;
        let toDoText = document.getElementById("todo" + textCount);
        calToWeek(toDoText.childNodes[0].nodeValue, 4, textCount);
      }
      else if (findBoxDay.innerText === FriNumCheck.innerText) {
        let textCount = todo_counts-1;
        let toDoText = document.getElementById("todo" + textCount);
        calToWeek(toDoText.childNodes[0].nodeValue, 5, textCount);
      }
      else if (findBoxDay.innerText === SatNumCheck.innerText) {
        let textCount = todo_counts-1;
        let toDoText = document.getElementById("todo" + textCount);
        calToWeek(toDoText.childNodes[0].nodeValue, 6, textCount);
      }
      else {

      }

    }
});

let calEditIn = document.querySelector(".calEditIn");
let calEditButton = document.querySelector("#calEditButton");
let editTarget;

calEditIn.addEventListener("keyup", function(e){
    if(e.keyCode === 13) {
        calEditButton.click();
    };
});

calEditButton.addEventListener("click", function(e){
    let todoEdit = document.getElementById(editTarget);
    todoEdit.childNodes[0].nodeValue = calEditIn.value;
    if(calEditIn.value == '') {
        todoEdit.remove();
    }
});

function addCalTask(input) {
    let todo = document.createElement("div");
    todo.setAttribute('id', "todo" + todo_counts);
    todo_counts++;
    let todoKill = document.createElement("div");
    todoKill.innerText = "X";
    todoKill.className += "cal_todo_x";
    todo.className += "cal_todo";
    todo.innerText = input;
    todo.appendChild(todoKill);
    let targetBox = document.getElementById('hold'+addID);
    targetBox.appendChild(todo);
    // Delete calendar todo
    todoKill.addEventListener("click", function(e){
        killCalTodo(e);
    })
    // Edit calendar todo
    todo.addEventListener("click", function(e){
        if(e.target !== this) {
            return;
        }
        editTarget = todo.id;
        $("#calEditModal").modal('show');

        $("#calEditModal").on('shown.bs.modal', function (e) {
            $('.calEditIn').focus();
        })

        $("#calEditModal").on('hidden.bs.modal', function (e) {
            $(this)
            .find("input,textarea,select")
            .val('')
            .end()
            .find("input[type=checkbox], input[type=radio]")
            .prop("checked", "")
            .end();
        })
    })
}

function killCalTodo(todo) {
    // GET DELETED ACTIVITY NAME
    // console.log(todo.srcElement.parentNode.childNodes[0].nodeValue);

    // GET DAY NUMBER LOCATION OF THE DELETED ACTIVITY
    // console.log(todo.srcElement.parentNode.parentNode.parentNode.lastChild.innerText);

    // RUN FUNCTION TO DELETE FROM WEEK TOO "IF ACTIVITY IS PRESENT"
    checkAndDeleteFromWeek(todo.srcElement.parentNode.childNodes[0].nodeValue, todo.srcElement.parentNode.parentNode.parentNode.lastChild.innerText)
    todo.target.parentElement.remove();
}

function checkAndDeleteFromWeek(item, day) {
    let weekSun = document.getElementById('SunNum');
    let weekMon = document.getElementById('MonNum');
    let weekTue = document.getElementById('TueNum');
    let weekWed = document.getElementById('WedNum');
    let weekThu = document.getElementById('ThuNum');
    let weekFri = document.getElementById('FriNum');
    let weekSat = document.getElementById('SatNum');
    // console.log(weekSun.innerText);
    // console.log(typeof(day));
    switch(day) {
        case weekSun.innerText:
            // Check Sunday on current week and update a delete if an activity matches
            // console.log(todoListSunday);
            // console.log(todoListSunday.children[0].childNodes[1].value);
            for(let i = 0; i < todoListSunday.children.length; i++) {
                if(item == todoListSunday.children[i].childNodes[1].value){
                    todoListSunday.removeChild(todoListSunday.children[i]); 
                    break;
                }
            }
            break;
        case weekMon.innerText:
            for(let i = 0; i < todoListMonday.children.length; i++) {
                if(item == todoListMonday.children[i].childNodes[1].value){
                    todoListMonday.removeChild(todoListMonday.children[i]); 
                    break;
                }
            }
            break;
        case weekTue.innerText:
            for(let i = 0; i < todoListTuesday.children.length; i++) {
                if(item == todoListTuesday.children[i].childNodes[1].value){
                    todoListTuesday.removeChild(todoListTuesday.children[i]); 
                    break;
                }
            }
            break;
        case weekWed.innerText:
            for(let i = 0; i < todoListWednesday.children.length; i++) {
                if(item == todoListWednesday.children[i].childNodes[1].value){
                    todoListWednesday.removeChild(todoListWednesday.children[i]); 
                    break;
                }
            }
            break;
        case weekThu.innerText:
            for(let i = 0; i < todoListThursday.children.length; i++) {
                if(item == todoListThursday.children[i].childNodes[1].value){
                    todoListThursday.removeChild(todoListThursday.children[i]); 
                    break;
                }
            }
            break;
        case weekFri.innerText:
            for(let i = 0; i < todoListFriday.children.length; i++) {
                if(item == todoListFriday.children[i].childNodes[1].value){
                    todoListFriday.removeChild(todoListFriday.children[i]); 
                    break;
                }
            }
            break;
        case weekSat.innerText:
            for(let i = 0; i < todoListSaturday.children.length; i++) {
                if(item == todoListSaturday.children[i].childNodes[1].value){
                    todoListSaturday.removeChild(todoListSaturday.children[i]); 
                    break;
                }
            }
            break;
        default:
            console.log('not current week');
    }

}

function syncCalRemoveFromWeek(todoCount) {
    let itemDelete = todoCount;
    let kill = document.getElementById("todo" + itemDelete);
    console.log(todoCount);
    kill.remove();
}

function updateTodoName(newName, todoCount) {
    let update = document.getElementById("todo" + todoCount);
    if(update == null){
        return;
    }
    update.childNodes[0].nodeValue = newName;
}
