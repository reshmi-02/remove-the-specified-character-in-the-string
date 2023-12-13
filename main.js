var na=prompt("Enter the word");
document.write(`given word = ${na}<br>`)
var position=parseInt(prompt("Enter the position"))
document.write(`given pposition = ${position} <br>`)
for (let i=0;i<na.length;i++){
    if((i+1)!==position){
        document.write(na[i])
    }
}