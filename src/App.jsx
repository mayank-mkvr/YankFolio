<<<<<<< HEAD

import { Navbar, Welcome, Dock } from "#components";


const App = () => {
    return(
        <main>
            <Navbar />
            <Welcome />
            <Dock />
        </main>
    );
};
=======
import dayjs from "dayjs";
import { navIcons,navLinks } from '#constants';

const App = () => {
  return ( <nav>
        <div>
        <img src="/images/logo.png" alt="logo" />
          <p className="font-bold">IITianYank's Portfolio</p>
          <ul>
            {navLinks.map(({id,name})=>(
                <li key={id}>
                  <p>{name}</p>
                </li>
            ))}
          </ul>
        </div>

        {/*Left Side Nav div*/}

        <div>
          <ul>
            {navIcons.map(({id, img}) => (
                <li key={id}>
                <img src={img} className="icon-hover" alt={`icon-${id}`} />
                </li>
            ))}
          </ul>
            <time>
                {dayjs().format('ddd MMM D h:mm A')}
            </time>
        </div>
      </nav>
  );
};

>>>>>>> 658faa71005039f9d65f7cd38a7ad497482c2517
export default App;