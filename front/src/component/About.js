import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./About.css";
import sunny from '../images/sunny.JPG';

const TAB_TYPES = {
    HOME: "home",
    ABOUT: "about",
    WORKS: "works"
};

const tabData = [
    {
        text: "Home",
        type: TAB_TYPES.HOME
    },
    {
        text: "About",
        type: TAB_TYPES.ABOUT
    },
    {
        text: "Works",
        type: TAB_TYPES.WORKS
    }
];

const Tabs = ({ currentTabType, tabData, onClick }) => (
    <ul className="tabs">
        {tabData.map(tab => (
            <li
                className={currentTabType === tab.type ? "active" : ""}
                onClick={() => onClick(tab.type)}
            >
                {tab.text}
            </li>
        ))}
    </ul>
);

const TabContext = React.createContext();

class App extends Component {
    static Home = ({ children }) => (
        <TabContext.Consumer>
            {value => (value.tabType === TAB_TYPES.HOME ? children : null)}
        </TabContext.Consumer>
    );
    static About = ({ children }) => (
        <TabContext.Consumer>
            {value => (value.tabType === TAB_TYPES.ABOUT ? children : null)}
        </TabContext.Consumer>
    );
    static Works = ({ children }) => (
        <TabContext.Consumer>
            {value => (value.tabType === TAB_TYPES.WORKS ? children : null)}
        </TabContext.Consumer>
    );
    static Tabs = props => (
        <TabContext.Consumer>
            {value => (
                <Tabs
                    currentTabType={value.tabType}
                    tabData={tabData}
                    onClick={value.changeTab}
                    {...props}
                />
            )}
        </TabContext.Consumer>
    );
    state = {
        currentTabType: TAB_TYPES.HOME
    };

    changeTab = tabType => {
        this.setState({ currentTabType: tabType });
    };

    render() {
        return (
            <TabContext.Provider
                value={{
                    tabType: this.state.currentTabType,
                    changeTab: this.changeTab
                }}
            >
                {this.props.children}
            </TabContext.Provider>
        );
    }
}

class Clock extends React.Component {
    render() {
        const date1 = new Date();
        const time = `${date1.getFullYear()}/${date1.getMonth() + 1}/${date1.getDate()}`
        return <span>{time}</span>
    }
}

function Usage() {
    return (
        <App>
            <App.Tabs />
            <div className="contents">
                <App.Home>
                    <div className="Sidenav">
                        <img src={sunny} />
                        <div>
                            <span className="Bold-font">I'm Tonoyama</span><span className="Light-font"> yudai</span>
                        </div>
                    </div>
                    <div className="Comment">
                        <p>今日も１日頑張るぞい╭( ･ㅂ･)و</p>
                        <br />
                        <p>
                            殿山 雄大と申します。大阪のとある大学の情報工学科 学部１年です。
                        </p>
                        <p>
                            クラウドコンピューティング、Web 開発、機械学習に興味があります。
                        </p>
                        <p>
                            <Clock></Clock> 現在、京都のWeb系自社開発企業でアルバイトしていて、
                            主に JavaScript を使った開発やテストを行っています。
                        </p>
                    </div>
                </App.Home>
                <App.About>Aboutの時の中身</App.About>
                <App.Works>worksの時の中身</App.Works>
            </div>
        </App>
    );
}

export { Usage as default };
