function fecthdata(range1,range2){
    var xhr=new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
    xhr.onload=function(){
        var data=JSON.parse(this.response);
        outer.innerHTML=""
        for(var i=range1;i<range2;i++){
            element(data[i])
        }
    }
    xhr.onerror=function(){
        console.log("Error",this.statusText);
    }
    xhr.send();
}



let outer=document.createElement('div')
outer.setAttribute("class","outer");
document.body.append(outer);


function element(range){
    let division=document.createElement('div');
    division.setAttribute('class','design')
    division.innerHTML=`<p><span class="bold">ID: </span>${range.id}</p>
    <p><span class="bold">Name:  </span>${range.name}</p> 
    <p><span class="bold">Email-ID: </span>${range.email}</p> `;
    outer.append(division);
}
let n;
function one(){
    fecthdata(0,10);
    n=1;
}
function two(){
    fecthdata(10,20)
    n=2;
}
function three(){
    fecthdata(20,30)
    n=3
}
function four(){
    fecthdata(30,40)
    n=4;
}
function five(){
    fecthdata(40,50)
    n=5;
}
function six(){
    fecthdata(50,60)
    n=6;
}
function seven(){
    fecthdata(60,70)
    n=7;
}
function eight(){
    fecthdata(70,80)
    n=8;
}
function nine(){
    fecthdata(80,90)
    n=9;
}
function ten(){
    fecthdata(90,100)
    n=10;
}
let dict={
    1:one,
    2:two,
    3:three,
    4:four,
    5:five,
    6:six,
    7:seven,
    8:eight,
    9:nine,
    10:ten
}
function previous(){
    if(n!==1){
        dict[n-1]()
    }
}
function next(){
    if(n!==10){
        dict[n+1]()
    }
}



let buttons=document.createElement('div')
buttons.setAttribute('class','pagination')
buttons.innerHTML=`
<button name="previous" class="margin1" onclick="previous()">Previous</button>
<button class="margin" onclick="one()">1</button>
<button class="margin" onclick="two()">2</button>
<button class="margin" onclick="three()">3</button>
<button class="margin" onclick="four()">4</button>
<button class="margin" onclick="five()">5</button>
<button class="margin" onclick="six()">6</button>
<button class="margin" onclick="seven()">7</button>
<button class="margin" onclick="eight()">8</button>
<button class="margin" onclick="nine()">9</button>
<button class="margin" onclick="ten()">10</button>
<button name="next" class="margin1" onclick="next()">Next</button>
`
document.body.append(buttons)
document.onload(one()); 