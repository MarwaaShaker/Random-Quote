function randomText(){
    var authors=["― Roy T. Bennett", "― Roy T. Bennett", "― Steve Maraboli", "― Walt Disney","― Stephen Richards","― Oscar Wilde","― Mahatma Gandhi",
    "― Bill Keane", "― Thomas A. Edison", "― Paulo Coelho", "― Roy T. Bennett"];
    var quote = [" “Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.” ", 
    " “Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.” ",
" “Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness.” ", 
" “The way to get started is to quit talking and begin doing.” ",
" “You are essentially who you create yourself to be and all that occurs in your life is the result of your own making.” ",
" “Be yourself; everyone else is already taken.” ",
" “Be the change that you wish to see in the world.” ",
" “Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.” ",
" “I have not failed. I've just found 10,000 ways that won't work.” ",
" “When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.” ",
" “Instead of worrying about what you cannot control, shift your energy to what you can create.” "]

var newQuote= Math.floor(Math.random()* authors.length);
document.getElementById("randomQuote").innerHTML= quote[newQuote];
document.getElementById("authorName").innerHTML= authors[newQuote];
}
randomText();