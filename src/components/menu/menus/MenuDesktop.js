import "./MenuDesktop.css";
import data from '../../../json/data.json';
import { Link } from "react-router-dom";


function MenuDesktop() {

    return (
      <div>
        <ul id="ul" class="ui inverted menu violet">
            <li className="li">
                <Link class="item" to="/">Home</Link>         
            </li>
            {
                data.map((info) => {
                    return (
                        <li className="li">
                            <div>
                                <Link class="item" to={"/" + info.name}>{info.name}</Link> 
                            </div>
                        </li>
                    )
                })
            }
        </ul>

      </div>
    );
  }
  
  export default MenuDesktop;
  