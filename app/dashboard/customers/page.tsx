import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Customers',
}

export default function Page() {
    return (
        <div>
            <h1>Customers</h1>
            <p>This is the customers page</p>
        </div>
    )
}
