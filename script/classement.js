let table = document.querySelector('.table');


let users = JSON.parse(localStorage.getItem('users'));

// Tri du tableau par ordre décroissant en fonction du nombre de points
users.sort((a, b) => b.point - a.point); 

users.forEach((element,index) => {
    table.innerHTML += `
    <tr>
    <td><img src="../images/Mobile login-bro.png" alt="" /></td>
 <td colspan="4">${element.name}</td>
 <td class="niv" colspan="">${element.level}</td>
 <td class="poi" colspan="">${element.point}</td>
 <td class="ran" colspan="4">#${index + 1}</td>
  </tr>` 
});