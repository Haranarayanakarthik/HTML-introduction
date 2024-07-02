function validate() 
{
  var a = document.getElementById("n1");
  a = a.value;
  var b = Math.floor(Math.random() * 10);
  var c = document.getElementById("ans");
  if (a == b) 
  {
    c.innerHTML = "You Gessed Right";
  } else 
  {
    c.innerHTML = "You Gessed Wrong. The answer is: " + b;
  }
}
