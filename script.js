var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname)
{
 for(tablink of tablinks)
 {
    tablink.classList.remove("active-link");
 }
 for(tabcontent of tabcontents)
 {
    tabcontent.classList.remove("active-tab");
 }
 event.currentTarget.classList.add("active-link");
 document.getElementById(tabname).classList.add("active-tab");

}
function send()
{
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwJXU9N75esPWLjGBi-cu5-cqjakoBX9kfyuzBigGAa3EJhmOjsJNnUStZwp9PI2rhd/exec'
    const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
            msg.innerHTML="Message Sent Successfully"
            setTimeout(function()
            {
                msg.innerHTML=""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
}
function scrolltotop()
{
window.scrollTo(0,0);
}
function isInViewport(element) {
  const bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 150 &&
    bounding.left >= 150 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  const animationElement = document.getElementsByClassName('animated-text');

  if (isInViewport(animationElement)) {
    animationElement.style.animation = 'fadeInAnimation 1s ease-in forwards';
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);