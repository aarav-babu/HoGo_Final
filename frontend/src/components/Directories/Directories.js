import './Directories.css';

const Directory = () => {
  function up() {
    document.getElementById('demo').innerHTML = 'Main Gate';
  }

  function dow() {
    document.getElementById('demo').innerHTML = 'Main Gate: 2222';
  }

  function up1() {
    document.getElementById('demo1').innerHTML = 'Maintenance';
  }

  function dow1() {
    document.getElementById('demo1').innerHTML = 'Maintenance: 3333';
  }

  function up2() {
    document.getElementById('demo2').innerHTML = 'Laundry';
  }

  function dow2() {
    document.getElementById('demo2').innerHTML = 'Laundry: 4444';
  }

  function up3() {
    document.getElementById('demo3').innerHTML = 'Stores';
  }

  function dow3() {
    document.getElementById('demo3').innerHTML = 'Stores:5555';
  }

  function up4() {
    document.getElementById('demo4').innerHTML = 'Salon';
  }

  function dow4() {
    document.getElementById('demo4').innerHTML = 'Salon:6666';
  }

  function up5() {
    document.getElementById('demo5').innerHTML = 'Gym';
  }

  function dow5() {
    document.getElementById('demo5').innerHTML = 'Gym: 7777';
  }

  function cl() {
    document.getElementById('demoo').innerHTML =
      'A-Block:1010<br/>B-Block:2020<br/>C-Block:3030<br/>D-Block:4040';
  }
  function dbl() {
    document.getElementById('demoo').innerHTML = '';
  }
  return (
    <div
      style={{
        backgroundImage: "url('/img/back_img.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div id="page">
        <div>
          <h1 className="App-header">DIRECTORIES</h1> <br /> <br /> <br />
        </div>
        <div class="container">
          <span id="demo" onClick={dow} onDoubleClick={up}>
            Main Gate
          </span>{' '}
          <br />
          <br />
          <span id="demo1" onClick={dow1} onDoubleClick={up1}>
            Maintenance
          </span>
          <br />
          <br />
          <span id="demo2" onClick={dow2} onDoubleClick={up2}>
            Laundry
          </span>
          <br />
          <br />
          <span id="demo3" onClick={dow3} onDoubleClick={up3}>
            Stores
          </span>
          <br />
          <br />
          <span id="demo4" onClick={dow4} onDoubleClick={up4}>
            Salon
          </span>
          <br />
          <br />
          <span id="demo5" onClick={dow5} onDoubleClick={up5}>
            Gym
          </span>
          <br />
          <br />
          <span onClick={cl} onDoubleClick={dbl}>
            Blockwise Directory
          </span>
          <br />
          <br />
          <span id="demoo"></span>
        </div>
      </div>
    </div>
  );
};

export default Directory;
