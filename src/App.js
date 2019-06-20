import React from 'react';
import './App.css';

class App extends React.Component {

    constructor(props) {

        super(props);

        // custom menu DOM ref
        this.menuRef = React.createRef();

        // fns
        this.callMenu = this.callMenu.bind(this);
        this.handleMaskClick = this.handleMaskClick.bind(this);
        this.handleRedItemClick = this.handleRedItemClick.bind(this);
        this.handleGoldItemClick = this.handleGoldItemClick.bind(this);
        this.handleGreenItemClick = this.handleGreenItemClick.bind(this);

    }

    handleMaskClick () {

        this.closeMenu();

    }

    closeMenu () {

        this.menuRef.current.classList.add('hide');

    }

    callMenu (e) {

        // to stop the real right click menu
        e.preventDefault();

        const left = e.clientX + this.menuWidth > window.innerWidth
                ? window.innerWidth - this.menuWidth
                : e.clientX,
            top = e.clientY + this.menuHeight > window.innerHeight
                ? window.innerHeight - this.menuHeight
                : e.clientY;

        this.menuRef.current.style.top = `${top}px`;
        this.menuRef.current.style.left = `${left}px`;

        this.menuRef.current.classList.remove('hide');

    }

    handleRedItemClick () {

        alert('hihi Red Item!!');
        this.closeMenu();

    }

    handleGoldItemClick () {

        alert('hihi Gold Item!!');
        this.closeMenu();

    }

    handleGreenItemClick () {

        alert('hihi Green Item!!');
        this.closeMenu();

    }

    componentDidMount () {

        this.menuWidth = this.menuRef.current.offsetWidth;
        this.menuHeight = this.menuRef.current.offsetHeight;

        document.addEventListener('contextmenu', this.callMenu);
        document.addEventListener('keydown', (e) => {

            // esc
            if (e.keyCode === 27) {

                this.closeMenu();

            }

            // enter
            if (e.keyCode === 13) {

            }

        });

    }

    render () {

        return (
            <div
                className="mask"
                onClick={this.handleMaskClick}
            >
                <ul
                    className="menu hide"
                    ref={this.menuRef}
                    onClick={(e) => {

                        e.stopPropagation();

                    }}
                >
                    <li
                        className="menu-item"
                        onClick={this.handleRedItemClick}
                    >
                        Red Item
                    </li>
                    <li
                        className="menu-item"
                        onClick={this.handleGoldItemClick}
                    >
                        Gold Item
                    </li>
                    <li
                        className="menu-item"
                        onClick={this.handleGreenItemClick}
                    >
                        Green Item
                    </li>
                </ul>
            </div>
        );

    }


}

export default App;
