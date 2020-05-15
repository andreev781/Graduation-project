'use strict';
const accordion = () => {
    const acordions = document.querySelectorAll('.questions .panel-heading');
    for(let i = 0; i < acordions.length; i++){
        const content = acordions[i].nextElementSibling;

        if(i < 1){
            content.style.display = 'block';
        }else{
            content.style.display = 'none';
        }
            acordions[i].onclick = function(e) {
            e.preventDefault();
            acordions.forEach((item) => {
                item.nextElementSibling.style.display = 'none';
            });
            if(content.style.display !== 'none'){
                content.style.display = 'none';
            }else{
                content.style.display = 'block';    
            }
            


        };
    }

};
export default accordion;