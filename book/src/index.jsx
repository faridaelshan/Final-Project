import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import './assets/sass/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Router from "./router/Router";
import { CartProvider } from "react-use-cart";
import "./i18n";
import ReactSwitch from 'react-switch'
import { Provider } from "react-redux";
import configureStore from './components/blog/store/configureStore';
import { addBlog } from './components/blog/action/Blog';

import img0 from './assets/img/b-blog-7.jpg'
import img1 from './assets/img/b-blog-6.jpg'
import img2 from './assets/img/b-blog-5.jpg'
import img3 from './assets/img/b-blog-4.jpg'
import img4 from './assets/img/b-blog-3.jpg'
import img5 from './assets/img/b-blog-2.jpg'
import img6 from './assets/img/b-blog-1.jpg'

export const ThemeContext = createContext(null);

const store = configureStore();
store.subscribe(() => {
    console.log(store.getState());
})

const blog1 = store.dispatch(addBlog({
    title: "Nullam Ullamcorper Nisl Quis Ornare Molestie",
    description: "Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl Urna pretium elit mauris cursus Curabitur...",
    id: "0",
    date: "APR 23 2021",
    by: "DEMO DEMO",
    img: img0,
    time: "Friday, April 23 2021",
    text: "Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl Urna pretium elit mauris cursus Curabitur at elit Vestibulum . Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas.Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl.Ut vitae nibh id massa vulputate euismod ut quis justo.Ut bibendum sem at massa lacinia, eget elementum ante consectetur.Nulla id pharetra dui, at rhoncus urna.Maecenas non porttitor purus.Nullam ullamcorper nisl quis ornare molestie.Etiam eget erat est.Phasellus elit justo, mattis non lorem non, aliquam aliquam leo.Sed fermentum consectetur magna, eget semper ante.Aliquam scelerisque justo velit.Fusce cursus blandit dolor, in sodales urna vulputate lobortis.Nulla ut tellus turpis.Nullam lacus sem, volutpat id odio sed, cursus tristique eros.Duis at pellentesque magna.Donec magna nisi, vulputate ac nulla eu, ultricies tincidunt tellus.Nunc tincidunt sem urna, nec venenatis libero vehicula ut.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur faucibus aliquam pulvinar.Vivamus mattis volutpat erat, et congue nisi semper quis.Cras vehicula dignissim libero in elementum.Mauris sit amet dolor justo.Morbi consequat velit vel est fermentum euismod.Curabitur in magna augue."
    }));
const blog2 = store.dispatch(addBlog({
    title: "Turpis At Eleifend Leo Mi Elit Aenean Porta Ac...",
    description: "Turpis at eleifend leo mi elit Aenean porta ac sed faucibus. Nunc urna Morbi fringilla vitae orci convallis condimentum auctor sit dui. Urna pretium elit...",
    id: "1",
    date: "APR 23 2021",
    by: "DEMO DEMO",
    img: img1,
    time: "Friday, April 23 2021",
    text: "Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl Urna pretium elit mauris cursus Curabitur at elit Vestibulum . Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas.Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl.Ut vitae nibh id massa vulputate euismod ut quis justo.Ut bibendum sem at massa lacinia, eget elementum ante consectetur.Nulla id pharetra dui, at rhoncus urna.Maecenas non porttitor purus.Nullam ullamcorper nisl quis ornare molestie.Etiam eget erat est.Phasellus elit justo, mattis non lorem non, aliquam aliquam leo.Sed fermentum consectetur magna, eget semper ante.Aliquam scelerisque justo velit.Fusce cursus blandit dolor, in sodales urna vulputate lobortis.Nulla ut tellus turpis.Nullam lacus sem, volutpat id odio sed, cursus tristique eros.Duis at pellentesque magna.Donec magna nisi, vulputate ac nulla eu, ultricies tincidunt tellus.Nunc tincidunt sem urna, nec venenatis libero vehicula ut.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur faucibus aliquam pulvinar.Vivamus mattis volutpat erat, et congue nisi semper quis.Cras vehicula dignissim libero in elementum.Mauris sit amet dolor justo.Morbi consequat velit vel est fermentum euismod.Curabitur in magna augue."
    
}));
const blog3 = store.dispatch(addBlog({
    title: "Morbi Condimentum Molestie Nam Enim Odio Sodales Share  Facebook  Twitter...",
    description: "Sed mauris Pellentesque elit Aliquam at lacus interdum nascetur elit ipsum. Enim ipsum hendrerit Suspendisse turpis laoreet fames tempus ligula pede ac. Et...",
    id: "2",
    date: "APR 23 2021",
    by: "DEMO DEMO",
    img: img2,
    time: "Friday, April 23 2021",
    text: "Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl Urna pretium elit mauris cursus Curabitur at elit Vestibulum . Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas.Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl.Ut vitae nibh id massa vulputate euismod ut quis justo.Ut bibendum sem at massa lacinia, eget elementum ante consectetur.Nulla id pharetra dui, at rhoncus urna.Maecenas non porttitor purus.Nullam ullamcorper nisl quis ornare molestie.Etiam eget erat est.Phasellus elit justo, mattis non lorem non, aliquam aliquam leo.Sed fermentum consectetur magna, eget semper ante.Aliquam scelerisque justo velit.Fusce cursus blandit dolor, in sodales urna vulputate lobortis.Nulla ut tellus turpis.Nullam lacus sem, volutpat id odio sed, cursus tristique eros.Duis at pellentesque magna.Donec magna nisi, vulputate ac nulla eu, ultricies tincidunt tellus.Nunc tincidunt sem urna, nec venenatis libero vehicula ut.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur faucibus aliquam pulvinar.Vivamus mattis volutpat erat, et congue nisi semper quis.Cras vehicula dignissim libero in elementum.Mauris sit amet dolor justo.Morbi consequat velit vel est fermentum euismod.Curabitur in magna augue."
    
}));
const blog4 = store.dispatch(addBlog({
    title: "Urna Pretium Elit Mauris Cursus Curabitur At...",
    description: "Mi vitae magnis Fusce laoreet nibh felis porttitor laoreet Vestibulum faucibus. At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare.",
    id: "3",
    date: "APR 23 2021",
    by: "DEMO DEMO",
    img: img3,
    time: "Friday, April 23 2021",
    text: "Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl Urna pretium elit mauris cursus Curabitur at elit Vestibulum . Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas.Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl.Ut vitae nibh id massa vulputate euismod ut quis justo.Ut bibendum sem at massa lacinia, eget elementum ante consectetur.Nulla id pharetra dui, at rhoncus urna.Maecenas non porttitor purus.Nullam ullamcorper nisl quis ornare molestie.Etiam eget erat est.Phasellus elit justo, mattis non lorem non, aliquam aliquam leo.Sed fermentum consectetur magna, eget semper ante.Aliquam scelerisque justo velit.Fusce cursus blandit dolor, in sodales urna vulputate lobortis.Nulla ut tellus turpis.Nullam lacus sem, volutpat id odio sed, cursus tristique eros.Duis at pellentesque magna.Donec magna nisi, vulputate ac nulla eu, ultricies tincidunt tellus.Nunc tincidunt sem urna, nec venenatis libero vehicula ut.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur faucibus aliquam pulvinar.Vivamus mattis volutpat erat, et congue nisi semper quis.Cras vehicula dignissim libero in elementum.Mauris sit amet dolor justo.Morbi consequat velit vel est fermentum euismod.Curabitur in magna augue."
    
}));
const blog5 = store.dispatch(addBlog({
    title: "Urna Pretium Elit Mauris Cursus Curabitur At...",
    description: "Mi vitae magnis Fusce laoreet nibh felis porttitor laoreet Vestibulum faucibus. At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare.",
    id: "4",
    date: "APR 23 2021",
    by: "DEMO DEMO",
    img: img4,
    time: "Friday, April 23 2021",
    text: "Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl Urna pretium elit mauris cursus Curabitur at elit Vestibulum . Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas.Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl.Ut vitae nibh id massa vulputate euismod ut quis justo.Ut bibendum sem at massa lacinia, eget elementum ante consectetur.Nulla id pharetra dui, at rhoncus urna.Maecenas non porttitor purus.Nullam ullamcorper nisl quis ornare molestie.Etiam eget erat est.Phasellus elit justo, mattis non lorem non, aliquam aliquam leo.Sed fermentum consectetur magna, eget semper ante.Aliquam scelerisque justo velit.Fusce cursus blandit dolor, in sodales urna vulputate lobortis.Nulla ut tellus turpis.Nullam lacus sem, volutpat id odio sed, cursus tristique eros.Duis at pellentesque magna.Donec magna nisi, vulputate ac nulla eu, ultricies tincidunt tellus.Nunc tincidunt sem urna, nec venenatis libero vehicula ut.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur faucibus aliquam pulvinar.Vivamus mattis volutpat erat, et congue nisi semper quis.Cras vehicula dignissim libero in elementum.Mauris sit amet dolor justo.Morbi consequat velit vel est fermentum euismod.Curabitur in magna augue."
    
}));
const blog6 = store.dispatch(addBlog({
    title: "Ipsum Cursus Vestibulum At Interdum Vivamus",
    description: "Donec tellus Nulla lorem Nullam elit id ut elit feugiat lacus. Congue eget dapibus congue tincidunt senectus nibh risus Phasellus tristique justo. Justo...",
    id: "5",
    date: "APR 23 2021",
    by: "DEMO DEMO",
    img: img5,
    time: "Friday, April 23 2021",
    text: "Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl Urna pretium elit mauris cursus Curabitur at elit Vestibulum . Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas.Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl.Ut vitae nibh id massa vulputate euismod ut quis justo.Ut bibendum sem at massa lacinia, eget elementum ante consectetur.Nulla id pharetra dui, at rhoncus urna.Maecenas non porttitor purus.Nullam ullamcorper nisl quis ornare molestie.Etiam eget erat est.Phasellus elit justo, mattis non lorem non, aliquam aliquam leo.Sed fermentum consectetur magna, eget semper ante.Aliquam scelerisque justo velit.Fusce cursus blandit dolor, in sodales urna vulputate lobortis.Nulla ut tellus turpis.Nullam lacus sem, volutpat id odio sed, cursus tristique eros.Duis at pellentesque magna.Donec magna nisi, vulputate ac nulla eu, ultricies tincidunt tellus.Nunc tincidunt sem urna, nec venenatis libero vehicula ut.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur faucibus aliquam pulvinar.Vivamus mattis volutpat erat, et congue nisi semper quis.Cras vehicula dignissim libero in elementum.Mauris sit amet dolor justo.Morbi consequat velit vel est fermentum euismod.Curabitur in magna augue."
    
}));
const blog7 = store.dispatch(addBlog({
    title: "At Risus Pretium Urna Tortor Metus Fringilla",
    description: "Odio ut pretium ligula quam Vestibulum consequat convallis fringilla Vestibulum nulla. Accumsan morbi tristique auctor. At risus pretium urna tortor metus...",
    id: "6",
    date: "APR 23 2021",
    by: "DEMO DEMO",
    img: img6,
    time: "Friday, April 23 2021",
    text: "Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl Urna pretium elit mauris cursus Curabitur at elit Vestibulum . Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas.Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl.Ut vitae nibh id massa vulputate euismod ut quis justo.Ut bibendum sem at massa lacinia, eget elementum ante consectetur.Nulla id pharetra dui, at rhoncus urna.Maecenas non porttitor purus.Nullam ullamcorper nisl quis ornare molestie.Etiam eget erat est.Phasellus elit justo, mattis non lorem non, aliquam aliquam leo.Sed fermentum consectetur magna, eget semper ante.Aliquam scelerisque justo velit.Fusce cursus blandit dolor, in sodales urna vulputate lobortis.Nulla ut tellus turpis.Nullam lacus sem, volutpat id odio sed, cursus tristique eros.Duis at pellentesque magna.Donec magna nisi, vulputate ac nulla eu, ultricies tincidunt tellus.Nunc tincidunt sem urna, nec venenatis libero vehicula ut.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur faucibus aliquam pulvinar.Vivamus mattis volutpat erat, et congue nisi semper quis.Cras vehicula dignissim libero in elementum.Mauris sit amet dolor justo.Morbi consequat velit vel est fermentum euismod.Curabitur in magna augue."
    
}));

const App = () => {
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"))
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id={theme}>
                <Provider store={store}>
                    <CartProvider >
                        <Router />
                    </CartProvider>
                    <div className="switch">
                        <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                    </div>
                </Provider>
            </div>
        </ThemeContext.Provider>


    )
}

ReactDOM.render(<App />, document.getElementById('root'));