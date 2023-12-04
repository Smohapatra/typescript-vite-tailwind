export const fetchMovieData = async () => {
    const req = await fetch('https://swapi.dev/api/films/2/');
    const res = req.json();
    return res;
}

export const fetchCharacters = async (characterUrl : string) => {
    const req = await fetch(characterUrl);
    const res = await req.json();
    return res;
}

export const addressApiService = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve([
              {
                  "id": 1,
                  "address": "339 Macpherson Lane",
                  "pinCode": "768 11",
                  "customerEmail": "lsallter0@hubpages.com",
                  "contact": "191-405-1109"
              },
              {
                  "id": 2,
                  "address": "7268 Artisan Alley",
                  "pinCode": "",
                  "customerEmail": "akillbey1@europa.eu",
                  "contact": "123-774-0910"
              },
              {
                  "id": 3,
                  "address": "618 Vera Center",
                  "pinCode": 25508,
                  "customerEmail": "sgreenin2@fastcompany.com",
                  "contact": "373-145-5025"
              },
              {
                  "id": 4,
                  "address": "09494 Tennessee Circle",
                  "pinCode": "",
                  "customerEmail": "atrippick3@newyorker.com",
                  "contact": "830-640-2733"
              },
              {
                  "id": 5,
                  "address": "23 Marquette Pass",
                  "pinCode": "98600-000",
                  "customerEmail": "tsywell4@java.com",
                  "contact": "908-558-1070"
              },
              {
                  "id": 6,
                  "address": "66590 Eastwood Circle",
                  "pinCode": "",
                  "customerEmail": "llyptratt5@illinois.edu",
                  "contact": "445-628-4676"
              },
              {
                  "id": 7,
                  "address": "1275 Fulton Crossing",
                  "pinCode": 24400,
                  "customerEmail": "ebyrne6@dell.com",
                  "contact": "164-756-5434"
              },
              {
                  "id": 8,
                  "address": "64 Sullivan Trail",
                  "pinCode": "",
                  "customerEmail": "dgilbride7@ed.gov",
                  "contact": "706-667-6734"
              },
              {
                  "id": 9,
                  "address": "10 Judy Drive",
                  "pinCode": 412545,
                  "customerEmail": "sweekly8@usatoday.com",
                  "contact": "105-875-7448"
              },
              {
                  "id": 10,
                  "address": "44 Mcbride Hill",
                  "pinCode": "4805-005",
                  "customerEmail": "pkither9@webmd.com",
                  "contact": "884-448-8680"
              },
              {
                  "id": 11,
                  "address": "0 Lyons Hill",
                  "pinCode": "",
                  "customerEmail": "crebanksa@umich.edu",
                  "contact": "781-142-8616"
              },
              {
                  "id": 12,
                  "address": "10 Farwell Center",
                  "pinCode": "",
                  "customerEmail": "parnaob@people.com.cn",
                  "contact": "272-292-3897"
              },
              {
                  "id": 13,
                  "address": "85 Butternut Crossing",
                  "pinCode": 2431,
                  "customerEmail": "fblankleyc@state.tx.us",
                  "contact": "531-647-2172"
              },
              {
                  "id": 14,
                  "address": "7 Bunting Parkway",
                  "pinCode": 12006,
                  "customerEmail": "rmcgrathd@redcross.org",
                  "contact": "180-184-4019"
              },
              {
                  "id": 15,
                  "address": "6 Melvin Way",
                  "pinCode": "",
                  "customerEmail": "eclutherame@china.com.cn",
                  "contact": "996-107-5565"
              },
              {
                  "id": 16,
                  "address": "277 Twin Pines Pass",
                  "pinCode": 396458,
                  "customerEmail": "abatef@photobucket.com",
                  "contact": "685-319-9251"
              },
              {
                  "id": 17,
                  "address": "83921 Mariners Cove Place",
                  "pinCode": 625504,
                  "customerEmail": "harmatageg@behance.net",
                  "contact": "746-684-6115"
              },
              {
                  "id": 18,
                  "address": "8 Moulton Parkway",
                  "pinCode": "",
                  "customerEmail": "sblivenh@webmd.com",
                  "contact": "413-481-5962"
              },
              {
                  "id": 19,
                  "address": "87490 Melby Terrace",
                  "pinCode": 59762,
                  "customerEmail": "jcopperi@virginia.edu",
                  "contact": "793-871-7819"
              },
              {
                  "id": 20,
                  "address": "1 Colorado Hill",
                  "pinCode": "77370-000",
                  "customerEmail": "amaclleesej@arstechnica.com",
                  "contact": "619-729-4183"
              }]);
      }, 1000)
  })
}