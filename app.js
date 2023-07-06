
var list=document.getElementById('list');

// function addTodo(){
//     var todoValue=document.getElementById('TodoVal')
//     var todoElement=document.createElement('li');
//     var todoText=document.createTextNode(todoValue.value);
//     todoElement.appendChild(todoText);
//     todoElement.className+='my-2 '
//     list.appendChild(todoElement);
//     todoValue.value='';

   
//     // delete Btn
// var delBtn=document.createElement('button');
// delBtn.innerHTML='Delete';
// delBtn.className +=' btn btn-outline-danger py-2 ms-5';
// delBtn.setAttribute('onclick','deleteBtn(this);')
// todoElement.appendChild(delBtn);


// // edit Btn 
// var editBtn=document.createElement('button');
//  editBtn.innerHTML='Edit';
//  editBtn.className +=' btn btn-outline-info py-2 ms-5';
//  editBtn.setAttribute('onclick','editBtn(this);')
//  todoElement.appendChild(editBtn);

// }
// function deleteBtn(del){
//     del.parentNode.remove()

// }
//  function editBtn(e){
//       var editVal=prompt('Enter New Value',e.parentNode.firstChild.nodeValue);
//       e.parentNode.firstChild.nodeValue=editVal;
//  }

//  function deleteAll(){
//     list.innerHTML='';
//  }

function addTodo(){
   var li=document.createElement('li');
   var row=document.createElement('div');
   row.className+=' row align-item-center my-2';
   li.appendChild(row);
   var col_1=document.createElement('div');
   col_1.className+=' col-4';
   var todoVal=document.getElementById('TodoVal');
   var todospan=document.createElement('span');
   todospan.className+= ' mt-3'
   var todoText=document.createTextNode(todoVal.value);
   todospan.appendChild(todoText);
   col_1.appendChild(todospan);
   row.appendChild(col_1);
   todoVal.value='';

   // delete Btn Column

   var col_2=document.createElement('div');
   col_2.className+=' col-3 text-right';
   row.appendChild(col_2);
   var delBtn=document.createElement('button');
   delBtn.setAttribute('onclick','deleteBtn(this)')
   delBtn.innerHTML='Delete';
   delBtn.className +=' btn btn-outline-info py-2 ms-5';
   col_2.appendChild(delBtn);



   // edit btn

   var col_3=document.createElement('div');
   col_3.className+=' col-2 text-right';
   row.appendChild(col_3);
   var editBtn=document.createElement('button');
   editBtn.innerHTML='Edit';
   editBtn.className +=' btn btn-outline-info py-2 ms-5';
   col_3.appendChild(editBtn);
   editBtn.setAttribute('onclick','editButton(this)')



   list.appendChild(li)
}

function deleteBtn(del){
    del.parentNode.parentNode.parentNode.remove();

}
 function editButton(e){
      var editVal=prompt('Enter Edit value',e.parentNode.parentNode.parentNode.firstChild.firstChild.firstChild.firstChild.nodeValue);
      e.parentNode.parentNode.parentNode.firstChild.firstChild.firstChild.firstChild.nodeValue=editVal;
 }

 function deleteAll(){
    list.innerHTML='';
 }