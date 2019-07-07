/* Reference Repository: https://github.com/yusufshakeel/Web-App */

window.onload = function(){
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

    var calendar = get_calendar(day_no, days);

    append_month(month_name[month], year, calendar);

}

function append_month(month_name, year, calendar){
    document.getElementById("calendar-month-year").innerHTML = month_name+" "+year;
    document.getElementById("calendar-dates").appendChild(calendar);
}

function get_calendar(day_no, days){
    var table = document.createElement('table');
    // For labeling first and last row numbers on months
    var Ftd;
    var Ltd;
    var Ftd_count = 0;
    var Ltd_count = 0;   
    //create 1nd row
    tr = document.createElement('tr');
    var c;
    for(c=0; c<=6; c++){
        if(c == day_no){
            break;
        }
        var td = document.createElement('td');
        var p = document.createElement('p');
        Ftd = "Ftd" + Ftd_count;
        p.setAttribute("id", Ftd);
        p.className += 'calBoxNum'
        p.innerText = "";
        td.appendChild(p);
        tr.appendChild(td);
    }
    
    var count = 1;
    for(; c<=6; c++){
        var td = document.createElement('td');
        p = document.createElement('p');
        Ftd = "Ftd" + Ftd_count;
        p.setAttribute("id", Ftd);
        p.className += 'calBoxNum'
        p.innerText = count.toString();
        td.appendChild(p);
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //rest of the date rows
    for(var r=3; r<=6; r++){
        tr = document.createElement('tr');
        for(var c=0; c<=6; c++){
            if(count > days){
                var td = document.createElement('td');
                var p = document.createElement('p');
                Ltd = "Ltd" + Ltd_count;
                p.setAttribute("id", Ltd);
                p.className += 'calBoxNum'
                p.innerText = "";
                td.appendChild(p);
                tr.appendChild(td);
                td_count++;
            }else if(r == 6){
                var td = document.createElement('td');
                p = document.createElement('p');
                Ltd = "Ltd" + Ltd_count;
                p.setAttribute("id", Ltd);
                p.className += 'calBoxNum'
                p.innerText = count.toString();
                td.appendChild(p);
                count++;
                td_count++;
                tr.appendChild(td);
            }else{
                var td = document.createElement('td');
                p = document.createElement('p');
                p.className += 'calBoxNum'
                p.innerText = count.toString();
                td.appendChild(p);
                count++;
                tr.appendChild(td);
                }

        }
        table.appendChild(tr);
        td_count = 0;
    }
	return table;
}

var cal_arrow_left = document.querySelector("#cal_left_arrow");
var cal_arrow_right = document.querySelector("#cal_right_arrow")
var year_tracker;
var month_tracker;

cal_arrow_left.addEventListener("click", (e)=>{
    // Set month
        let d = d.setFullYear(year, 1, 1);
        let month = d.getMonth();
        console.log(d);
        let day_no = d.getDay();
        let days = new Date(year, 2, 0).getDate();
    let calendar = get_calendar(day_no, days);
    append_month(month_name[month], year, calendar);


});

cal_arrow_right.addEventListener("click", (e)=>{

});