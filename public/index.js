 const socket = io();
      var liveNode = document.getElementById("live-view");
      const modelPlots = [
        {
          name: "---",
          avatar: "",
          userId: 0,
        },
      ];
      const maxPlotter = 15;
      let plotter = [];
      let index_replace = 0;

      socket.on("member", (data) => {
        if (data) {
          console.log("member-log", data);
          const customer = {
            avatar:
              data?.userDetails?.profilePictureUrls[2] ||
              data.profilePictureUrl ||
              "",
            name: data.nickname || "---",
          };
          let innerHTML = `
          <div class="avatar-user card">
            <div class="shadow"></div>
            <img
              src="${customer.avatar}"
            />
          </div>
          <div class="name-user typewriter content">
            <h1 class="name">${customer.name}</h1>
          </div>`;
          liveNode.innerHTML = innerHTML;
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