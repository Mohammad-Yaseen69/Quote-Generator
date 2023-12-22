const quoteText = document.querySelector('.quote')
const quoteNum = document.querySelector('.quote-num')

async function createQuote(){
    try{
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()
        quoteText.innerHTML = `"${data.slip.advice}"`
        quoteNum.innerHTML = data.slip.id
    }
    catch(error){
        console.log(error);
    }
}

window.onload = createQuote
document.querySelector('button').addEventListener('click' , createQuote)
createQuote()