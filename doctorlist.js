//Global Variable
//function call
menuCreate();
doctorView();


function menuCreate() {
    fetch("http://localhost:3001/api/menu")
        .then(res => res.json())
        .then(data => {
            let menu = data.tag;
            for (const iterator of menu) {
                let html = <span>${iterator.icon} ${iterator.text}</span>
                $("#logo").after(html)
            }
            $("#phone").text(data.phone)
        })
        .catch(error => console.log(error))
}

function doctorView() {
    fetch("http://localhost:3001/api/doctorList")
        .then(res => res.json())
        .then(data => {
            for (const iterator of data.list) {
                let doctorList = `
           <div class="card">
           <div class="img">
               <img src="${iterator.img}">
           </div>
           <div class="detail">
               <p class="text">
                   <span class="value">${iterator.name}</span>
               </p>
               <p class="text">
                   <span class="value">${iterator.specialize}</span>
               </p>
               <p class="text">
                   <span class="value">${iterator.dutyTime}</span>
               </p>
           </div>
       </div>
           `;
                $(".list").append(doctorList);
            }
        })
        .catch(error => console.log(error))
}