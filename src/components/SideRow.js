//import HomeIcon from '@material-ui/icons/Home';
import '../Styles/SideBarRow.css';

const SideRow = ({selected, Icon, title}) => {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className={"sidebarRowIcon"}/>
            <h3 className="sidebarTitle">{title}</h3>
        </div>
    )
}

export default SideRow
