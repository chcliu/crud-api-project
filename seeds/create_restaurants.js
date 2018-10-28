const items = [
  {
    name: "Kinnikushokudou (筋肉食堂)",
    area_id: 114, //Roppongi, Nogizaka, Nishi-Azabu
    category_id: 154, //"Natural food"
    budget: "￥1,000～￥1,999",
    rating: 3.51,
    address: "東京都 港区 六本木 7-8-5 1F",
    url: "https://tabelog.com/en/tokyo/A1307/A130701/13190115/"
  },
  {
    name: "SHAKE SHACK (シェイク シャック 東京国際フォーラム店)",
    area_id: 154, //"Yurakucho, Hibiya"
    category_id: 68, //"Burger"
    budget: "￥1,000～￥1,999",
    rating: 3.57,
    address: "東京都 千代田区 丸の内 3-5-1 東京国際フォーラム ホールC 1F",
    url: "https://tabelog.com/en/tokyo/A1301/A130102/13200310/"
  },
  {
    name: "Shinohara (銀座 しのはら)",
    area_id: 25, //"Ginza"
    category_id: 1, //"Kaiseki (Traditional Japanese)"
    budget: "￥20,000～￥29,999",
    rating: 4.86,
    address: "東京都 中央区 銀座 2-8-17 ハビウル銀座2 B1",
    url: "https://tabelog.com/en/tokyo/A1301/A130101/13200949/"
  },
  {
    name: "Okonomiyakijamon (お好み焼き じゃもん)",
    area_id: 128, //"Shinagawa"
    category_id: 40, //"Okonomiyaki"
    budget: "￥3,000～￥3,999",
    rating: 3.00,
    address: "東京都 港区 港南 2-2-5 3F",
    url: "https://tabelog.com/en/tokyo/A1314/A131403/13207356/"
  }
];


exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert(items);
    });
};


// const obj = {
//   name: "Okonomiyakijamon (お好み焼き じゃもん)",
//   area: "Shinagawa",
//   categories: "Okonomiyaki",
//   budget: "￥3,000～￥3,999",
//   rating: 3.00,
//   address: "東京都 港区 港南 2-2-5 3F",
//   url: "https://tabelog.com/en/tokyo/A1314/A131403/13207356/"
// }