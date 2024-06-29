const $listButton = document.querySelectorAll('button');

for(let $button of $listButton){
    $button.onclick = function(){
        $button.parentNode.parentNode.remove();
    }
}