var Restrating = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
]

let unique = []

for (i=0 ; i<Restrating.length ; i++){
    if(unique.indexOf(Restrating[i].restaurant) === -1){
        unique.push(Restrating[i].restaurant)
    }
    
}

console.log(unique)

 let distinct = [ 'KFC', 'Burger King', 'Domino', 'Subway', 'Pizza Hut' ]
 let avgRating = [];
 let count = 0;
 let outRating = 0;

 for (i=0 ; i<distinct.length ; i++){
    for ( j=0 ; j<Restrating.length ; j++){
        if(distinct[i] == Restrating[j].restaurant){
            outRating += Restrating[j].rating;
            count +=1
        }
    }

    let output = Number(outRating) / Number(count);
    let myObj = {}
    myObj.restaurant = distinct[i];
    myObj.averageRating = output
    avgRating.push(myObj);
    count = 0;
    outRating = 0;
 }

 console.log(avgRating)

const Average = [
    { restaurant: 'KFC', averageRating: 4 },
    { restaurant: 'Burger King', averageRating: 4 },
    { restaurant: 'Domino', averageRating: 1.5 },
    { restaurant: 'Subway', averageRating: 3.5 },
    { restaurant: 'Pizza Hut', averageRating: 5 }
  ]

  Average.filter((data)=>{
    return data.averageRating >= 4;
  })

  