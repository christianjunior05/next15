export default function DashboardLayout ({
children,
notifications,
users,
analytics,
loginuser
}:{
    children: React.ReactNode;
    notifications: React.ReactNode;
    users:React.ReactNode ;
    analytics:React.ReactNode ;
    loginuser:React.ReactNode ;
}){

const isLogged = true ;

    return isLogged ?  (
    <>
        <div>{children}</div>
        <div className="flex">
        <div className="flex flex-col">
            <div>{notifications}</div>
            <div>{users}</div>
        </div>
        <div> {notifications}</div>
        </div>  
            
            
             </>
    ) :(loginuser)
}