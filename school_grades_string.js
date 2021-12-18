//Sistema que transforma as notas escolares de numéricos em Tipos caracteres A, B, C, D e F

function getScore(score) {
  let scoreA = score >= 90 && score <= 100;
  let scoreB = score >= 80 && score <= 89;
  let scoreC = score >= 70 && score <= 79;
  let scoreD = score >= 60 && score <= 69;
  let scoreF = score < 60 && score >= 0

  let scoreFinal;

  if (scoreA) {
    scoreFinal = "A"
  } else if (scoreB) {
    scoreFinal = "B"
  } else if (scoreC) {
    scoreFinal = "C"
  } else if (scoreD) {
    scoreFinal = "D"
  } else if (scoreF) {
    scoreFinal = "F"
  } else {
    scoreFinal = "Nota inválida"
  }

  return scoreFinal
}


console.log(getScore(105))
console.log(getScore(100))
console.log(getScore(95))
console.log(getScore(88))
console.log(getScore(78))
console.log(getScore(-2))
console.log(getScore(68))
console.log(getScore(55))
console.log(getScore(35))