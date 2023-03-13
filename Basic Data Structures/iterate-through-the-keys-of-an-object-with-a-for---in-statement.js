const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: true
  }
}

function countOnline(usersObj) {
  // Only change code below this line

 var onlineMember = 0;
  for (let user in usersObj) {
    if (usersObj[user].online) {
      onlineMember++;
    }
  }
  return onlineMember;


  // Only change code above this line
}

console.log(countOnline(users));