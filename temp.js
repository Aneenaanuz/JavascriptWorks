var temps={"tvm":34,"clt":36,"kollam":33,"ern":34,"tsr":33}

//print highest temparature
var max_temp=Object.entries(temps).reduce((t1,t2)=>t1[1]>t2[1]?t1:t2)
console.log(max_temp);

