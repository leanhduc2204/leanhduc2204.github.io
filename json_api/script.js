var jSONContainer = document.getElementById("jSON-info");
var Request = new XMLHttpRequest();
Request.open('GET','https://jsonplaceholder.typicode.com/posts');
Request.onload = function(){
    var Data = JSON.parse(Request.reponseText);
    renderHTML(Data);
}

function renderHTML(data){
    var htmlString = "";
    for(i=0;i<data.length;i++){
        htmlString += "<p>"+"userID:"+data[i].userId+"<br>"
                    + "id:"+data[i].id+"<br>"
                    + "title:"+data[i].title+"<br>"
                    + "body:"+data[i].title+"<br>"+"</p>";
    }
    jSONContainer.insertAdjacentHTML('beforeend',htmlString);
}