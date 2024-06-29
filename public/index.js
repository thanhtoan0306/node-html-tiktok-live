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
    name: "Bách khoa",
    code: "BKA",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOq8y1ujU7NbHbUitI9x8awQtGTYeibk1JLw&s",
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
    avatar:
      "https://inkythuatso.com/uploads/images/2021/12/logo-dai-hoc-luat-tphcm-inkythuatso-01-21-10-13-41.jpg",
    votes: 0,
  },

  {
    name: "Khoa học Tự nhiên",
    code: "US",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Logo-dai-hoc-khoa-hoc-tu-nhien.png",
    votes: 0,
  },
  {
    name: "Công nghệ Thông tin",
    code: "UIT",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/0/00/Logo_UIT_updated.svg",
    votes: 0,
  },
  {
    name: "Kinh tế Luật",
    code: "UEL",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/8/86/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Kinh_t%E1%BA%BF_-_Lu%E1%BA%ADt.png",
    votes: 0,
  },
  {
    name: "Quốc tế",
    code: "IU",
    avatar:
      "https://hcmiu.edu.vn/wp-content/uploads/2017/08/logo-vector-IU-01.png",
    votes: 0,
  },
  {
    name: "Sư phạm",
    code: "SPS",
    avatar:
      "https://upload.wikimedia.org/wikipedia/vi/9/9e/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_S%C6%B0_ph%E1%BA%A1m_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh.svg",
    votes: 0,
  },
  {
    name: "Ngoại thương Cơ sở 2",
    code: "FTU",
    avatar: "https://upload.wikimedia.org/wikipedia/vi/8/8e/FTU_logo_2020.png",
    votes: 0,
  },
  {
    name: "Y Dược",
    code: "YDS",
    avatar:
      "https://upload.wikimedia.org/wikipedia/vi/thumb/6/64/Logo_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Y_D%C6%B0%E1%BB%A3c_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh.svg/2048px-Logo_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Y_D%C6%B0%E1%BB%A3c_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh.svg.png",
    votes: 0,
  },
  {
    name: "Nông Lâm",
    code: "NLU",
    avatar:
      "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e1/Logo_HCMUAF.svg/480px-Logo_HCMUAF.svg.png",
    votes: 0,
  },
  {
    name: "Ngân hàng",
    code: "HUB",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/New-hub-logo.jpg/480px-New-hub-logo.jpg",
    votes: 0,
  },
  {
    name: "Giao thông Vận tải TP.HCM",
    code: "UTH",
    avatar:
      "https://cdn.haitrieu.com/wp-content/uploads/2022/02/Logo-DH-Giao-Thong-Van-Tai-TPHCM-HCMUT.png",
    votes: 0,
  },
  {
    name: "Tôn Đức Thắng",
    code: "TDT",
    avatar:
      "https://upload.wikimedia.org/wikipedia/vi/thumb/1/1b/T%C4%90T_logo.png/480px-T%C4%90T_logo.png",
    votes: 0,
  },
  {
    name: "HUTECH",
    code: "HUTECH",
    avatar:
      "https://upload.wikimedia.org/wikipedia/vi/8/81/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_C%C3%B4ng_ngh%E1%BB%87_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh.png",
    votes: 0,
  },
  {
    name: "Công nghiệp",
    code: "IUH",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsqZtPyVKf9ZxWnrDIYkDNTl7hdiGR-yV4cHjuRy0O-L0catvyE1Y_tiliItF0UY_6cU&usqp=CAU",
    votes: 0,
  },
  {
    name: "Đại học Mở TP.HCM",
    code: "OU",
    avatar:
      "https://upload.wikimedia.org/wikipedia/vi/b/b2/Logo_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_M%E1%BB%9F_TPHCM.png",
    votes: 0,
  },
  {
    name: " Văn Lang",
    code: "VLU",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwb-2FG_reF42BgZN6vvm-aIq5u0s9yyE2A&s",
    votes: 0,
  },
  {
    name: "RMIT",
    code: "RMIT",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/RMIT_University_Logo.svg/480px-RMIT_University_Logo.svg.png",
    votes: 0,
  },
  {
    name: "Kiến trúc",
    code: "UAH",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Logo_of_University_of_Architecture_Ho_Chi_Minh_City.png",
    votes: 0,
  },
  {
    name: "KOHOC",
    code: "KOHOC",
    avatar:
      "https://www.reynolds.k12.or.us/sites/default/files/styles/gallery500/public/imageattachments/woodland/page/4598/no_school.png?itok=wYmMKc7n",
    votes: 0,
  },
  {
    name: "TIKTOK",
    code: "TIKTOK",
    avatar:
      "https://sf-static.tiktokcdn.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png",
    votes: 0,
  },
];
let listRank = SCHOOL_LIST;
let totalVotes = 1;

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

      // Remove all child elements
      while (top4Node.firstChild) {
        top4Node.removeChild(top4Node.firstChild);
      }
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
      // Remove all child elements
      while (top13Node.firstChild) {
        top13Node.removeChild(top13Node.firstChild);
      }
      listRank.forEach((schoolItem, index) => {
        if (index > 12 && index < 23) {
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
