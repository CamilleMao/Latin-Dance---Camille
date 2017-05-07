/*
Author:Jiawei Mao
Date:03/23/2017
*/

	function validateForm() {
    var a = document.forms["survey"]["custname"].value;
    var b = document.forms["survey"]["phone301"].value;
    var c = document.forms["survey"]["phone302"].value;
    var d = document.forms["survey"]["phone4"].value;
    var e = document.forms["survey"]["email"].value;
    var f = document.forms["survey"]["begindate"].value;
    var g = document.forms["survey"]["classtype"].value;
    
    if (a == "") {alert("Hey, your name must be filled out."); document.getElementById("custname").focus();}
    else if (b==""){alert("Oops, please input your complete phone number.");document.getElementById("phone301").focus(); }
    else if (c==""){alert("Oops, please input your complete phone number.");document.getElementById("phone302").focus(); }
    else if (d==""){alert("Oops, please input your complete phone number.");document.getElementById("phone4").focus();}
    else if (e==""){alert("Oops, please input your email.");document.getElementById("email").focus();}
    else if (f==""){alert("Hey, please input your begindate.");document.getElementById("begindate").focus();}
    else if (f==""){alert("Hey, please let us know the class you want to join.");document.getElementById("classtype").focus();}
    else {redirect()}
    }
    
    
    
    
    function redirect(){
    window.location.replace("6.Thank you Page.html");
    }