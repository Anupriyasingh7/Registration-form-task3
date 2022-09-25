// let submit=document.querySelector(".submit");

// submit.addEventListener('click',()=>{

//     var output=document.querySelector(".output");
//     console.log(output);
//     let imageurl=document.querySelector("#img").value;
//     var generatedurl=`https://drive.google.com/uc?export=view&id=${imageurl}`;

//     const data={
//         name: document.getElementById("name").value,
//         img: generatedurl,
//         email: document.getElementById("email").value,
//         website: document.getElementById("website").value,
//         imglink: document.getElementById("imagelink").value,
//         gender: document.getElementById("gender").value,
//         skills: document.getElementById("skills").value
//     };
//     console.log(data);

//     let newlist=document.createElement('div');
//     newlist.classList.add('addData');
  
//     console.log(newlist);
//     output.appendChild(newlist);
//     let input=document.querySelectorAll('input');
//     input.forEach(input => {
//         input.value = '';
//       });

// })