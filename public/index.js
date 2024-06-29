const socket = io();
const SCHOOL_LIST = [
  {
    name: "Sư phạm Kỹ thuật",
    code: "UTE",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_H%E1%BB%8Dc_S%C6%B0_Ph%E1%BA%A1m_K%E1%BB%B9_Thu%E1%BA%ADt_TP_H%E1%BB%93_Ch%C3%AD_Minh.png",
    votes: 0,
  },
  {
    name: "Khoa học Xã hội và Nhân văn",
    code: "USSH",
    avatar:
      "https://upload.wikimedia.org/wikipedia/vi/4/49/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Khoa_h%E1%BB%8Dc_X%C3%A3_h%E1%BB%99i_v%C3%A0_Nh%C3%A2n_v%C4%83n%2C_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Qu%E1%BB%91c_gia_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh.svg",
    votes: 0,
  },
  {
    name: "Luật",
    code: "UL",
    avatar: "",
    votes: 0,
  },

  {
    name: "Bách khoa",
    code: "BKA",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOq8y1ujU7NbHbUitI9x8awQtGTYeibk1JLw&s",
    votes: 0,
  },
  {
    name: "Khoa học Tự nhiên",
    code: "US",
    avatar: "",
    votes: 0,
  },
  {
    name: "Công nghệ Thông tin",
    code: "UIT",
    avatar: "",
    votes: 0,
  },
  {
    name: "Kinh tế Luật",
    code: "UEL",
    avatar: "",
    votes: 0,
  },
  {
    name: "Quốc tế",
    code: "IU",
    avatar: "",
    votes: 0,
  },
  {
    name: "Sư phạm",
    code: "SPS",
    avatar: "",
    votes: 0,
  },
  {
    name: "Ngoại thương Cơ sở 2",
    code: "FTU",
    avatar: "",
    votes: 0,
  },
  {
    name: "Y Dược",
    code: "YDS",
    avatar: "",
    votes: 0,
  },
  {
    name: "Unknown",
    code: "DDD",
    avatar: "",
    votes: 0,
  },
  {
    name: "Unknown",
    code: "DDD",
    avatar: "",
    votes: 0,
  },
  {
    name: "Unknown",
    code: "DDD",
    avatar: "",
    votes: 0,
  },
  {
    name: "Unknown",
    code: "DDD",
    avatar: "",
    votes: 0,
  },
  {
    name: "Unknown",
    code: "DDD",
    avatar: "",
    votes: 0,
  },
  {
    name: "Unknown",
    code: "DDD",
    avatar: "",
    votes: 0,
  },
  {
    name: "Unknown",
    code: "DDD",
    avatar: "",
    votes: 0,
  },
  {
    name: "Unknown",
    code: "DDD",
    avatar: "",
    votes: 0,
  },
  {
    name: "Unknown",
    code: "DDD",
    avatar: "",
    votes: 0,
  },
  {
    name: "Unknown",
    code: "DDD",
    avatar: "",
    votes: 0,
  },
  {
    name: "Unknown",
    code: "DDD",
    avatar: "",
    votes: 0,
  },
];
let listRank = SCHOOL_LIST;
let totalVotes = 1;
// var liveNode = document.getElementById("live-view");
// const modelPlots = [
//   {
//     name: "---",
//     avatar: "",
//     userId: 0,
//   },
// ];
// const maxPlotter = 15;
// let plotter = [];
// let index_replace = 0;

// socket.on("member", (data) => {
//   if (data) {
//     console.log("member-log", data);
//     const customer = {
//       avatar:
//         data?.userDetails?.profilePictureUrls[2] ||
//         data.profilePictureUrl ||
//         "",
//       name: data.nickname || "---",
//     };
//     let innerHTML = `
//     <div class="avatar-user card">
//       <div class="shadow"></div>
//       <img
//         src="${customer.avatar}"
//       />
//     </div>
//     <div class="name-user typewriter content">
//       <h1 class="name">${customer.name}</h1>
//     </div>`;
//     liveNode.innerHTML = innerHTML;
//   }
// });

socket.on("chat", (data) => {
  if (data) {
    console.log("chat", data);
    const newComment = data.comment;
    console.log("newComment", newComment);
    const matchingSchool = listRank.find(
      (school) =>
        String(school.code).toLocaleLowerCase() ===
        String(data.comment).toLocaleLowerCase()
    );
    if (matchingSchool) {
      // Increase votes by 1 for the matched school
      matchingSchool.votes++;
      listRank.sort((a, b) => b.votes - a.votes);
      // Calculate total votes using reduce
      totalVotes = listRank.reduce((accumulator, currentSchool) => {
        return accumulator + currentSchool.votes;
      }, 0);
      console.log(listRank);
      var top1Node = document.getElementById("top1");
      let innerHTMLTop1 = `            
      <div class="top1 unit-uni">
              <div>
                <div class="avatar-uni">
                  <img
                    width="auto"
                    height="180px"
                    class="img-uni"
                    src="${listRank[0].avatar}"
                  />
                </div>
              </div>
              <div class="code-uni">${listRank[0].votes}</div>
              <div style="height: ${
                (listRank[0].votes / totalVotes) * 400
              }px" class="column-rank">
                <div class="e-card playing">
                  <div class="wave"></div>
                  <div class="wave"></div>
                  <div class="wave"></div>
                </div>
              </div>
              <div class="code-uni">Top 1 - ${listRank[0].code}</div>
            </div>`;
      top1Node.innerHTML = innerHTMLTop1;
      var top2Node = document.getElementById("top2");
      let innerHTMLTop2 = `
                        <div class="top2 unit-uni">
              <div>
                <div class="avatar-uni">
                  <img
                    width="auto"
                    height="180px"
                    class="img-uni"
                    src="${listRank[1].avatar}"
                  />
                </div>
              </div>
              <div class="code-uni">${listRank[1].votes}</div>
              <div style="height: ${
                (listRank[1].votes / totalVotes) * 400
              }px" class="column-rank"> </div>
              <div class="code-uni">Top 2 - ${listRank[1].code}</div>
            </div>     
      `;
      top2Node.innerHTML = innerHTMLTop2;
      var top3Node = document.getElementById("top3");
      let innerHTMLTop3 = `
                        <div class="top3 unit-uni">
              <div>
                <div class="avatar-uni">
                  <img
                    width="auto"
                    height="180px"
                    class="img-uni"
                    src="${listRank[2].avatar}"
                  />
                </div>
              </div>
              <div class="code-uni">${listRank[2].votes}</div>
              <div style="height: ${
                (listRank[2].votes / totalVotes) * 400
              }px" class="column-rank"> </div>
              <div class="code-uni">Top 3 - ${listRank[2].code}</div>
            </div>     
      `;
      top3Node.innerHTML = innerHTMLTop3;
      var top4Node = document.getElementById("top4");
      listRank.forEach((schoolItem, index) => {
        if (index > 2 && index < 13) {
          const schoolItemNode = document.createElement("div");
          schoolItemNode.className = "user";
          const innerHTMLSchool = `
         <div class="image">
                      <img
                        src="${schoolItem.avatar}"
                      />
                    </div>
                    <div class="user__content">
                      <div class="text">
                        <div>${schoolItem.code} : ${
            schoolItem.votes
          } votes</div>
                      </div>
                      <button class="follow">Top ${index + 1}</button>
                    </div>
        `;
          schoolItemNode.innerHTML = innerHTMLSchool;
          top4Node.appendChild(schoolItemNode);
        }
      });
      var top13Node = document.getElementById("top13");
      listRank.forEach((schoolItem, index) => {
        if (index > 13 && index < 21) {
          const schoolItemNode = document.createElement("div");
          schoolItemNode.className = "user";
          const innerHTMLSchool = `
         <div class="image">
                      <img
                        src="${schoolItem.avatar}"
                      />
                    </div>
                    <div class="user__content">
                      <div class="text">
                        <div>${schoolItem.code} : ${
            schoolItem.votes
          } votes</div>
                      </div>
                      <button class="follow">Top ${index + 1}</button>
                    </div>
        `;
          schoolItemNode.innerHTML = innerHTMLSchool;
          top13Node.appendChild(schoolItemNode);
        }
      });
    }
  }
});

const submitData = () => {
  // Retrieve the input value
  var inputData = document.getElementById("myInput").value;

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputData: inputData }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

const disconnectTitktok = () => {
  fetch("/stop", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
