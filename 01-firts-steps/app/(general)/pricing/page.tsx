import { spawn } from "child_process";
import type { Metadata } from "next";

export const metadata = {
 title: 'princing',
 description: 'princing',
 keyword: ['pricing','ventas','ricardo zambrano'],
};
export default function PricingPage(){

    return(
        <span className="text-7xl">
            princing page 
        </span>
    )
}