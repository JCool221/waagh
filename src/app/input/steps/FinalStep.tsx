"use client";

import "../input.css";
import { FormEvent, useState } from "react";
import { Props } from "@/lib/types/props";

export default function FinalStep({
  nextStep,
  previousStep,
  unitData,
  setUnitData,
}: Props) {
    return(
        <div>this will be the final step that finally typechecks this monstrosity and fires the post request</div>
    )
}
