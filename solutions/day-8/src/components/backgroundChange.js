import React from 'react';
import person from '../images/person.jpg'

export default function BgChange() {
     let now = new Date();
     let year = now.getFullYear();
     let mon = now.getMonth();
     let date = now.getDate();
     const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
     ]
     const techs = ['HTML', 'CSS', 'JavaScript'];
     let tech = techs.map((i) => <li>{i}</li>);

     let [changeBg, setChangeBg] = React.useState('#fff');
     let [changeColor,setChangeColor] = React.useState('#000')
     // function Change() {
     //      if (changeBg === '#fff') {
     //           setChangeBg('#000');
     //      } else {
     //           setChangeBg('#fff');
     //      }
     //      if (changeColor === '#000') {
     //           setChangeColor('#fff');
     //      } else {
     //           setChangeColor('#000');
     //      }
     // }
     function Change() {
          setChangeBg(prev => {
               return (prev==='#fff')?'#000':'#fff'
          })
          setChangeColor(prev => {
               return (prev==='#000')?'#fff':'#000'
          })
     }
     function GreetPeople() {
          alert(`Hello Guys , Welcome to the today's Challenge`)
     }
     function showTime() {
          let hrs = now.getHours();
          let mins = now.getMinutes();
          alert(`The time is ${hrs}:${mins}`);
     }
     return (
          <section style={{backgroundColor:`${changeBg}`,color:`${changeColor}`}}>
               <div className="details">
                    <h1>Welcome to 30 Days of React</h1>
                    <h3>Getting Started React</h3>
                    <h4>JavaScript Library</h4>
                    <p>Satya Surendra</p>
                    <small>{months[mon].slice(0, 3)} {date} , { year}</small>
               </div><hr />
               <div className="profile">
                    <p>Prerequisite to get started react.js</p>
                    <ul>{tech}</ul>
                    <img src={person} alt="" />
                    <p>Satya Surendra</p>
                    <button type='submit' onClick={GreetPeople}>Greet People</button>
                    <button type='submit' onClick={showTime}>Show Time</button>
                    <button type='submit' onClick={Change}>Background Change</button>
               </div>
          </section>
     )
}