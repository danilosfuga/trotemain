function calcular(){
                let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
                let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
                let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
                let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
                let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)

                document.getElementById("resultado").innerText = "Pontuação Total: " + pontos + " pontos"


                let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
                if(kitAlimentacao >= 60){
                    pontos = pontos + 5000
                    if(kitAlimentacao > 60){
                        pontos = pontos + (kitAlimentacao -60) * 83.33
                }
                else{
                    pontos = pontos + kitAlimentacao * 83.33
                }


                document.getElementById("resultado").innerText = "Pontuação Total: " + pontos + " pontos"
            }