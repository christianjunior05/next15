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
}){
    return (
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
    )
}