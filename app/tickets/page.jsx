import { Suspense } from "react";
import TicketsList from "./TicketsList";
import Loading from "../loading";
import Link from "next/link";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h1>Tickets</h1>
          <p><small>Currently open tickets</small></p>
        </div>
        <Link href="/tickets/create" className="ml-auto">
          <button className="btn-primary">New Ticket</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading/>}>
        <TicketsList />
      </Suspense>
    </main>
  )
}
