function degreeToFh(){
    let degree=+id_deg.value;
    let fh=(degree*9/5)+32
    // document.querySelector("#id_fh").value=`${fh}`
    id_fh.value=fh
}

function farenTodeg(){
    let faren=+id_fh.value;
    let deg=(faren-32)*5/9
    // document.querySelector("#id_deg").value=`${deg}`
    id_deg.value=deg
}