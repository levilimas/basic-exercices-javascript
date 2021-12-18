function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahreinheitExists = degree.toUpperCase().includes('F')

  if (!celsiusExists && ! fahreinheitExists) {
    throw new Error('Grau não identificado')
  }

  //fluxo ideal F -> C
  let updateDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = fahreinheit => ((fahreinheit - 32) * 5) / 9;
  let degreeSign = 'C'


  if(celsiusExists) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => ((celsius * 9) / 5) + 32;
    degreeSign = 'F'
  }

  return formula(updateDegree) + degreeSign
}

try {
  console.log(transformDegree('10C'))
  console.log(transformDegree('50F'))
  transformDegree('50Z')
} catch (error) {
  console.log(error)
}