import './App.css';
import React from 'react';
import { Sidebar } from './Sidebar';
import {Feed} from './Feed';
import {Widgets} from './Widgets'

const data = [
  {
      displayName :' Keshav Kabra',
      username : 'keshavkabrakk2', 
      text : 'this is some random tweet by Keshav Kabra',
      avatar : 'https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'

  },
  {
      displayName :'Aman Mishra',
      username : 'amanmish43', 
      text : 'this is some random tweet  by Aman Mishra',
      avatar : 'https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'

  },
  {
      displayName :'Sahil Jain',
      username : 'Sj12211', 
      text : 'this is some random tweet  by Sahil Jain',
      avatar : 'https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'

  }
]




class App extends React.Component {
  render(){
    return(
      <div className="app">
        <Sidebar />
        <Feed data={data} />
        <Widgets />

      </div>
    )
    

  }
}

export default App;
