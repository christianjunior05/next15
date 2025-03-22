'use client'

export default function ErrorBoundary({error} : {error: Error}){
    return <div>Erreur dasn review {error.message}</div>
}