/* Reference Repository: https://github.com/yusufshakeel/Web-App */

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
        p.className += 'calBoxNum'
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
        p.className += 'calBoxNum'
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
                p.className += 'calBoxNum'
                p.innerText = "";
                td.appendChild(p);
                Ftd_count++;
            }else if(r == 6){
                Ftd = Ftd_count;
                var td = document.getElementById('td'+Ftd);
                p = document.createElement('p');
                p.setAttribute("id", Ftd);
                p.className += 'calBoxNum'
                p.innerText = count.toString();
                td.appendChild(p);
                count++;
                Ftd_count++;
            }else{
                Ftd = Ftd_count;
                var td = document.getElementById('td'+Ftd);
                p = document.createElement('p');
                p.setAttribute("id", Ftd);
                p.className += 'calBoxNum'
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
        var myNode = document.getElementById("td"+i);
            while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
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
        var myNode = document.getElementById("td"+i);
            while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
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

    td0.addEventListener("click", (e)=>{
        td0.children[0].innerHTML = 'wow!!!';
    });
    td1.addEventListener("click", (e)=>{
        td1.children[0].innerHTML = 'wow!!!';
    });
    td2.addEventListener("click", (e)=>{
        td2.children[0].innerHTML = 'wow!!!';
    });
    td3.addEventListener("click", (e)=>{
        td3.children[0].innerHTML = 'wow!!!';
    });
    td4.addEventListener("click", (e)=>{
        td4.children[0].innerHTML = 'wow!!!';
    });
    td5.addEventListener("click", (e)=>{
        td5.children[0].innerHTML = 'wow!!!';
    });
    td6.addEventListener("click", (e)=>{
        td6.children[0].innerHTML = 'wow!!!';
    });
    td7.addEventListener("click", (e)=>{
        td7.children[0].innerHTML = 'wow!!!';
    });
    td8.addEventListener("click", (e)=>{
        td8.children[0].innerHTML = 'wow!!!';
    });
    td9.addEventListener("click", (e)=>{
        td9.children[0].innerHTML = 'wow!!!';
    });
    td10.addEventListener("click", (e)=>{
        td10.children[0].innerHTML = 'wow!!!';
    });
    td11.addEventListener("click", (e)=>{
        td11.children[0].innerHTML = 'wow!!!';
    });
    td12.addEventListener("click", (e)=>{
        td12.children[0].innerHTML = 'wow!!!';
    });
    td13.addEventListener("click", (e)=>{
        td13.children[0].innerHTML = 'wow!!!';
    });
    td14.addEventListener("click", (e)=>{
        td14.children[0].innerHTML = 'wow!!!';
    });
    td15.addEventListener("click", (e)=>{
        td15.children[0].innerHTML = 'wow!!!';
    });
    td16.addEventListener("click", (e)=>{
        td16.children[0].innerHTML = 'wow!!!';
    });
    td17.addEventListener("click", (e)=>{
        td17.children[0].innerHTML = 'wow!!!';
    });
    td18.addEventListener("click", (e)=>{
        td18.children[0].innerHTML = 'wow!!!';
    });
    td19.addEventListener("click", (e)=>{
        td19.children[0].innerHTML = 'wow!!!';
    });
    td20.addEventListener("click", (e)=>{
        td20.children[0].innerHTML = 'wow!!!';
    });
    td21.addEventListener("click", (e)=>{
        td21.children[0].innerHTML = 'wow!!!';
    });
    td22.addEventListener("click", (e)=>{
        td22.children[0].innerHTML = 'wow!!!';
    });
    td23.addEventListener("click", (e)=>{
        td23.children[0].innerHTML = 'wow!!!';
    });
    td24.addEventListener("click", (e)=>{
        td24.children[0].innerHTML = 'wow!!!';
    });
    td25.addEventListener("click", (e)=>{
        td25.children[0].innerHTML = 'wow!!!';
    });
    td26.addEventListener("click", (e)=>{
        td26.children[0].innerHTML = 'wow!!!';
    });
    td27.addEventListener("click", (e)=>{
        td27.children[0].innerHTML = 'wow!!!';
    });
    td28.addEventListener("click", (e)=>{
        td28.children[0].innerHTML = 'wow!!!';
    });
    td29.addEventListener("click", (e)=>{
        td29.children[0].innerHTML = 'wow!!!';
    });
    td30.addEventListener("click", (e)=>{
        td30.children[0].innerHTML = 'wow!!!';
    });
    td31.addEventListener("click", (e)=>{
        td31.children[0].innerHTML = 'wow!!!';
    });
    td32.addEventListener("click", (e)=>{
        td32.children[0].innerHTML = 'wow!!!';
    });
    td33.addEventListener("click", (e)=>{
        td33.children[0].innerHTML = 'wow!!!';
    });
    td34.addEventListener("click", (e)=>{
        td34.children[0].innerHTML = 'wow!!!';
    });
    