'use client'

export default function StateTest() {
    const state = JSON.parse(localStorage.getItem('unit')as string)

    return (
        <div>
            <pre>
                {JSON.stringify(state, null, 2)}
            </pre>
        </div>
    )
}