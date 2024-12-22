const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        // If the panel is already active, remove the class and exit
        if (panel.classList.contains('active')) {
            panel.classList.remove('active');
        } else {
            // Otherwise, remove the active class from all panels
            removeActiveClasses();
            // Add the active class to the clicked panel
            panel.classList.add('active');
      }
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}