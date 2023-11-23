const button = document.getElementById('button');
 const content = document.getElementById('content');
 const input = document.getElementById('input');
 const poisk = document.getElementById('poisk');

 let inp;

    input.onchange = () =>{
    inp = input.value;
    }

    poisk.onclick = () =>{
    console.log(inp);

    }


    button.addEventListener('click', async function () {
     let url = 'https://63d304794abff88834170d21.mockapi.io/items'

     try {
         const response = await fetch(url)

         if (!response.ok) {
             throw new Error(response.status)
         }

         const data = await response.json()
         for (let i = 0; i < data.length; i++) {
             const element = data[i];
             if(element.name === inp){
                const block = document.createElement('div')
                block.className = 'block'
                block.innerHTML = <p>${element.id}</p>+
                <p> ${element.image}</p>+
                <p> ${element.lastPrice}</p>+
                <p> ${element.name}</p> +
                <p> ${element.price}</p>+
                <p> ${element.title}</p>
                
               
                content.appendChild(block) 
             }
              

         }
         console.log(data);
     } catch (error) {
         console.error(error);
    }
 })