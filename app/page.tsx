import { networkSummary } from "../lib/stellar";
export default function Home(){return <main><p className="tag">STELLAR / SOROBAN</p><h1>LumenLedger</h1><p>Receipt anchoring and reconciliation for Stellar payments.</p><section className="card"><h2>Network</h2><p>{networkSummary()}</p></section></main>}
