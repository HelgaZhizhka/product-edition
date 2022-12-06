const themeEl = document.querySelector(".theme");
const $htmlEl = document.documentElement;
let theme = localStorage.getItem('theme')
setTheme(theme)

   function setTheme(theme) {
      if (theme) {
         $htmlEl.dataset.theme = theme
      }
   }

   themeEl.addEventListener('click' , () => {
      let theme = $htmlEl.dataset.theme === 'light' ? 'dark' : 'light'
      setTheme(theme)
      localStorage.setItem('theme' , theme)
   })


// =====================================================

