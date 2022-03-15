import useSWR from "swr";

import {VscSync} from "react-icons/vsc";

import {fetcher} from "@/script/swr_get";
import convertB from "@/script/convert_bit";


export default function Quota({user}: { user: string }) {
    const {data, error} = useSWR(`/api/quota?user=${user}`, fetcher)

    if (!data) return <VscSync className={"animate-spin w-4 h-4"}/>

    if (error || data.status == 233) return <div className={"flex justify-center items-center text-2xl"}>failed to load or not found.</div>

    const {total, used, remaining, deleted} = data

    return (
        <div className="stats stats-horizontal shadow">

            <div className="stat">
                <div className="stat-title">Used</div>
                <div className="stat-value">
                    <progress className="progress progress-primary w-36" value={used} max={total}/>
                </div>
                <div className="stat-desc">{convertB(used)}</div>
            </div>

            <div className="stat">
                <div className="stat-title">Remaining</div>
                <div className="stat-value">
                    <progress className="progress progress-success w-36" value={remaining} max={total}/>
                </div>
                <div className="stat-desc">{convertB(remaining)}</div>
            </div>

            <div className="stat">
                <div className="stat-title">Deleted</div>
                <div className="stat-value">
                    <progress className="progress progress-error w-36" value={deleted} max={total}/>
                </div>
                <div className="stat-desc">{convertB(deleted)}</div>
            </div>

            <div className="stat">
                <div className="stat-title">Total</div>
                <div className="stat-value">{convertB(total)}</div>
            </div>

        </div>
    )
}