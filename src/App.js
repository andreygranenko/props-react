import { Component} from 'react';
import './App.css';



class WhoAmI extends Component {

  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++',
      position: ''
    };
  }

  nextYear = () => {
    this.setState(state => ({
        years: state.years + 1
    }))
  }

  commitInputChanges = (e) => {
      this.setState({
          position: e.target.value
      })
  }

  render() {
    const {name, surname, link} = this.props;
    const {position, years, text} = this.state
    return (
      <div className='main'>
        <h1>My name is <span>{name}</span>, <br/>
            surname - <span>{surname}</span>, <br/>
            age - <span>{years}</span>,
            position - <span>{position}</span></h1>
        <a id={'link'} href={link}>My profile</a>
        <button onClick={this.nextYear}>{text}</button>
        <form action="">
            <span>Введите должность</span>
            <input type="text" onChange={this.commitInputChanges}/>
        </form>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name='Andrew' surname="Granenko" link="facebook.com"/>
      <WhoAmI name='Alex' surname="Vodnev" link="vk.com"/>
    </div>
  );
}

export default App;
