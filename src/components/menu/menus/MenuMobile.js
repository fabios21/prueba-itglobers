import './MenuMobile.css';
import data from '../../../json/data.json';
import { Link } from "react-router-dom";

function MenuMobile() {
    return (
      <div>
        <ul id="ul-mobile" class="ui inverted vertical menu violet">
            <li className="li-mobile">
                <Link class="item" to="/">Home</Link>
            </li>
            <hr/>
            {
                data.map((info) => {
                    return (
                        <div>
                            <li className="li-mobile">
                                <Link class="item" to={"/" + info.name}>{info.name}</Link>
                            </li>
                            <hr/>
                        </div>
                    )
                })
            }
       
        </ul>
      </div>
    );
  }
  
  export default MenuMobile;