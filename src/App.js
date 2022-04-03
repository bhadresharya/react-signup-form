import './App.scss';
import Talent from './components/Talent'
import Fan from './components/Fan'

function App() {
  return (
    <main className='main-wrapper'>
      <section>
        <div className='container py-5'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='card bg-secondary'>
                <div className='card-body'>
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link rounded-pill active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                        Fan Signup
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link rounded-pill" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                        Talent Signup
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <Fan />
                    <Talent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
