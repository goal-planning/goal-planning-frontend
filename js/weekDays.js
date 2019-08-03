var date = new Date();
var _day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var _month = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var day_name = _day_name[date.getDay()];
var day_num = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();

var week = getWeekDate(day_name, day_num, month, year, date);

// Current week number elements
var _SunNum = document.getElementById('SunNum');
_SunNum.innerText = week[0].toString();
var _MonNum = document.getElementById('MonNum');
_MonNum.innerText = week[1].toString();
var _TueNum = document.getElementById('TueNum');
_TueNum.innerText = week[2].toString();
var _WedNum = document.getElementById('WedNum');
_WedNum.innerText = week[3].toString();
var _ThuNum = document.getElementById('ThuNum');
_ThuNum.innerText = week[4].toString();
var _FriNum = document.getElementById('FriNum');
_FriNum.innerText = week[5].toString();
var _SatNum = document.getElementById('SatNum');
_SatNum.innerText = week[6].toString();



function getWeekDate(day_name, day_num, month, year, date){
    var week_num = [0, 0, 0, 0, 0, 0, 0];
    var max_days = 0;
    var i = 0;
    // Leap year check
    var leap_year = false;
    if((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)){
        leap_year = true;
    }
    // Check month and get maximum days
    if(month === 0){ 
        max_days = 31;
    } else {
        if(month % 2 === 0){
            max_days = 31;
        } else if(date.getMonth() === 1){
            if(leap_year) { max_days = 29; }
            else max_days = 28;
        } else max_days = 30;
    }
    console.log(max_days);
    // Get day name as reference
    switch(day_name){
        case 'Sun':
            i = 0;
            break;
        case 'Mon':
            i = 1;
            break;
        case 'Tue':
            i = 2;
            break;
        case 'Wed':
            i = 3;
            break;
        case 'Thu':
            i = 4;
            break;
        case 'Fri':
            i = 5;
            break;
        case 'Sat':
            i = 6;
            break;
        default:
            break;
    }
    // Week day number entry
    var r = 6 - (6 - i);
    for(i; i < 7; i++){
        week_num[i] = day_num;
        switch(max_days){
            case 31:
                day_num++;
                if(day_num > 31) day_num = 1;
                break;
            case 30:
                day_num++;
                if(day_num > 30) day_num = 1;
                break;
            case 28:
                day_num++;
                if(day_num > 28) day_num = 1;
                break;
            case 29:
                day_num++;
                if(day_num > 29) day_num = 1;
                break;
            default:
                break;
        }
    }
    var j;
    day_num = date.getDate() - r;
    for(j=0; j<r; j++){
        week_num[j] = day_num;
        switch(max_days){
            case 31:
                day_num++;
                if(day_num > 31) day_num = 1;
                break;
            case 30:
                day_num++;
                if(day_num > 30) day_num = 1;
                break;
            case 28:
                day_num++;
                if(day_num > 28) day_num = 1;
                break;
            case 29:
                day_num++;
                if(day_num > 29) day_num = 1;
                break;
            default:
                break;
        }
    }
    console.log(week_num);
    // Negative check to get start of the week (left-handside values)
    if(week_num[0] <= 0){
        var count = 0;
        j = 0;
        while(week_num[j] <= 0){
            count++;
            j++;           
        }
        if(date.getMonth() === 0){ 
            max_days = 31;
        } else {
            if((month-1) % 2 === 0){
                max_days = 31;
            } else if(date.getMonth()-1 === 1){
                if(leap_year) { max_days = 29; }
                else max_days = 28;
            } else max_days = 30;
        }
        console.log(max_days);
        max_days = max_days - count + 1;
        j = 0;
        while(count > 0){
            week_num[j] = max_days;
            j++;
            max_days++;
            count--;
        }
    }
    return week_num;
}