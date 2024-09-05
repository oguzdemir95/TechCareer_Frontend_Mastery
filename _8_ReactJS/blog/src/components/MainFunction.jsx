import React from 'react'

import './main.css'
import {useContext} from 'react';
import {ThemeContext} from '../ThemeContext';


export default function MainFunction() {

  // Context Api
  const {theme,toggleTheme}=useContext(ThemeContext);
  const styles={
    light:{
      background:"white",
      color:"black",
      padding:"2rem"
    },
    dark:{
      background:"black",
      color:"white",
      padding:"2rem"
    }
  }
  
  return (
    <React.Fragment>
      <div style={styles[theme]}>
        <h2>{theme==="light"?'Light Theme':'Dark Theme'}</h2>
      <p style={{fontSize:"1rem", textAlign:"justify"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur voluptates eius quas ad accusamus adipisci hic non, labore praesentium a suscipit eveniet quia inventore autem ex nisi. Odio, ratione.
        Explicabo aliquam unde quaerat tempora, eos veritatis officia beatae odio doloremque praesentium fuga mollitia quis quidem. Ex dolore omnis error, neque, consequuntur commodi perferendis obcaecati tenetur aliquam odio magni adipisci.
        Reprehenderit nulla voluptatibus impedit officiis voluptates iste soluta cumque ea illum dolor cum inventore eius nostrum doloribus tempora mollitia consectetur, laborum vel fuga! Nesciunt a, iusto impedit libero dignissimos id!
        Enim architecto aperiam aliquam fugiat non fuga perferendis qui similique iusto quos ipsum, quisquam temporibus officiis, nemo dolorum illo quibusdam iure, quo corporis nobis repellendus. Similique facilis earum quia laborum.
        Earum explicabo doloribus, quia voluptatem repellendus incidunt, deserunt libero ex et dolores doloremque nesciunt aliquam. Nesciunt optio deleniti beatae natus cumque eius quas voluptates, quidem mollitia dolor assumenda totam similique.
        Sapiente sunt distinctio fugiat a explicabo aspernatur blanditiis voluptatum aperiam nostrum facilis corporis doloribus molestiae accusantium amet ratione maiores, nemo aut asperiores delectus ipsum impedit, repellendus porro omnis atque? Et.

      </p>
      
      </div>
    </React.Fragment>
  )
}
