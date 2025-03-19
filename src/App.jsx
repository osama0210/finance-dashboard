import Header from './components/Header.jsx'



const RenderCoins = () => {
    fetch("https://api.coincap.io/v2/assets")
        .then(response => {if (response.ok) {
            return response.json();
        }})
    .then(data => {console.log(data)})

}


const App = () => {

    return (
      <div>
          <RenderCoins />
          <Header />
      </div>
    );
};


export default App;