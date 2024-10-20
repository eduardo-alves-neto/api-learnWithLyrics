## Documentação da API de Geração de Teste a Partir de Letras de Música

Esta API permite que os usuários gerem um conjunto de perguntas de múltipla escolha baseada na interpretação de letras de música, utilizando a *API Generative AI do Google*. Caso a API Key disponibilizada em `.env` não esteja funcionando, você pode gerar uma nova rapidamente em [Gemini Developer API](https://ai.google.dev/gemini-api?hl=pt-br).

## Usando a API
1. Execute o seguinte comando para iniciar o servidor: `npm start`;
   
2. Uma mensagem - *AI Lyric Service works..* - deve aparecer no prompt, informando que o servidor está funcionando;
   
3. A solicitação deve feita na rota `/generate-test`, da porta *3000* do *localHost*;
   
4. No *body* da requisição, deve ser informada a letra da música que você seja gerar o teste. **Veja**:

   `{ "lyric": "I'm tired of being what you want me to be\nFeeling so faithless, lost under the surface\nI don't know what you're expecting of me\nPut under the pressure\nOf walking in your shoes\n(Caught in the undertow, just caught in the undertow)\nEvery step that I take is another mistake to you\n(Caught in the undertow, just caught in the undertow)\n\nI've become so numb\nI can't feel you there\nBecome so tired\nSo much more aware\nI'm becoming this\nAll I want to do\nIs be more like me\nAnd be less like you\n\nCan't you see that you're smothering me\nHolding too tightly\nAfraid to lose control\n'Cause everything that you thought I would be\nHas fallen apart right in front of you\n(Caught in the undertow, just caught in the undertow)\nEvery step that I take is another mistake to you\n(Caught in the undertow, just caught in the undertow)\nAnd every second I waste is more than I can take\n\nI've become so numb\nI can't feel you there\nBecome so tired\nSo much more aware\nI'm becoming this\nAll I want to do\nIs be more like me\nAnd be less like you\n\nAnd I know\nI may end up failing too\nBut I know\nYou were just like me\nWith someone disappointed in you\n\nI've become so numb\nI can't feel you there\nI'm Become so tired\nSo much more aware\nI'm becoming this\nAll I want to do\nIs be more like me\nAnd be less like you\nI've become so numb I can't feel you there\n(I'm tired of being what you want me to be)\nI've become so numb I can't feel you there\n(I'm tired of being what you want me to be)"}`

5. Se tudo ocorrer corretamente, um array com 5 objetos JSON será retornado, cada objeto do array sendo uma questão, tendo o seguinte formato:

![response example](/response-example.png)

## Observações
- O objeto *lyric* no *body* pode ser enviado exatamente igual ao do exemplo acima, visto que o próprio service vai formatar o texto para um retorno que possa ser usado;
- Como dito anteriormente, talvez seja necessário gerar uma nova API Key no site do Gemini para developers.
