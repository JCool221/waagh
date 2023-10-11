'use client'
import './nav.css'
import Dropdown from '../dropdown/dropdown'

export default function Nav() {
  return (
    <div className="navbar">
        <div>
            icon
        </div>
        <div className="title">TITLE</div>
        <div className='links'>navigation
            <p>|</p>
        <Dropdown />
        </div>
    </div>
  )
}
