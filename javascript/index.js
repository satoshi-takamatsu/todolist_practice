window.addEventListener('load', function(){
  const button1 = document.getElementById('button1');

  button1.addEventListener('mouseover', function(){
    document.getElementById('button1').style.background='blue';
    document.getElementById('button1').style.color='white';
  });
  button1.addEventListener('mouseout', function(){
    document.getElementById('button1').style.background='white';
    document.getElementById('button1').style.color='black';
  });
});

document.addEventListener('DOMContentLoaded', function(){
  const addTaskTrigger = document.getElementsByClassName('addTask-trigger')[0];
  const addTaskValue = document.getElementsByClassName('addTask-value')[0];
  const addTaskTarget = document.getElementsByClassName('addTask-target')[0];

  let nextId = 0;
  const addTask = (task,id) => {
    
    const tableItem = document.createElement('tr');
    const addButtonTd = document.createElement('td');
    const addButton = document.createElement('button');
    const removeButtonTd = document.createElement('td');
    const removeButton = document.createElement('button');
    
    addButton.innerText = '作業中';
    removeButton.innerText = '削除';
    
    removeButton.addEventListener('click', () => removeTask(removeButton));
    
    const idSpan = document.createElement('span');
    idSpan.innerText = id;
    const idSpanTd = document.createElement('td');
    idSpanTd.append(idSpan);
    
    const taskSpan = document.createElement('span');
    const taskSpanTd = document.createElement('td');
    taskSpan.innerText = task;
    taskSpanTd.append(taskSpan);
    
    addButtonTd.append(addButton);
    removeButtonTd.append(removeButton);
    
    tableItem.append(idSpanTd);
    tableItem.append(taskSpanTd);
    tableItem.append(addButtonTd);
    tableItem.append(removeButtonTd);
    
    addTaskTarget.appendChild(tableItem);
  };
  
  addTaskTrigger.addEventListener('click', event => {
    const task = addTaskValue.value;
    addTask(task,nextId ++);
    addTaskValue.value =  '';
  });
});