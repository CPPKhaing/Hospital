
//Global Variable
let roomViewCount = 0;

//function call
menuCreate();
roomView();


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

function roomView() {
    fetch("http://localhost:3001/api/roomView")
        .then(res => res.json())
        .then(data => {
            for (const iterator of data.rooms) {
                let status = "r_status ";
                if (iterator.status == 0) status += " activeRoom"
                if (iterator.status == 1) status += " lock"
                if (iterator.status == 2) status += " avaliable"

                let room = `
           <div class="d_room">
           <div class="${status}"></div>
           <p class="roomname">Room ${iterator.name}</p>
           </div>
           `;

                if ((roomViewCount + 1) % 5 == 0) {
                    room += "<hr>";
                }

                $("#rooms").append(room);
                roomViewCount++;
            }



        })
        .catch(error => console.log(error))
}