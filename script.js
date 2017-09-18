// Code goes here
var months=new Array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'),
leapFeb,
today = new Date(),
today_year = today.getFullYear(),
today_month = today.getMonth(),
today_day = today.getDate(),
tableYear=today_year,
tableMonth;

$(document).ready(function(){
    var firstDay=new Date(today_year,today_month,1);
    var firstDayDate=firstDay.getDate();//1
    var firstWeekDay=firstDay.getDay();//Mon
    if(today_year%4===0){
        leapFeb=29;
    }else{
        leapFeb=28;
    };
    var monDays=new Array(31,leapFeb,31,30,31,30,31,31,30,31,30,31);
    
    var getCal = function(){
      var html='';
    html +="<div id='info' style='display:inline'>"+months[today_month]+' '+today_year+"</div><br/>Year:<select id='yearSelect' onchange='yearSel()'>"+setYear()+"</select>Month:<select id='monthSelect' onchange='monthSel()'>\n\
<option value='blank'></option>\n\
<option value='Jan'>Jan</option>\n\
<option value='Feb'>Feb</option>\n\
<option value='Mar'>Mar</option>\n\
<option value='Apr'>Apr</option>\n\
<option value='May'>May</option>\n\
<option value='Jun'>Jun</option>\n\
<option value='Jul'>Jul</option>\n\
<option value='Aug'>Aug</option>\n\
<option value='Sep'>Sep</option>\n\
<option value='Oct'>Oct</option>\n\
<option value='Nov'>Nov</option>\n\
<option value='Dec'>Dec</option>\n\
</select><br/><table  style='border-collapse:collapse;text-align:center' id='cal'><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wen</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>";
    for(var i=0;i<firstWeekDay;i++){
      html+="<td></td>";
    }
    for(var j=1;j<monDays[today_month]+1;j++){
      if((j+firstWeekDay-1)%7===0){
          if(j===today_day){
              html+="</tr><tr><td style='background-color:lightblue;'>"+j+"</td>";
          }else{
              html+='</tr><tr><td>'+j+'</td>';
          }
      }else{
          if(j===today_day){
              html+="<td style='background-color:lightblue;'>"+j+"</td>";
          }else{
              html+="<td>"+j+"</td>";
          }
      }
    }
    html+='</tr></table>';
    $('#cal_div').html(html);
    };
    getCal();

});

var next= function(){
    tableMonth=months.indexOf($('#info').html().split(' ')[0]);
    console.log(tableMonth);
    tableMonth++;
    if(tableMonth===12){
        tableYear ++;
        tableMonth=0;
        tableCreate();
    }else{
        tableCreate();
    };
};

var previous=function(){
    tableMonth=months.indexOf($('#info').html().split(' ')[0]);
    tableMonth--;
    if(tableMonth<0){
        tableYear--;
        tableMonth=11;
        tableCreate();
    }else{
        tableCreate();
    }
};

var tableCreate = function(){
    var firstDay=new Date(tableYear,tableMonth,1);
    if(tableYear%4===0){
        leapFeb=29;
    }else{
        leapFeb=28;
    };
    var monDays=new Array(31,leapFeb,31,30,31,30,31,31,30,31,30,31);
    var firstDayDate=firstDay.getDate();//1
    var firstWeekDay=firstDay.getDay();//4
    var html='';
    html +="<div id='info' style='display:inline'>"+months[tableMonth]+' '+tableYear+"</div><br/>Year:<select id='yearSelect' onchange='yearSel()'>"+setYear()+"</select>Month:<select id='monthSelect' onchange='monthSel()'>\n\
<option value='blank'></option>\n\
<option value='Jan'>Jan</option>\n\
<option value='Feb'>Feb</option>\n\
<option value='Mar'>Mar</option>\n\
<option value='Apr'>Apr</option>\n\
<option value='May'>May</option>\n\
<option value='Jun'>Jun</option>\n\
<option value='Jul'>Jul</option>\n\
<option value='Aug'>Aug</option>\n\
<option value='Sep'>Sep</option>\n\
<option value='Oct'>Oct</option>\n\
<option value='Nov'>Nov</option>\n\
<option value='Dec'>Dec</option>\n\
</select><br/><table style='border-collapse:collapse;text-align:center' id='cal'><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wen</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>";
    for(var i=0;i<firstWeekDay;i++){
      html+="<td></td>";
    }
    for(var j=1;j<monDays[tableMonth]+1;j++){
      if((j+firstWeekDay-1)%7===0){
          if(j===today_day&&tableMonth===today_month&&tableYear===today_year){
            html+="</tr><tr><td style='background-color:lightblue;'>"+j+"</td>";
          }else{
              html+='</tr><tr><td>'+j+'</td>';
          }
      }else{
          if(j===today_day&&tableMonth===today_month&&tableYear===today_year){
            html+="<td style='background-color:lightblue;'>"+j+"</td>";
          }else{
              html+="<td>"+j+"</td>";
          }
      }
    }
    html+='</tr></table>';
    $('#cal_div').html(html);
};

var monthSel = function(){
    var monSel=$('#monthSelect').val();
    tableMonth=months.indexOf(monSel);
    tableYear=$('#info').html().split(' ')[1];
    tableCreate();
};

var previousY = function(){
    tableMonth=months.indexOf($('#info').html().split(' ')[0]);   
    tableYear=parseInt($('#info').html().split(' ')[1])-1; 
    console.log(tableMonth);
   tableCreate();
};

var nextY = function(){
    tableMonth=months.indexOf($('#info').html().split(' ')[0]);
    tableYear=parseInt($('#info').html().split(' ')[1])+1; 
    tableCreate();
};

var setYear=function(){
    var start_year=today_year-100;
    var end_year=today_year+100;
    var html="<option value='blank'></option>";
    for(var i=start_year;i<end_year;i++){
        html +="<option value="+i+">"+i+"</option>";
    };
    return html;
};

var yearSel = function(){
    tableYear=$('#yearSelect').val();
    tableMonth=months.indexOf($('#info').html().split(' ')[0]);
    tableCreate();
};





