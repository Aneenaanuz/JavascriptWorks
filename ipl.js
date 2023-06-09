var point_table=[
    {team:"GT",matches:14,won:10,loss:4,nrr:0.809,pts:20,lastFive:["w","w","l","w","w"]},
    {team:"csk",matches:14,won:8,loss:5,nrr:0.652,pts:17,lastFive:["w","w","l","w","l"]},
    {team:"srh",matches:14,won:4,loss:10,nrr:-0.590,pts:8,lastFive:["l","l","l","l","w"]},
    {team:"dc",matches:14,won:5,loss:9,nrr:-0.80,pts:10,lastFive:["l","w","l","l","w"]},
    {team:"mi",matches:14,won:8,loss:6,nrr:-0.44,pts:16,lastFive:["w","l","w","w","l"]},
    {team:"rcb",matches:14,won:7,loss:7,nrr:+1.39,pts:14,lastFive:["l","w","w","l","l"]},
]

// // 1) print all team names

// var team_names=point_table.map(t=>t.team)
// //console.log(team_names);

// // 2)sort teams with respect to points(pts)

// point_table.sort((t1,t2)=>t2.pts-t1.pts)
// console.log(point_table);

// // 3)print teams with +ve nrr
// var pos_nrr=point_table.filter(t=>t.nrr>0).map(t=>t.team)
// console.log(pos_nrr);

// // 4)qualifier teams

// var srt=point_table.sort((t1,t2)=>t2.pts-t1.pts).slice(0,4).map(t=>t.team)
// console.log(srt);


// // 5)team names with atleast 5 won

// var atleast_five_won=point_table.filter(t=>t.won>=5).map(t=>t.team)
// console.log(atleast_five_won);

// 6)team with maximum points
var first_rank=point_table.reduce((t1,t2)=>t1.pts>t2.pts?t1:t2).team
console.log(first_rank);

// 7)team's which have won the last match
var last_won=point_table.filter(t=>t.lastFive.slice(0,1)=='w').map(t=>t.team)
console.log(last_won);

//some()
// 8)kt is playing 2K23 ipl?
var is_playing=point_table.some(t=>t.team == "kt")
console.log(is_playing);






