"use client"

import "../input.css"
import { FormEvent, useEffect, useState } from "react"
import { Props } from "@/lib/types/props"

export default function StepSeven({ nextStep, previousStep, unitData, setUnitData}: Props) {
    const [invuln, setInvuln] = useState(false)
    const [restricion, setRestriction] = useState(false)
    const [leader, setLeader] = useState(false)
    const [transport, setTransport] = useState(false)

    
    const handleSubmit =()=> {
        console.log('submitted')
    }

    const handleBack = () => {
        previousStep();
    }

    return (
        <form className="form-inputs" onSubmit={handleSubmit}>
            <h1>Other stuff</h1>
            <label className="checkbox-label">
                <input 
                className="checkbox"
                type="checkbox"
                checked={invuln}
                onChange={()=> setInvuln(!invuln)}
                />
                Invuln
                {invuln ? <>
                            <input
                            type="text"
                            size={1}
                            className="checkbox-numeral"
                            /> 
                            <label>

                            <input
                            className="checkbox"
                            type="checkbox"
                            checked={restricion}
                            onChange={()=> setRestriction(!restricion)}
                            />
                            Restriction
                                {restricion ? <textarea
                                                className="checkbox-area"
                                                rows={2}
                                                placeholder="enter restrictions"
                                                />
                                :null}
                            </label>
                            </>
                            : null}

            </label>
            <label className="checkbox-label">
                <input 
                type="checkbox"
                className="checkbox"
                checked={leader}
                onChange={()=> setLeader(!leader)}
                 />
                Leader
                {leader ? <textarea
                            className="checkbox-area"
                            rows={3}
                            cols={15}
                            placeholder="enter one unit per line"
                            /> : null}
            </label>
            <label className="checkbox-label">
                <input 
                className="checkbox"
                type="checkbox"
                checked={transport}
                onChange={()=> setTransport(!transport)}
                />
                Transport
                {transport ? <input
                            type="text"
                            size={1}
                            className="checkbox-numeral"
                            /> : null}
            </label>

            <button onClick={handleBack}>Back</button>
            <button type="submit" >Submit</button>
        </form>
    )
}
