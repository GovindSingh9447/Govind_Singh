//alert("test");
function addNewWEField(){
   // console.log("Adding new Field");

   let newNode =document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weFild");
   newNode.classList.add("mt-2");
   newNode.setAttribute('placeholder', 'Enter here');
   newNode.setAttribute("rows",3);

   let weOb=document.getElementById("we");
   let weAddButtonOb =document.getElementById("weAddButton");

   weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqFiled");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let aqob=document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqob.insertBefore(newNode,aqAddButtonOb);
}


function generateresume(){

    let nameField= document.getElementById("nameField").value;
    let nameT=document.getElementById("nameT");
    nameT.innerHTML = nameField;

    //direct
    
    document.getElementById("name2T").innerHTML=nameField;

    document.getElementById("numbT").innerHTML = document.getElementById("contactField").value;


    document.getElementById("addT").innerHTML = document.getElementById("addressField").value;



    document.getElementById("emT").innerHTML = document.getElementById("emField").value;
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("gitT").innerHTML = document.getElementById("gitField").value;
    document.getElementById("linkT").innerHTML = document.getElementById("lkiField").value;

    document.getElementById("objT").innerHTML = document.getElementById("objField").value;


    //we

    let wes=document.getElementsByClassName("wefield");
    let str=" ";

    for(let e of wes)
    {
        str=str +`<li> ${e.value}</li >`

    }

    document.getElementById('weT').innerHTML=str;


    //aq

    let aqs = document.getElementsByClassName('aqfield');
    let str1=" ";

    for(let e of aqs){
        str1=str1 + `<li> ${e.value}</li>`;
    }

    document.getElementById('aqT').innerHTML=str1;
   
   
    //set img to template

    reader.onloadend = function()
    {
        document.getElementById("imgTemplate").src=reader.result;
    }

    

    document.getElementById('resume-form').style.display="none";
    document.getElementById("resume-tamplate").style.display="block";
}

    document.getElementById('resume-form').style.display="none";
    document.getElementById("resume-tamplate").style.display="block";
}


function printresume(){
    window.print();
    
}

