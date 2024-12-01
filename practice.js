const Gp=document.getElementById("GrandParent")
Gp.addEventListener("click", ()=>
    {
        // e.stopPropagation();
        setTimeout(()=>
            {
                Gp.style.backgroundColor="pink";
                console.log("Clicked by Grandparent")
            },3000);
       
    });




const P=document.getElementById("Parent")
P.addEventListener("click", ()=>
    {
        // e.stopPropagation();
        setTimeout(()=>
        {
            P.style.backgroundColor="yellow";
            console.log("Clicked by pareent")
        },2000);
        
    });




const C=document.getElementById("Child")
C.addEventListener("click", ()=>
{
    // e.stopPropagation();
    setTimeout(() =>
    {
        C.style.backgroundColor="red";
        console.log("Clicked by child")

    },1000);
    
});