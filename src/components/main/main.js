import './main.css';
import Chart from '../charts/chart'


const Main = () => {
  return (
    <main>
      <div className='main__container'>
        <div className='main__title'>
          {/* <img src={} alt="hello"> */}
          <div className='main__greeting'>
            <h1>Painel Central</h1>
            {/* <p>Painel de estatística</p> */}
          </div>
        </div>
        <div className='main__cards'>
          <div className='card'>
            <i className='fa fa-file-text fa-2x'></i>
            <div className='card_inner'>
              <p className='text-primary-p'>Rendimento</p>
              <span className='font-bold text-title'>R$ 1.257,856,49</span>
            </div>
          </div>
          <div className='card'>
            <i class="fa-solid fa-chart-simple fa-2x"></i>
            <div className='card_inner'>
              <p className='text-primary-p'>Faturamento</p>
              <span className='font-bold text-title'>325</span>
            </div>
          </div>
          <div className='card'>
            <i class="fa-solid fa-user fa-2x"></i>
            <div className='card_inner'>
              <p className='text-primary-p'>Membros</p>
              <span className='font-bold text-title'>516</span>
            </div>
          </div>
          <div className='card'>
            <i class="fa-solid fa-road fa-2x"></i>
            <div className='card_inner'>
              <p className='text-primary-p'>Tráfego</p>
              <span className='font-bold text-title'>92</span>
            </div>
          </div>
          <div className='card glossa'>
            <i class="fa-solid fa-circle-exclamation fa-2x text-red"></i>
            <div className='card_inner'>
              <p className='text-primary-p'>Glosa</p>
              <span className='font-bold text-title'>34</span>
            </div>
          </div>
        </div>
        <div className='charts'>
          <div className='charts__left'>
            <div className='charts__left__title'>
              <div>
                <h1>DADOS1</h1>
                <p>Legenda</p>
              </div>
              <Chart/>
            </div>
            {/* <i className='fa fa-area-chart'></i> */}
          </div>
          <div className='charts__left'>
            <div className='charts__left__title'>
              <div>
                <h1>DADOS2</h1>
                <p>Legenda</p>
              </div>
              <Chart/>
            </div>
          </div>
          <div className='charts__right'>
            <div className='charts__right__title'>
              <div>
                <h1>DADOS3</h1>
                <p>Legenda</p>
              </div>
              <Chart/>
            </div>
          </div>
          <div className='charts__right'>
            <div className='charts__right__title'>
              <div>
                <h1>DADOS4</h1>
                <p>Legenda</p>
              </div>
              <Chart/>
            </div>
          </div>
          {/* <div className='charts__left__cards'>
            <div className='card1'>
              <h1>Exemplo</h1>
              <p>volume</p>
            </div>
            <div className='card2'>
              <h1>Exemplo</h1>
              <p>volume</p>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
};












export default Main;