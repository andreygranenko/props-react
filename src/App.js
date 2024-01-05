import React, { Component} from 'react';
import {styled} from "styled-components";

import BootstrapTest from './BootstrapTest';
import './App.css';

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
  a {
    display: block;
    margin: 10px 0 10px 0;
    color: ${props => props.active ? 'orange' : 'black'};
  }
  input {
    display: block;
    margin-top: 10px;
  }
`;

const Header = styled.h2`
  font-size: 22px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, .2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
`;

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
        <Header>My name is <span>{name}</span>, <br/>
            surname - <span>{surname}</span>, <br/>
            age - <span>{years}</span>,
            position - <span>{position}</span></Header>
        <a href={link}>My profile</a>
        <Button onClick={this.nextYear}>{text}</Button>
        <form action="">
            <span>Введите должность</span>
            <input type="text" onChange={this.commitInputChanges}/>
        </form>
      </div>
    );
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

const DynamicGreeting = (props) => {
    return (
        <div className={'mb-3 p-3 border border-' + props.color}>
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
                })
            }
        </div>
    )
}

const HelloHelloGreeting = () => {
    return <HelloGreeting clazz={'mb-3 border '}/>
}

const HelloGreeting = (props) => {
    return (
        <div className={props.clazz} style={{width: '600px', margin: '0 auto'}}>
            <DynamicGreeting color={'primary'}>
                <h2>Beetle</h2>
            </DynamicGreeting>
        </div>
    )
}

const Message = (props) => {
    return (
        <h2>The counter is ${props.counter}</h2>
    )
}

class Counter extends Component {
    state = {
        counter: 0
    }

    changeCounter = () => {
        this.setState(({counter}) => ({
            counter: counter + 1
        }))
    }

    render() {
        return (
            <>
                <button
                    className={'btn-primary btn'}
                    onClick={this.changeCounter}>
                    Click me
                </button>
                {this.props.render(this.state.counter)}
            </>
        )
    }
}

function App() {
  return (
      <EmpItem active>
        <div className="App">
            <Counter render={counter => (
                <Message counter={counter}/>
            )}/>
            <HelloHelloGreeting/>
            <HelloGreeting/>
            <BootstrapTest
                left={
                    <DynamicGreeting color={'primary'}>
                        <h2>Just hanging around</h2>
                        <h2>Beetle</h2>
                    </DynamicGreeting>
                }
                right={
                    <DynamicGreeting color={'primary'}>
                        <h2>RIGHT!</h2>
                    </DynamicGreeting>
                }
            />
            <WhoAmI name='Andrew' surname="Granenko" link="facebook.com"/>
            <WhoAmI name='Alex' surname="Vodnev" link="vk.com"/>
        </div>
      </EmpItem>
  );
}

export default App;
