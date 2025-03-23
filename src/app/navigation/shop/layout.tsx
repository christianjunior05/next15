export default function ProductLayout({children}:{
    children: React.ReactNode;
})


{
    return(
        <>
        <h2>Je suis imbriquer depuis le layout de product</h2>
        {children}
        </>
    )
}