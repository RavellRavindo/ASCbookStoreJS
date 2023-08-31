!async function(){let t=await fetch("dataContent.json"),n=await t.json(),e=document.getElementById("bookList");n.forEach(t=>{e.innerHTML=e.innerHTML+`<tr>
             <td>${t.title}</td>
             <td>${t.author}</td>
        </tr>
        `})}();//# sourceMappingURL=home.ac8ea209.js.map

//# sourceMappingURL=home.ac8ea209.js.map
