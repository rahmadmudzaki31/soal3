function soal1(baris){
  let pola = '';

for(let i = 1; i <= baris; i++){
  for(let j = 1; j <= i; j++){
    pola += '*';
  }
    pola += '\n';
}

    return pola;
}

console.log(soal1(5));