import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function Fooldal() {
    return (
      <>
    <header>
    
     <div className='container-fluid'>
          <img className='header-fokep' src="./top.jpg" alt="" />
   </div>
  </header>



 <div className='container'>
   
   <div className='napraforgos-div'>
   <h2>Napraforgós Nemzeti Tanusító Védjegy célja</h2>
 <p>A falusi szálláshelyek napraforgós Nemzeti Tanúsító Védjegye a FATOSZ által több mint tíz éve létrehozott, és működtetett minősítési rendszer alapjaira épülve 2011 óta a minőségi falusi turizmus szimbóluma. A védjegy alapvető célja, hogy – összhangban az egyes szálláshelyek működtetéséről szóló 239/2009. Korm. rendeletben foglaltakkal – garanciát nyújtson a szálláshely szolgáltatás minőségének megfelelő színvonalára. A falusi vendégházak 1-4 napraforgós besorolást nyerhetnek el a külső, belső megjelenés, a felszereltség, a szolgáltatások színvonala, valamint a szállásadó személyes felkészültségének, szakmai képzettségének függvényében. </p><br />
 <h3>Tájékoztató oldal</h3> 
 <img src="./logo.png" alt="" />
 <br />
 <img className='holloko' src="./holloko_masolata.jpg" alt="" />

</div>
 </div>
 <div className='container1'>
   
   <div className='falusiSzalas-div'>
   <h2>Falusi szálláshely fajtái</h2>
   <li>Vendégszoba: a vendégek rendelkezésére bocsátható önálló lakóegység, amely egy lakóhelyiségből, és a minősítéstől függően a hozzátartozó mellékhelyiségekből áll.</li>
   <li>Lakrész: önálló épület kettő, illetve több szobából álló lehatárolt része a minősítéstől függően hozzátartozó mellékhelyiségekkel együtt</li>
   <li>Vendégház: önálló épület, több szobával, mellékhelyiségekkel és főzési lehetőséggel rendelkező lakó-, illetve üdülőegység, családok vagy kisebb csoportok elszállásolására.</li>
   <li>Sátorozóhely: csak valamelyik falusi szálláshely típus mellett, mintegy azt kiegészítve üzemeltethető az előírt feltételek megléte esetén. Pl.: falusi vendégház sátorozóhellyel.</li>   
 <img className='ketagyas' src="./ketagyas.jpg" alt="ketagyas" />
</div>
 </div>

 <div className='container2'>
   <div className='hetTorpe-div'>
   <h2>A hét törpe fogadó</h2>
   <div>
     <p>ide jon az adatbazis</p>
   </div>
   <div>
     <h3>A házban összesen 21 fő fér el.</h3>
     Felszereltségük:
     <ol>
       <li>Ruhásszekrény</li>
       <li>Saját fürdőszoba zuhanytálca</li>
       <li>WC(fürdőszobával egyben)</li>
     </ol>
   </div>
</div>
 </div>
 <div className='vendegszobakFoglalatsaga'> 
 <h2>A vendégszobák foglalatsága</h2>
 <p>Válassza ki melyik szoba adatait szeretné látni:</p>
 <select name="" id="lenyilomenu">
  <option value="">Kuka</option>
  <option value="">Vidor</option>
  <option value="">Tudor</option>
  <option value="">Morgo</option>
  <option value="">Hapci</option>
  <option value="">Szende</option>
  <option value="">Szundi</option>
 </select> <br />
 <button>Adatok</button>
 </div> 
        
 <h1>dmwkmd</h1>
      </>
    );
  }
  
  export default Fooldal;