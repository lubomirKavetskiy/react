import React, {PropTypes} from 'react';
import ReactDom from 'react-dom';
// great first component. Наш класс App наслідується від стандартного класу Component, який має стандартний метод render

class App extends React.Component {
    // валідація доданих (у самому низу) у компоненті властивостей
    static propTypes = {
        btnText: PropTypes.string.isRequired,
        h1Text: PropTypes.string.isRequired,
        newArray: PropTypes.array.isRequired
    };

    // якщо свойства не буди передані явно, тоді по-дефолту
    static defaultProps = {
        btnText: 'default'
    };


    // ств. метод, яки використовуєтьс нижче
    btnOnClick(event) {
        console.log('click- ', event.target);
    }

    render() {
        // вивід стилів, тих що записані нижче в компоненті <App btnText=.../>
        console.log('Props- ', this.props);
        console.log('array', this.props.newArray);

        return (
            // додаємо стилі та класс
            <div style={{backgroundColor: 'red'}} className='test'>
                {/*<h1>App works!!!</h1>*/}
                <h1>{ this.props.h1Text }</h1>
                <h3>{ this.props.newArray.pop() }</h3>
                <h3>Works</h3>
                {/*вішаємо собитіє*/}
                {/*<button onClick={this.btnOnClick}>button</button>*/}
                {/*вивід свойтсва (варінт а))*/}
                {/*<button onClick={this.btnOnClick}>{ this.props.children }</button>*/}
                {/*вивід свойтсва (варінт б))*/}
                <button onClick={this.btnOnClick}>{ this.props.btnText }</button>
            </div>

        );
    };
};

// вивід результату. Ми звертаємось до методу render (классу ReactDOm)
// наш класс App стає тегом для ReactDom
// другий елемент для метода render - це місце в index.html куди ми хочемо розмістити наш компонент

ReactDom.render(
    // додавання стилів (варінт а)), тобто цього тексту видно не буде, але звернувшись вище в button, ми його отримємо
    /*<App>It's props</App>,*/

    // додавання стилів (варінт б) ми додаємо свойство btnText)
    /*<App btnText="click me" h1Text="It's H1 text!" />,*/

    // не вказуємо властивості btnText, щоб текст був по-дефолту
    /*<App h1Text="It's H1 text!" />,*/

    // додавання у компонент свойства у вигляді масиву
    <App h1Text="It's H1 text!!!"  newArray={[1,2,3]} />,
    document.getElementById('app')
);




//lesson 4.8 state

class Stat extends React.Component {
    //для коректного наслідування
    constructor(props){
        super(props);

        // статус
        this.state = {
            text: 'test'
        }
    }

    inputOnChange(event){
        console.log("event-", event.target.value);

        const newText = event.target.value;
        this.setState({ text: newText });
    }

    render() {
        return(
            <input type="text" value={ this.state.text } onChange={ this.inputOnChange.bind(this) }/>
        );
    }

};


ReactDom.render(
    <Stat />,
    document.getElementById('stat')
);



// lesson 4.9 зв'язок компонентів + 4.10 життєвий цикл компонента



//import React, {Component} from 'react';
import ComponentSecond from './new';

class ComponentFirst extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            timer: 0
        }
    };

    componentWillMount(){
        setInterval(()=> {
            this.setState({ timer: this.state.timer+1 });
        }, 100)


    }


    render(){
        return(
            <div style={{background:'green'}}>
                <h1>ComponentFirst</h1>
                { this.state.timer < 50 ? <ComponentSecond textuk="text for teg p of Component-2" /> : null }
                <p>{ this.state.timer }</p>
            </div>

        );
    };
};

ReactDom.render(
    <ComponentFirst />,
    document.getElementById('component_1')
);





