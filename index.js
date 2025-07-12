function toggleFilter() {
            const filterForm = document.getElementById('filterForm');
            if (filterForm.style.display === 'none' || filterForm.style.display === '') {
                filterForm.style.display = 'block';
            } else {
                filterForm.style.display = 'none';
            }
        }

function deleted1(){
  let a = document.querySelector('#card1');
  a.innerHTML = ""
}

function deleted2(){
    let b = document.querySelector('#card2');
  b.innerHTML = ""
}

function deleted3(){
    let c = document.querySelector('#card3');
  c.innerHTML = ""
}