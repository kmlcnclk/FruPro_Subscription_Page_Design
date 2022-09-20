function dropDownMenuToggle() {
  document.getElementById('myDropdown').classList.toggle('show');
}
window.addEventListener('DOMContentLoaded', () => {
  window.onclick = function (event) {
    if (
      !event.target.matches('.dropbtn') &&
      !event.target.matches('.select-currency') &&
      !event.target.matches('.dropbtn-svg')
    ) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
});
