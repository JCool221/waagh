import './dropdown.css'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link';

export default function Dropdown() {
    const [isVisible, setIsVisible] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const clickRef = menuRef.current || buttonRef.current
    
    const handleDropdown=()=> {
            setIsVisible(!isVisible)
    }

    const handleClickOutside = (e: MouseEvent) => {
        if (clickRef && !clickRef.contains(e.target as Node)){
            setIsVisible(false)
        }
    }


    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }

    }, []);

  return (
    <div>
        <button 
        className="dropdown-button"
        onClick={handleDropdown}
        ref={buttonRef}
        >
            button
            </button>
        <div className="menu" ref={menuRef}>
            {isVisible && 
            <ul>
                <li><Link href="input">Input</Link></li>
                <li><Link href="/">Home</Link></li>
                <li><Link href="shop">Shop</Link></li>
                <li><button onClick={()=> localStorage.removeItem('unit')}>Clear state</button></li>
            </ul>
            }
        </div>
    </div>
  )
}
