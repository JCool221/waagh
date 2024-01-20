"use client"

import "../input.css"
import { FormEvent, useEffect, useState } from "react"
import { Props } from "@/lib/types/props"

export default function StepSeven({ nextStep, previousStep, unitData, setUnitData}: Props) {
    const [invuln, setInvuln] = useState(false)
    const [restricion, setRestriction] = useState(false)
    const [leader, setLeader] = useState(false)
    const [transport, setTransport] = useState(false)

    
    const handleSubmit =(e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        setUnitData({...unitData, ...Object.fromEntries(new FormData(form))})
        nextStep();
    }

    return (
        <form className="form-inputs" onSubmit={handleSubmit}>
            <h1>Other stuff</h1>
            <label className="checkbox-label">
                <input 
                className="checkbox"
                name="invuln"
                type="checkbox"
                autoFocus
                checked={invuln}
                onChange={()=> setInvuln(!invuln)}
                />
                Invuln
                {invuln ? <>
                            <input
                            type="text"
                            name="value"
                            size={1}
                            className="checkbox-numeral"
                            /> 
                            <label>

                            <input
                            className="checkbox"
                            name="restriction"
                            type="checkbox"
                            checked={restricion}
                            onChange={()=> setRestriction(!restricion)}
                            />
                            Restriction
                                {restricion ? <textarea
                                                className="checkbox-area"
                                                name="types"
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
                name="leader"
                checked={leader}
                onChange={()=> setLeader(!leader)}
                 />
                Leader
                {leader ? <textarea
                            className="checkbox-area"
                            rows={3}
                            name="units"
                            cols={15}
                            placeholder="enter one unit per line
                            also include any notes"
                            /> : null}
            </label>
            <label className="checkbox-label">
                <input 
                className="checkbox"
                type="checkbox"
                name="transport"
                checked={transport}
                onChange={()=> setTransport(!transport)}
                />
                Transport
                {transport ? <textarea                            
                            rows={3}
                            name="information"
                            cols={15}
                            className="checkbox-area"
                            /> : null}
            </label>

            <button onClick={previousStep}>Back</button>
            <button type="submit" >Submit</button>
        </form>
    )
                }
