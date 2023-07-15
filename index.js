document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.add').addEventListener('click', function() {
      document.querySelector('.popup-container').style.display = 'block';
    });
  
    document.querySelector('.cancel').addEventListener('click', function() {
      document.querySelector('.popup-container').style.display = 'none';
    });
    document.querySelector('.add_wr').addEventListener('click', function() {
      document.querySelector('.popup-container').style.display = 'none';
    });
  
    let today = document.getElementById("today");
    let crtdte = new Date();
    let day = `${crtdte.getDate() < 10 ? "0" : ""}${crtdte.getDate()}`;
    let month = `${(crtdte.getMonth() + 1) < 10 ? "0" : ""}${crtdte.getMonth()+1}`;
    let yr = crtdte.getFullYear();
    console.log(month)
    today.textContent =`${day}/${month}/${yr}`;

    const mark = document.querySelector('.work_but');

    mark.addEventListener('click',function(){
      const male = parseInt(document.getElementById('male').value);
      const fmale = parseInt(document.getElementById('female').value);
      const cont = parseInt(document.getElementById('contract').value);
      console.log(male);
      console.log(fmale);
      console.log(cont);
      const count = male + fmale+ cont;
      const store = document.querySelector('.count table tbody tr td');
      store.textContent=count;

      document.querySelector('.workers form').reset();
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const ven = document.querySelector('.ven');
    const wor = document.querySelector('.wor');
    const cli = document.querySelector('.cli');
    const pro = document.querySelector('.pro');
  
    ven.addEventListener('click', function(){
      window.location.href = "ven_f.html";
    });
    wor.addEventListener('click', function(){
      window.location.href = "lab_f.html";
    });
    cli.addEventListener('click', function(){
      window.location.href = "cli_f.html";
    });
    pro.addEventListener('click', function(){
      window.location.href = "prod_f.html";
    });
  
    
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const save = document.querySelector('.cli_s');
    const clear = document.querySelector('.cli_c');
  
    save.addEventListener('click',function(){
      window.history.back();
    });

    clear.addEventListener('click', function () {
      document.getElementById('form_c').reset();
  });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const save = document.querySelector('.pro_s');
    const clear = document.querySelector('.pro_c');
  
    save.addEventListener('click',function(){
      window.history.back();
    });

    clear.addEventListener('click', function () {
      document.getElementById('form_p').reset();
  });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const save = document.querySelector('.lab_s');
    const clear = document.querySelector('.lab_c');

    save.addEventListener('click',function(){
      window.history.back();
    });

    clear.addEventListener('click', function () {
      document.getElementById('form_l').reset();
  });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const save = document.querySelector('.ven_s');
    const clear = document.querySelector('.ven_c');
  
    save.addEventListener('click',function(){
      window.history.back();
    });

    clear.addEventListener('click', function () {
        document.getElementById('form_v').reset();
    });
  });