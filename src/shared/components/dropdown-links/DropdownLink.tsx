import { NavLink, Link, PathMatch } from "react-router-dom";
import { RouteConfig } from "../../types/forms.types";

export default function DropdownLink(props: {
    routeConfigs?: RouteConfig[];
    matchesRoute: PathMatch<string> | null;
    parentRoute: string;
    parentName: string;
}){
    return (
        <span className="w-full px-4 flex flex-col items-center justify-between space-y-3 group border-solid border-b-2 pb-4 border-b-gray-500">
            <div className="w-full flex items-center justify-between">
                <NavLink to={props.parentRoute} className={"text-2xl hover:animate-link " + (props.matchesRoute && 'animate-link')}>{ props.parentName }</NavLink>
                {
                    props.routeConfigs &&
                    <img src="/icons/add.svg" alt="More" className="w-8"/>
                }
            </div>
            {
                props.routeConfigs && 
                <div className="w-full flex-col items-center justify-start space-y-3 ml-3 hidden group-hover:flex">
                    { props.routeConfigs?.map((routeConfig, index) => (
                        <Link to={`${props.parentRoute}/${routeConfig.route}`} className="text-white hover:bg-gradient-to-r from-brightRed to-red-400 w-full px-4 text-xl mx-auto" key={Math.random()}>{ routeConfig.title }</Link>
                    ))}
            </div>
            }
        </span>
)
}