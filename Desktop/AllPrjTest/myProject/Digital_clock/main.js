
      const box=document.querySelector(".box");
      const months = [
                      "January",
                      "Febuary",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December"
                    ];

const days = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ];

      function run(){
          let date=new Date();

          let hh=date.getHours();
          let mm=date.getMinutes();
          let ss=date.getSeconds();

          let dd=date.getDate();
          let mon=date.getMonth();
          let yy=date.getFullYear();
          let week=date.getDay();

          if(hh>12) hh-=12;

          if(hh<10) hh="0"+hh;

          if(mm<10) mm="0"+mm;

          if(ss<10) ss="0"+ss;

        let da=`<span>${days[week]},${dd},${months[mon]},${yy}</span>`;

        box.innerHTML=`${hh}:${mm}:${ss} <br> ${da}`;
      }
      setInterval(run,1000);
