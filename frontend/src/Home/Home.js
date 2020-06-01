import React, { Component } from 'react'
import Nave from '../navber/Nave'

import { Button } from 'react-bootstrap'



export default class Home extends Component {
    render() {
        return (
            <div>

                   <div id="stage">
       <div id="stage-caption">
           <h1 class="display-5"> متجر عصري مع تجارة مثمارة واستثمار امن </h1>
           <p>ابدء بأستثمار خزنتك معنا </p>
           <Button variant="warning"> سجل الأن </Button>{' '} 
       </div>
   </div>
            </div>
        )
    }
}
