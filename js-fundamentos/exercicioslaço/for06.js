let ant = 0
let atual = 1
let post = 0


for(let i = 0; i<500; i++){
  post = atual+ant
  ant = atual
  atual = post

  console.log(atual)

  if(atual>500){
    i = 500
  }
   
}
