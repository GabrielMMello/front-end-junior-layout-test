import "./Main.css"

function Main() {
    return (
        <main id="Main" className="Main">

        
            <div className="Main__box">
                <div className="Main__header">
                    <h2>growth plans</h2>
                    <p>take your business to the next level</p>
                </div>


                <figure className="graph">

                    <div key="1" className="graphColumn1">
                        <div className="graphValues">
                            <p><span className="Main__span">$ 100</span></p>
                            <p className="Main__p--size20">100 + hours</p>
                        </div>
                        <p className="Main__p--regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div key="2" className="graphColumn2">
                        <div className="graphValues">
                            <p><span className="Main__span">$ 150</span></p>
                            <p className="Main__p--size20">180 + hours</p>
                        </div>
                        <p className="Main__p--regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div key="3" className="graphColumn3">
                        <div className="graphValues">
                            <p><span className="Main__span">$ 200</span></p>
                            <p className="Main__p--size20">260 + hours</p>
                        </div>
                        <p className="Main__p--regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div key="4" className="graphColumn4">
                        <div className="graphValues">
                            <p><span className="Main__span">$ 250</span></p>
                            <p className="Main__p--size20">380 + hours</p>
                        </div>
                        <p className="Main__p--regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div key="5" className="graphColumn5">
                        <div className="graphValues">
                            <p><span className="Main__span">$ 300</span></p>
                            <p className="Main__p--size20">420 + hours</p>
                        </div>
                        <p className="Main__p--regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div key="6" className="graphColumn6">
                        <div className="graphValues">
                            <p><span className="Main__span">$ 350</span></p>
                            <p className="Main__p--size20">520 + hours</p>
                        </div>
                        <p className="Main__p--regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                </figure>
            </div>
        </main>
    );
  }
  
  export default Main;