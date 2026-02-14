const items = [
  { 
 text:  `【 L 】FP2YSMZP\n【2L】97BCL5C7 \nイラスト：アンジュ\n <a href="https://x.com/an_ge_main21" target="_blank">(@An_ge_Main21) </a>`,
    image: "https://cdn.discordapp.com/attachments/942750624519442442/1472035576143151334/IMG_7512.jpg?ex=69911b76&is=698fc9f6&hm=61a64b7b2d1d8dd4b795aa205a1da4435920764f73b5899c966ecda0236cec7e&",
    weight: 10 
  },
  { 
    text:  `【 L 】QMQ7Q3UB\n【2L】ZPM7UJUK \nイラスト：たらざ\n <a href="https://x.com/taraza_kansoku" target="_blank">(@taraza_kansoku) </a>`,
    image: "https://cdn.discordapp.com/attachments/942750624519442442/1472035575862399086/IMG_7513.jpg?ex=69911b76&is=698fc9f6&hm=af0c2df65106a2d4d99ba3fa83c7429544baef807a18312f6394da03ccedfa5e&",
    weight: 10 
  },
  { 
    text:  `【 L 】MEC4NH75\n【2L】RGSZ5ZX4\nイラスト：Kouhi-\n <a href="https://x.com/kouhicoffee" target="_blank">(@KouhiCoffee) </a>`,
    image: "https://cdn.discordapp.com/attachments/942750624519442442/1472035575547564143/IMG_7514.jpg?ex=69911b76&is=698fc9f6&hm=7d9bd515b17d781954f6bf9a50496b87112a7871f7af5f27245dfeb7d851070b&",
    weight: 10 
  },

  { 
     text:  `【 L 】G6BQGFAU\n【2L】ALYL9MPK\nイラスト：たらざ\n <a href="https://x.com/taraza_kansoku" target="_blank">(@taraza_kansoku) </a>`,
    image: "https://cdn.discordapp.com/attachments/942750624519442442/1472035575174267052/IMG_7515.jpg?ex=69911b76&is=698fc9f6&hm=6e889dfcdd74e22e5bfb1c593ac4fbed91a9cb9d7286b7b1b32f74b22bdf632f&",
    weight: 10 
  },


  { 
     text:  `【 L 】QQEHN99P\n【2L】T3UGP46B\nイラスト：たらざ\n <a href="https://x.com/taraza_kansoku" target="_blank">(@taraza_kansoku) </a>`,
    image: "https://cdn.discordapp.com/attachments/942750624519442442/1472035574872408115/IMG_7516.jpg?ex=69911b76&is=698fc9f6&hm=174fc16a372c98b1cc29e9012934fdd0c1518d281d44f41dc5e0545451afba3f&",
    weight: 10 
  },
 
{ 
     text:  `【 L 】FRB8X8JX\n【2L】MAFESXF6\nイラスト：ちか\n <a href="https://x.com/tika0811_" target="_blank">(@tika0811_) </a>`,
    image: "https://cdn.discordapp.com/attachments/942750624519442442/1472035574536867900/IMG_7517.jpg?ex=69911b76&is=698fc9f6&hm=659615f48e079899421fa5988fb599e762c4bda1eb83ece90281b95dbd8386bc&",
    weight: 10 
  },


  { 
     text:  `【 L 】2T24KMSM\n【2L】FS9AJJNE\nイラスト：Kouhi-\n <a href="https://x.com/kouhicoffee" target="_blank">(@KouhiCoffee) </a>`,
    image: "https://cdn.discordapp.com/attachments/942750624519442442/1472035574234742884/IMG_7518.jpg?ex=69911b75&is=698fc9f5&hm=03c40eb4467748b6509f6940ea27fcb4cc670214ab5a3fcfb71270af993e73bf&",
    weight: 10 
  },

  { 
     text:  `【 L 】8BAZKBBS \n【2L】2RX55KBC\nイラスト：ほしかげほしか\n <a href="https://x.com/star_dust_2615" target="_blank">(@star_dust_2615) </a>`,
    image: "https://cdn.discordapp.com/attachments/942750624519442442/1472035573920436335/IMG_7519.jpg?ex=69911b75&is=698fc9f5&hm=3c7a955b1f8b92ac93643d5d0e79e1052bb146529a65ffa950327dd6b8e0a80b&",
    weight: 10 
  },

    { 
     text:  `【 L 】4MBJ3PPY \n【2L】8SDFE3LY\nイラスト：ほしかげほしか\n <a href="https://x.com/star_dust_2615" target="_blank">(@star_dust_2615) </a>`,
    image: "https://cdn.discordapp.com/attachments/942750624519442442/1472035616400216356/IMG_7520.jpg?ex=69911b80&is=698fca00&hm=4e5266e6e0614002c7427650fe5e12fe972d4a8ddbd553c3b8a6f5b92405dddb&",
    weight: 10 
  },
];

document.getElementById("btn").onclick = () => {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let rand = Math.random() * totalWeight;

  for (const item of items) {
    if (rand < item.weight) {
      document.getElementById("result").innerHTML = `
        <div class="result-text">${item.text}</div>
        <img src="${item.image}">
      `;
      return;
    }
    rand -= item.weight;
  }
};

const btn = document.getElementById("btn");

btn.addEventListener("mousedown", () => {
  btn.classList.add("pressed");
});

btn.addEventListener("mouseup", () => {
  btn.classList.remove("pressed");
});

btn.addEventListener("mouseleave", () => {
  btn.classList.remove("pressed");
});

btn.addEventListener("touchstart", () => {
  btn.classList.add("pressed");
});

btn.addEventListener("touchend", () => {
  btn.classList.remove("pressed");
});

btn.addEventListener("touchcancel", () => {
  btn.classList.remove("pressed");
});