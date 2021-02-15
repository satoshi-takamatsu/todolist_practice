// window.addEventListener('load', function(){
//   const button1 = document.getElementById('button1');

//   button1.addEventListener('mouseover', function(){
//     document.getElementById('button1').style.background='blue';
//     document.getElementById('button1').style.color='white';
//   });
//   button1.addEventListener('mouseout', function(){
//     document.getElementById('button1').style.background='white';
//     document.getElementById('button1').style.color='black';
//   });
// });

// document.addEventListener('DOMContentLoaded', function(){
//   const TaskTrigger = document.getElementsByClassName('addTask-trigger')[0];
//   const TaskValue = document.getElementsByClassName('addTask-value')[0];
//   const TaskTarget = document.getElementsByClassName('addTask-target')[0];

//   let nextId = 0;
//   const addTask = (task,id) => {
//   const todos = [];

//     const tableItem = document.createElement('tr');
//     const TdButton = document.createElement('td');
//     const Button = document.createElement('button');
//     const backTdButton = document.createElement('td');
//     const backButton = document.createElement('button');
    
//     Button.innerText = '作業中';
//     backButton.innerText = '削除';
    
//     backButton.addEventListener('click', () => removeTask(backButton));
    
//     const idSpan = document.createElement('span');
//     idSpan.innerText = id;
//     const idSpanTd = document.createElement('td');
//     idSpanTd.append(idSpan);
    
//     const taskSpan = document.createElement('span');
//     const taskSpanTd = document.createElement('td');
//     taskSpan.innerText = task;
//     taskSpanTd.append(taskSpan);
    
//     TdButton.append(Button);
//     backTdButton.append(backButton);
    
//     tableItem.append(idSpanTd);
//     tableItem.append(taskSpanTd);
//     tableItem.append(TdButton);
//     tableItem.append(backTdButton);
    
//     TaskTarget.appendChild(tableItem);
//   };

  
//   TaskTrigger.addEventListener('click', event => {
//     const task = TaskValue.value;
//     addTask(task,nextId ++);
//     TaskValue.value =  '';
//   });
//   TaskTrigger.addEventListener('click', event => {
//     const task = TaskValue.value;
//     const status = idSpan.id;
//   });

//   todos.push(todo);
// });



  // document.querySelector('button').addEventListener('click', () => {
  //   const li = document.createElement('li'); 
  //   const text = document.querySelector('input');
  //   li.textContent = text.value;
  //   document.querySelector('ul').appendChild(li);

  //   text.value = '';
  //   text.focus();
  // });
  document.querySelector('button').addEventListener('click', () => {
    const li = document.createElement('li'); 
    const text = document.getElementById('todoText');
    li.textContent = text.value;
    document.querySelector('ul').appendChild(li);

    text.value = '';
    text.focus();
  });