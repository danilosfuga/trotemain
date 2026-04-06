function calcular(){
                let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
                let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
                let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
                let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
                let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)

                let cor = document.getElementById("cor").value
                let metaprova1
                if(cor === "amarela"){
                    metaprova1 = 54
                }
                else if(cor === "cinza"){
                    metaprova1 = 51
                }
                else if(cor === "laranja"){
                    metaprova1 = 21
                }
                else if(cor === "marron"){
                    metaprova1 = 88
                }
                else if(cor === "preta"){
                    metaprova1 = 60
                }

                let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
                if(kitAlimentacao >= metaprova1){
                    pontos = pontos + 5000
                    if(kitAlimentacao > metaprova1){
                        pontos = pontos + (kitAlimentacao - metaprova1) * (5000 / metaprova1)
                    }
                }
                else{
                    pontos = pontos + kitAlimentacao * (5000 / metaprova1)
                }
                document.getElementById("resultado").innerText = "Pontuação Total: " + pontos + " pontos"
               
               }