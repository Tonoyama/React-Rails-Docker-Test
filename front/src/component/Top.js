import React from 'react';
import { Link } from 'react-router-dom'
import './Top.css'

class Top extends React.Component {
    render() {
        return (
            <div className="Top-wrapper">
                <p className="Top-title">Top</p>
                <Link className="Top-Link" to="/">Top</Link>
                <Link className="Top-Link" to="/about">About</Link>
                <Link className="Top-Link" to="/works">Works</Link>
                <Link className="Top-Link" to="/skills">Skills</Link>
            </div>
        )
    }
}

export default Top;