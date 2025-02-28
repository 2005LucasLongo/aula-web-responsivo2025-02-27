document.getElementById("submit-btn").addEventListener("click", ()=>{
    
    /**
     * 
     * @param {HTMLElement} btn 
     */
    function Validate(btn){
        const invalidColor = "rgb(225, 100, 100)";
        const validColor   = "rgb(100, 225, 100)";

        btn.style.transition = "150ms";        
        btn.style.borderBottomWidth = "4px"
        btn.style.borderBottomColor = btn.checkValidity() ? validColor : invalidColor;        
    }        

    Validate(document.getElementById("nome"))
    Validate(document.getElementById("email"))    
})

